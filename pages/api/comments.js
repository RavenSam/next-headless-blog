const cookie = require("cookie")

export default async function comments(req, res) {
   if (req.method === "POST") {
      try {
         const { token } = cookie.parse(req.headers.cookie)

         const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/comments`, {
            method: "POST",

            headers: {
               "Content-Type": "application/json",
               Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(req.body),
         })

         const data = response.json()

         res.status(200).json(data)
      } catch (err) {
         res.status(404).json({ error: "Somthing went wrong", err })
      }
   } else {
      res.status(404).json({ error: "only post request" })
   }
}
