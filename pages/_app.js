import { ThemeProvider } from "next-themes"
import NextNprogress from "nextjs-progressbar"
import { QueryClient, QueryClientProvider } from "react-query"
import { Toaster } from "react-hot-toast"

// Styles
import "../styles/globals.css"

// Layouts
import DefaultLayout from "../layouts/DefaultLayout"

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
   const Layout = Component.layout || DefaultLayout

   return (
      <ThemeProvider attribute="class">
         <NextNprogress options={{ showSpinner: false }} color="#188ec2" />
         <Toaster />

         <QueryClientProvider client={queryClient}>
            <Layout>
               <Component {...pageProps} />
            </Layout>
         </QueryClientProvider>
      </ThemeProvider>
   )
}

export default MyApp
