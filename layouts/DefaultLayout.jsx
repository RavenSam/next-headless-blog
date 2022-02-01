import Head from "next/head"
import { useRouter } from "next/router"

// Components
import Header from "../components/Header"
import Footer from "../components/Footer"

const pageWithNoNav = ["/login", "/signup", "/reset-password"]

export default function DefaultLayout({ children }) {
   const { pathname } = useRouter()

   return (
      <>
         <Head>
            <title>SiSky</title>
            <link rel="icon" type="image/x-icon" href="/favicon.ico" />
         </Head>

         {!pageWithNoNav.includes(pathname) && <Header />}

         <div className="">{children}</div>

         {!pageWithNoNav.includes(pathname) && <Footer />}
      </>
   )
}
