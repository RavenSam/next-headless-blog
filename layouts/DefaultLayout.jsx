import { useRouter } from "next/router"
import React from "react"
import { useTransition, animated } from "react-spring"

// Components
import Header from "../components/Header"
import Footer from "../components/Footer"

const pageWithNoNav = ["/login", "/signup", "/reset-password"]

export default function DefaultLayout({ children, site }) {
   const { pathname, route } = useRouter()

   const transitions = useTransition(route, {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0, display: "none" },
      config: { duration: 800 },
   })

   return (
      <>
         {!pageWithNoNav.includes(pathname) && <Header site={site} />}

         {transitions((style) => (
            <animated.div style={style}>
               <main>{React.cloneElement(children, { site })}</main>
            </animated.div>
         ))}

         {!pageWithNoNav.includes(pathname) && <Footer />}
      </>
   )
}
