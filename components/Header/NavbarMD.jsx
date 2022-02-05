import Link from "next/link"
import { useRouter } from "next/router"
import { HiOutlineLogout } from "react-icons/hi"
import logout from "../../lib/logout"
import SearchModal from "../SearchModal"
import Dropdown from "../shared/Dropdown"
import ThemeToggle from "../ThemeToggle"

export default function NavbarMD({ navLists, user }) {
   const { pathname } = useRouter()

   return (
      <div className="flex items-center space-x-2">
         <nav className="flex items-center space-x-1 text-sm">
            {navLists.map((list) => (
               <Link href={list.href} key={list.title}>
                  <a className={`btn-ghost ${list.href === pathname && "!text-sky-500"}`}>{list.title}</a>
               </Link>
            ))}
         </nav>

         <SearchModal />

         {user ? (
            <Dropdown round user={user}>
               <div className="p-1 flex flex-col text-sm space-y-1">
                  <Link href="/user">
                     <a className="btn-ghost ">profile</a>
                  </Link>

                  <Link href="/user/bookmarks">
                     <a className="btn-ghost ">bookmarks</a>
                  </Link>

                  <Link href="/user/settings">
                     <a className="btn-ghost ">settings</a>
                  </Link>

                  <hr className="dark:border-gray-700" />

                  <div className="flex items-center justify-evenly ">
                     <ThemeToggle />

                     <button className="btn-icon " onClick={logout}>
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

                  <Link href="/signup">
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
