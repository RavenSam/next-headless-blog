import { ThemeProvider } from "next-themes"
import NextNprogress from "nextjs-progressbar"

// Styles
import "../styles/globals.css"

// Layouts
import DefaultLayout from "../layouts/DefaultLayout"

function MyApp({ Component, pageProps }) {
   const Layout = Component.layout || DefaultLayout

   return (
      <ThemeProvider attribute="class">
         <NextNprogress options={{ showSpinner: false }} color="#188ec2" />

         <Layout>
            <Component {...pageProps} />
         </Layout>
      </ThemeProvider>
   )
}

export default MyApp
