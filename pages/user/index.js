import { useEffect, useState } from "react"
import UserLayout from "../../layouts/UserLayout"

export default function User({ user }) {
   return (
      <div>
         <h1 className="text-2xl font-bold">Welcome {user.username}</h1>
      </div>
   )
}

User.layout = UserLayout
