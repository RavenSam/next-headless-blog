const cookie = require("cookie")

export default function login(req, res) {
   if (req.method === "POST") {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/local`, {
         method: "POST",
         headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
         },
         body: JSON.stringify(req.body.loginInfo),
      })
         .then((response) => response.json())
         .then((data) => {
            if (data.error) {
               res.json(data.error)
               res.status(404)
               res.end()
            } else {
               res.setHeader(
                  "Set-Cookie",
                  cookie.serialize("token", data.jwt, {
                     httpOnly: true,
                     maxAge: 60 * 60 * 24 * 7, // 1 week
                     path: "/",
                  })
               )

               res.status(200).json(data.user)
               res.end()
            }
         })
   } else {
      res.status(404).json({ error: "only post request" })
   }
}
