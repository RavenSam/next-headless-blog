import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { HiOutlineLogin, HiOutlineLogout } from "react-icons/hi"
import Dropdown from "../shared/Dropdown"
import ThemeToggle from "../ThemeToggle"

export default function NavbarMD({ navLists }) {
   const [logged, setLogged] = useState(true)
   const { pathname } = useRouter()

   const handleLogOut = () => setLogged(false)

   return (
      <div className="flex items-center space-x-2">
         <nav className="flex items-center space-x-1 text-sm">
            {navLists.map((list) => (
               <Link href={list.href} key={list.title}>
                  <a className={`btn-ghost ${list.href === pathname && "!text-sky-500"}`}>{list.title}</a>
               </Link>
            ))}
         </nav>

         {logged ? (
            <Dropdown round img="/images/user.jpg">
               <div className="p-1 flex flex-col text-sm space-y-1">
                  <Link href="/login">
                     <a className="btn-ghost ">profile</a>
                  </Link>

                  <Link href="/">
                     <a className="btn-ghost ">settings</a>
                  </Link>

                  <Link href="/">
                     <a className="btn-ghost ">help</a>
                  </Link>

                  <div className="flex items-center justify-evenly ">
                     <ThemeToggle />

                     <button className="btn-icon " onClick={handleLogOut}>
                        <HiOutlineLogout size={20} />
                     </button>
                  </div>
               </div>
            </Dropdown>
         ) : (
            <Dropdown round>
               <div className="p-1 flex flex-col text-sm space-y-1">
                  <Link href="/login">
                     <a className="btn-ghost ">login</a>
                  </Link>

                  <Link href="/sign-up">
                     <a className="btn-ghost ">sign up</a>
                  </Link>

                  <div className="flex items-center justify-center">
                     <ThemeToggle />
                  </div>
               </div>
            </Dropdown>
         )}
      </div>
   )
}