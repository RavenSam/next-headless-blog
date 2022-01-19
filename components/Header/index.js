import Image from "next/image"
import { useTheme } from "next-themes"
import SearchModal from "../SearchModal"
import NavbarMD from "./NavbarMD"
import NavbarSM from "./NavbarSM"
import Link from "next/link"

const navLists = [
   { title: "home", href: "/" },
   { title: "latest", href: "/latest" },
   { title: "about us", href: "/about" },
   { title: "contact", href: "/contact" },
]

export default function Header() {
   const { theme } = useTheme()

   return (
      <header className="w-full ">
         <div className="xlContainer flex items-center justify-between py-4 px-2">
            <Link href="/">
               <a className="img overflow-hidden">
                  <Image
                     className="w-full"
                     src={theme === "dark" ? "/logo-white.png" : "/logo-dark.png"}
                     alt="logo"
                     width={80}
                     height={40}
                     objectFit="contain"
                  />
               </a>
            </Link>

            <div className="hidden md:block">
               <NavbarMD navLists={navLists} />
            </div>

            <div className="md:hidden flex items-center space-x-2">
               <SearchModal />

               <NavbarSM navLists={navLists} />
            </div>
         </div>
      </header>
   )
}
