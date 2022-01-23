import Head from "next/head"
import { useRouter } from "next/router"

// Components
import SideNav from "../components/UserLayout/SideNav"

export default function UserLayout({ children }) {
   const { pathname } = useRouter()
   const [openNav, setOpenNav] = useState(true);

   return (
      <>
         <Head>
            <title>Admin - SiSky</title>
            <link rel="icon" type="image/x-icon" href="/favicon.ico" />
         </Head>

         <SideNav openNav={openNav} setOpenNav={setOpenNav} />

         <div style={{ left: 240, width: `calc(100% - 240px)` }} className="absolute  h-full">
            <main className="p-4">{children}</main>
         </div>
      </>
   )
}
