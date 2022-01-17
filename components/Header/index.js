import SearchModal from "../SearchModal"
import NavbarMD from "./NavbarMD"
import NavbarSM from "./NavbarSM"

const navLists = [
   { title: "home", href: "/" },
   { title: "latest", href: "/latest" },
   { title: "about us", href: "/about" },
   { title: "contact", href: "/contact" },
]

export default function Header() {
   return (
      <header className="w-full ">
         <div className="xlContainer flex items-center justify-between py-4 px-2">
            <div>
               <h2 className="text-3xl font-bold">LOGO</h2>
            </div>

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
