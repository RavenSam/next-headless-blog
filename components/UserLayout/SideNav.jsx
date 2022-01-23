import {
   BiBookmark,
   BiCartAlt,
   BiChat,
   BiCog,
   BiGridAlt,
   BiHeart,
   BiHistory,
   BiLogOut,
   BiMenu,
   BiPlusMedical,
   BiUser,
} from "react-icons/bi"
import logout from "../../lib/logout"
import ThemeToggle from "../ThemeToggle"

const navLinks = [
   { name: "dashboard", icon: BiGridAlt, href: "#" },
   { name: "user", icon: BiUser, href: "#" },
   { name: "messages", icon: BiChat, href: "#" },
   { name: "order", icon: BiCartAlt, href: "#" },
   { name: "liked", icon: BiHeart, href: "#" },
   { name: "history", icon: BiHistory, href: "#" },
   { name: "bookmark", icon: BiBookmark, href: "#" },
   { name: "settings", icon: BiCog, href: "#" },
]

export default function SideNav({ openNav, setOpenNav, menuDrawer }) {
   return (
      <>
         <div
            className={`sidebar  fixed top-0 left-0 h-full md:translate-x-0 bg-gray-900 px-3 py-1 transition-all duration-300 ${
               openNav ? "w-[240px] " : "w-[70px] "
            } ${menuDrawer ? "translate-x-0" : "-translate-x-[240px] "}`}
         >
            <div className="logo_content">
               <div
                  className={`logo  text-white flex items-center gap-2 h-12 w-full transition-all duration-300  ${
                     !openNav && "pointer-events-none opacity-0"
                  }`}
               >
                  <BiPlusMedical fontSize={28} className="" />
                  <span className="logo_name  text-xl ">SiSky</span>
               </div>

               <button
                  className={`absolute hidden md:block top-1 transform -translate-x-1/2 text-white  text-xl text-center leading-[50px] h-[50px] w-[50px]  ${
                     openNav ? "left-[90%]" : "left-[70%]"
                  }`}
                  onClick={() => setOpenNav(!openNav)}
               >
                  <BiMenu size={25} />
               </button>
            </div>

            <ul className="nav_list mt-5">
               {navLinks.map((link, i) => (
                  <li key={i} className="group relative h-12 w-full leading-[48px] ">
                     <a href={`${link.href}`} className="btn-1">
                        <span className="h-12 min-w-[48px] rounded-xl flex items-center justify-center">
                           <link.icon size={20} />
                        </span>
                        {openNav && <span className="links_name">{link.name}</span>}
                     </a>

                     {!openNav && <span className="tooltip ">{link.name}</span>}
                  </li>
               ))}
            </ul>

            <div className="profile_details absolute left-0 bottom-0 w-full text-white px-3 py-1 ">
               <button className="btn-1 relative group" onClick={logout}>
                  <span className="h-12  min-w-[48px] rounded-xl flex items-center justify-center">
                     <BiLogOut size={20} />
                  </span>
                  {openNav && <span className="">Log Out</span>}
                  {!openNav && <span className="tooltip">Log Out</span>}
               </button>
            </div>
         </div>
      </>
   )
}
