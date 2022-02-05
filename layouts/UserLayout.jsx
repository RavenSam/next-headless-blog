import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { BiMenu } from "react-icons/bi"
import Loading from "../components/Loading"
import React from "react"
import { useTransition, animated } from "react-spring"

// Components
import SideNav from "../components/UserLayout/SideNav"
import useWindowSize from "../utils/useWindowSize"

export default function UserLayout({ children, site }) {
   const { pathname, route } = useRouter()
   const [user, setUser] = useState(null)
   const [openNav, setOpenNav] = useState(true)
   const [menuDrawer, setMenuDrawer] = useState(false)
   const size = useWindowSize()

   const transitions = useTransition(route, {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0, display: "none" },
      config: { duration: 800 },
   })

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

      if (getUser) {
         setUser(getUser)
      } else {
         location.href = "/login"
      }
   }, [])

   if (!user) return <Loading />

   return (
      <>
         <Head>
            <title>Admin - {site.attributes.Name}</title>
         </Head>

         <div style={{ overflow: "hidden " }}>
            <div className="relative z-10">
               <SideNav site={site} openNav={openNav} setOpenNav={setOpenNav} menuDrawer={menuDrawer} user={user} />
            </div>

            <div
               style={{
                  left: size.width > 768 ? (openNav ? 240 : 70) : menuDrawer ? 240 : 0,
                  width: size.width > 768 ? `calc(100% - ${openNav ? "240px" : "70px"})` : `100%`,
               }}
               className="relative h-full  transition-all duration-300"
            >
               <header className="min-h-[2rem] ">
                  <button className="btn-icon md:hidden" onClick={handleMenuSM}>
                     <BiMenu size={25} />
                  </button>
               </header>

               {transitions((style) => (
                  <animated.div style={style}>
                     <main className="p-4 ">{React.cloneElement(children, { user, site })}</main>
                  </animated.div>
               ))}
            </div>
         </div>
      </>
   )
}
