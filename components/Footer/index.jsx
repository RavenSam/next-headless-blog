import React from "react"
import { FaFacebookF, FaGoogle, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa"
import Link from "next/link"

export default function Footer() {
   return (
      <>
         <footer className="text-center bg-gray-900 text-white mt-52">
            <div className=" py-16 grid grid-cols-1 px-2 sm:grid-cols-2 gap-y-8 gap-x-2">
               <div className="max-w-sm space-y-8 mx-auto">
                  <div className="flex items-center justify-center">
                     <input
                        aria-label="newslatter"
                        type="email"
                        name="newslatter"
                        placeholder="Subscribe to our Newslatter"
                        className="input !rounded-r-none !border-r-0 !bg-gray-800 !text-white"
                     />

                     <button className="btn-secondary h-full  !rounded-l-none ">Subscribe</button>
                  </div>

                  <div className="flex justify-evenly flex-wrap ">
                     {icons.map((el, i) => (
                        <a
                           key={i}
                           href="#!"
                           type="button"
                           aria-label={el.title}
                           className="w-12 h-12 text-lg rounded-full border border-r-gray-100 flex items-center justify-center hover:border-sky-500 hover:text-sky-500 active:bg-sky-500 active:text-white"
                        >
                           <el.icon />
                        </a>
                     ))}
                  </div>
               </div>

               <div className="flex flex-wrap justify-evenly text-left">
                  {links.map((el, i) => (
                     <ul key={i}>
                        <li className="uppercase font-semibold text-sm sm:text-base mb-4 tracking-wider">{el.name}</li>
                        <li className="flex flex-col space-y-4 text-xs sm:text-sm">
                           {el.lists.map((list, n) => (
                              <Link key={n} href={list.href}>
                                 <a className="hover:underline text-gray-400 hover:text-white">{list.name}</a>
                              </Link>
                           ))}
                        </li>
                     </ul>
                  ))}
               </div>
            </div>

            <div className="text-center px-4 py-10 " style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
               <span className="text-sky-400 ">SiSky </span>© 2022 Copyright
            </div>
         </footer>
      </>
   )
}

const icons = [
   { title: "Facebook", icon: FaFacebookF },
   { title: "Twitter", icon: FaTwitter },
   { title: "Gmail", icon: FaGoogle },
   { title: "Instagram", icon: FaInstagram },
   { title: "LinkedIn", icon: FaLinkedinIn },
]

const links = [
   {
      name: "account",
      lists: [
         { name: "Log In", href: "/login" },
         { name: "Sign Up", href: "/signup" },
         { name: "My Account", href: "/user" },
         { name: "Settings", href: "/user/settings" },
      ],
   },

   {
      name: "navigation",
      lists: [
         { name: "Home", href: "/" },
         { name: "Blog", href: "/archive" },
         { name: "Contact Us", href: "/contact" },
      ],
   },

   {
      name: "support",
      lists: [
         { name: "Contact", href: "/contact" },
         { name: "FAQ", href: "#!" },
         { name: "Terms of Use", href: "#!" },
         { name: "Privacy Policy", href: "#!" },
      ],
   },
]
