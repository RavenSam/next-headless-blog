const cookie = require("cookie")
const { isEmpty } = require("lodash")

export default async function bookmark(req, res) {
   if (req.method === "PUT") {
      try {
         const { token } = cookie.parse(req.headers.cookie)
         const { postId, user } = req.body

         if (token) {
            const resBookmarks = await fetch(
               `${process.env.NEXT_PUBLIC_API_URL}/api/articles/${postId}?&fields=slug&populate=bookmarks`
            )

            const bookmarks = await resBookmarks.json()

            const bookmarksUsers = bookmarks.data.attributes.bookmarks.data
            const alreadyBookmarked = bookmarksUsers.some((userBookmarks) => userBookmarks.id === user.id)

            if (alreadyBookmarked) {
               // Already Exists
               // Remove the bookmarks

               const filteredbookmarks = bookmarksUsers.filter((userBookmarks) => userBookmarks.id !== user.id)

               const sendbookmarks = { bookmarks: filteredbookmarks }

               const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/articles/${postId}`, {
                  method: "PUT",

                  headers: {
                     "Content-Type": "application/json",
                     Authorization: `Bearer ${token}`,
                  },
                  body: JSON.stringify({ data: sendbookmarks }),
               })

               const data = response.json()

               res.status(200).json(data)
            } else {
               // Not Exists
               // Add the bookmarks

               const sendbookmarks = isEmpty(bookmarksUsers)
                  ? { bookmarks: user.id }
                  : { bookmarks: [user.id, ...bookmarksUsers] }

               const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/articles/${postId}`, {
                  method: "PUT",

                  headers: {
                     "Content-Type": "application/json",
                     Authorization: `Bearer ${token}`,
                  },
                  body: JSON.stringify({ data: sendbookmarks }),
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
