const cookie = require("cookie")
const { isEmpty } = require("lodash")

export default async function likes(req, res) {
   if (req.method === "PUT") {
      try {
         const { token } = cookie.parse(req.headers.cookie)
         const { postId, user } = req.body

         if (token) {
            const resLikes = await fetch(
               `${process.env.NEXT_PUBLIC_API_URL}/api/articles/${postId}?&fields=slug&populate=likes`
            )

            const likes = await resLikes.json()

            const likesUsers = likes.data.attributes.likes.data
            const alreadyLikes = likesUsers.some((userLike) => userLike.id === user.id)

            if (alreadyLikes) {
               // Already Exists
               // Remove the like

               const filteredLikes = likesUsers.filter((userLike) => userLike.id !== user.id)

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
               // Not Exists
               // Add the like

               const sendLikes = isEmpty(likesUsers) ? { likes: user.id } : { likes: [user.id, ...likesUsers] }

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
      res.status(404).json({ error: "post request only" })
   }
}
