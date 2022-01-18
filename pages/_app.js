import { ThemeProvider } from "next-themes"
import NextNprogress from "nextjs-progressbar"
import { QueryClient, QueryClientProvider } from "react-query"

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

         <QueryClientProvider client={queryClient}>
            <Layout>
               <Component {...pageProps} />
            </Layout>
         </QueryClientProvider>
      </ThemeProvider>
   )
}

export default MyApp
