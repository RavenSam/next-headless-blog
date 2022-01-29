const cookie = require("cookie")

export default async function likes(req, res) {
   if (req.method === "PUT") {
      try {
         const { token } = cookie.parse(req.headers.cookie)
         const { postId, likes, user } = req.body

         if (token) {
            const likesUsers = likes.data.attributes.likes.data
            const alreadyLikes = likesUsers.map((userLike) => (userLike.id === user.id ? true : false))

            if (alreadyLikes) {
               const filteredLikes = likesUsers.filter((userLike) => userLike.id === user.id)

               const sendLikes = { likes: filteredLikes }

               const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/articles/${postId}`, {
                  method: "PUT",

                  headers: {
                     "Content-Type": "application/json",
                     Authorization: `Bearer ${token}`,
                  },
                  body: JSON.stringify({ data: sendLikes }),
               })

               const data = response.json()

               res.status(200).json(data)
            } else {
               const sendLikes = { likes: [user.id, ...likesUsers] }

               const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/articles/${postId}`, {
                  method: "PUT",

                  headers: {
                     "Content-Type": "application/json",
                     Authorization: `Bearer ${token}`,
                  },
                  body: JSON.stringify({ data: sendLikes }),
               })

               const data = response.json()

               res.status(200).json(data)
            }
         } else {
            return res.status(401).json({ error: "no token" })
         }
      } catch (err) {
         res.status(404).json({ error: "Somthing went wrong", err })
      }
   } else {
      res.status(404).json({ error: "only post request" })
   }
}
