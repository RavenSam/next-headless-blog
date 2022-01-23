import { useEffect, useState } from "react"
import UserLayout from "../../layouts/UserLayout"

export default function User() {
   const [user, setUser] = useState({})

   useEffect(() => {
      const getUser = JSON.parse(localStorage.getItem("user"))

      if (getUser) {
         setUser(getUser)
      } else {
         location.href = "/login"
      }
   }, [])

   return (
      <div>
         <h1 className="text-2xl font-bold">Welcome {user.username}</h1>
      </div>
   )
}

User.layout = UserLayout
