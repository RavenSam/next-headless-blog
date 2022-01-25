const cookie = require("cookie")

export default function register(req, res) {
   if (req.method === "POST") {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/local/register`, {
         method: "POST",
         headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
         },
         body: JSON.stringify(req.body.data),
      })
         .then((response) => response.json())
         .then((data) => {
            if (data.error) {
               return res.status(404).json(data.error)
            } else {
               res.setHeader(
                  "Set-Cookie",
                  cookie.serialize("token", data.jwt, {
                     httpOnly: true,
                     maxAge: 60 * 60 * 24 * 7, // 1 week
                     path: "/",
                  })
               )

               return res.status(200).json(data.user)
            }
         })
   } else {
      res.status(404).json({ error: "only post request" })
   }
}
