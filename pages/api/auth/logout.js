const cookie = require("cookie")

export default function logout(req, res) {
   res.setHeader(
      "Set-Cookie",
      cookie.serialize("token", "", {
         httpOnly: true,
         expires: new Date(0),
      })
   )

   return res.status(200).json({ message: "user logged out" })
}
