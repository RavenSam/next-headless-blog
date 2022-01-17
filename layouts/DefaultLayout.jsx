import Head from "next/head"
import { useRouter } from "next/router"

// Components
import Header from "../components/Header"

const pageWithNoNav = ["/login", "/signup", "/reset-password"]

export default function DefaultLayout({ children }) {
   const { pathname } = useRouter()

   return (
      <>
         <Head>
            <title>Blog</title>
         </Head>

         {!pageWithNoNav.includes(pathname) && <Header />}

         <div className="">{children}</div>
      </>
   )
}
