import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { BiMenu } from "react-icons/bi"
import Loading from "../components/Loading"

// Components
import SideNav from "../components/UserLayout/SideNav"
import useWindowSize from "../utils/useWindowSize"

export default function UserLayout({ children }) {
   const { pathname } = useRouter()
   const [user, setUser] = useState(null)
   const [openNav, setOpenNav] = useState(true)
   const [menuDrawer, setMenuDrawer] = useState(false)
   const size = useWindowSize()

   const handleMenuSM = () => {
      setOpenNav(true)
      setMenuDrawer(!menuDrawer)
   }

   useEffect(() => {
      if (!menuDrawer && size.width > 768 && size.width < 1300) {
         setOpenNav(false)
      }

      if (!menuDrawer && size.width > 1300) {
         setOpenNav(true)
      }
   }, [menuDrawer, size.width])

   useEffect(() => {
      const getUser = JSON.parse(localStorage.getItem("user"))
      setUser(getUser)
   }, [])

   if (!user) return <Loading />

   return (
      <>
         <Head>
            <title>Admin - SiSky</title>
            <link rel="icon" type="image/x-icon" href="/favicon.ico" />
         </Head>

         <div style={{ overflow: "hidden " }}>
            <SideNav openNav={openNav} setOpenNav={setOpenNav} menuDrawer={menuDrawer} user={user} />

            <div
               style={{
                  left: size.width > 768 ? (openNav ? 240 : 70) : menuDrawer ? 240 : 0,
                  width: size.width > 768 ? `calc(100% - ${openNav ? "240px" : "70px"})` : `100%`,
               }}
               className={`relative -z-10   h-full  transition-all duration-300`}
            >
               <header className="min-h-[2rem] ">
                  <button className="btn-icon md:hidden" onClick={handleMenuSM}>
                     <BiMenu size={25} />
                  </button>
               </header>

               <main className="p-4">{children}</main>
            </div>
         </div>
      </>
   )
}
