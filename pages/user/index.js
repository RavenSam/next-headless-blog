import { NextSeo } from "next-seo"
import { useEffect, useState } from "react"
import UserLayout from "../../layouts/UserLayout"

export default function User({ user }) {
   return (
      <>
         <NextSeo title="User Dashboard" description="User Dashboard | Have fun" />
         <h1 className="text-2xl font-bold">Welcome {user.username}</h1>
      </>
   )
}

User.layout = UserLayout
