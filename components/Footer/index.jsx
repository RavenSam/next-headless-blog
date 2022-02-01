import React from "react"
import { FaFacebookF, FaGoogle, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa"

const icons = [
   { title: "Facebook", icon: FaFacebookF },
   { title: "Twitter", icon: FaTwitter },
   { title: "Gmail", icon: FaGoogle },
   { title: "Instagram", icon: FaInstagram },
   { title: "LinkedIn", icon: FaLinkedinIn },
]

export default function Footer() {
   return (
      <>
         <footer className="text-center bg-gray-900 text-white mt-36">
            <div className=" py-6">
               <div className="flex justify-center flex-wrap space-x-2">
                  {icons.map((el, i) => (
                     <a
                        key={i}
                        href="#!"
                        type="button"
                        className="w-12 h-12 text-lg rounded-full border border-r-gray-100 flex items-center justify-center hover:border-sky-500 hover:text-sky-500 active:bg-sky-500 active:text-white"
                     >
                        <el.icon />
                     </a>
                  ))}
               </div>
            </div>

            <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
               <span className="text-sky-500">SiSky </span>© 2022 Copyright
            </div>
         </footer>
      </>
   )
}
