import Image from "next/image"
import { useTheme } from "next-themes"
import SearchModal from "../SearchModal"
import NavbarMD from "./NavbarMD"
import NavbarSM from "./NavbarSM"
import Link from "next/link"
import { useEffect, useState } from "react"

const navLists = [
   { title: "home", href: "/" },
   { title: "blog", href: "/archive" },
   { title: "contact", href: "/contact" },
]

export default function Header({ site }) {
   const { theme } = useTheme()
   const [user, setUser] = useState(null)

   useEffect(() => {
      const getUser = JSON.parse(localStorage.getItem("user"))
      setUser(getUser)
   }, [])

   return (
      <header className="w-full ">
         <div className="xlContainer flex items-center justify-between py-4 px-2">
            <Link href="/">
               <a className="img overflow-hidden">
                  <Image
                     className="w-full"
                     src={
                        theme === "dark"
                           ? site.attributes.Dark_logo.data.attributes.url
                           : site.attributes.Light_logo.data.attributes.url
                     }
                     alt="logo"
                     width={80}
                     height={40}
                     objectFit="contain"
                  />
               </a>
            </Link>

            <div className="hidden md:block">
               <NavbarMD navLists={navLists} user={user} />
            </div>

            <div className="md:hidden flex items-center space-x-2">
               <SearchModal />

               <NavbarSM navLists={navLists} user={user} />
            </div>
         </div>
      </header>
   )
}
