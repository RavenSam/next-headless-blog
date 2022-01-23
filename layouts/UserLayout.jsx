import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { BiMenu } from "react-icons/bi"

// Components
import SideNav from "../components/UserLayout/SideNav"
import useWindowSize from "../utils/useWindowSize"

export default function UserLayout({ children }) {
   const { pathname } = useRouter()
   const [openNav, setOpenNav] = useState(true)
   const [menuDrawer, setMenuDrawer] = useState(false)
   const size = useWindowSize()

   const handleMenuSM = () => {
      setOpenNav(true)
      setMenuDrawer(!menuDrawer)
   }

   return (
      <>
         <Head>
            <title>Admin - SiSky</title>
            <link rel="icon" type="image/x-icon" href="/favicon.ico" />
         </Head>

         <div style={{ overflow: "hidden " }}>
            <SideNav openNav={openNav} setOpenNav={setOpenNav} menuDrawer={menuDrawer} />

            <div
               style={{
                  left: size.width > 768 ? (openNav ? 240 : 70) : menuDrawer ? 240 : 0,
                  width: size.width > 768 ? `calc(100% - ${openNav ? "240px" : "70px"})` : `100%`,
               }}
               className={`relative  h-full  transition-all duration-300`}
            >
               <button className="btn-icon md:hidden" onClick={handleMenuSM}>
                  <BiMenu size={25} />
               </button>

               <main className="p-4">{children}</main>
            </div>
         </div>
      </>
   )
}
