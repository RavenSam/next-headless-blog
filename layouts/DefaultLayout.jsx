import Head from "next/head"

// Components
import Header from "../components/Header"

export default function DefaultLayout({ children }) {
   return (
      <>
         <Head>
            <title>Blog</title>
         </Head>

         <Header />

         <div className="">{children}</div>
      </>
   )
}
