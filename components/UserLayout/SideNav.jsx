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

export default function SideNav() {
   return (
      <>
         <div className="sidebar  fixed top-0 left-0 h-full w-[240px] bg-gray-900 px-3 py-1">
            <div className="logo_content">
               <div className="logo  text-white flex items-center gap-2 h-12 w-full ">
                  <BiPlusMedical fontSize={28} className="" />
                  <span className="logo_name  text-xl ">SiSky</span>
               </div>

               <button className="btn absolute left-[90%] top-1 transform -translate-x-1/2 text-white  text-xl text-center leading-[50px] h-[50px] w-[50px]">
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
                        <span className="links_name">{link.name}</span>
                     </a>

                     <span className="tooltip ">{link.name}</span>
                  </li>
               ))}
            </ul>

            <div className="profile_details absolute left-0 bottom-0 w-full text-white px-3 py-1 ">
               <button className="btn-1 relative group">
                  <span className="h-12  min-w-[48px] rounded-xl flex items-center justify-center">
                     <BiLogOut size={20} />
                  </span>
                  <span className="tooltip">Log Out</span>
               </button>
            </div>
         </div>
      </>
   )
}
