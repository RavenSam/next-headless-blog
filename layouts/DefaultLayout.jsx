import { useRouter } from "next/router"
import React from "react"

// Components
import Header from "../components/Header"
import Footer from "../components/Footer"

const pageWithNoNav = ["/login", "/signup", "/reset-password"]

export default function DefaultLayout({ children, site }) {
   const { pathname } = useRouter()

   return (
      <>
         {!pageWithNoNav.includes(pathname) && <Header site={site} />}

         <main className="">{React.cloneElement(children, { site })}</main>

         {!pageWithNoNav.includes(pathname) && <Footer />}
      </>
   )
}
