import { ThemeProvider } from "next-themes"
import NextNprogress from "nextjs-progressbar"
import { QueryClient, QueryClientProvider } from "react-query"
import { Toaster } from "react-hot-toast"
import Head from "next/head"
import { NextSeo } from "next-seo"
import Aos from "aos"

// Styles
import "../styles/globals.css"
import "aos/dist/aos.css"

// Layouts
import DefaultLayout from "../layouts/DefaultLayout"
import { useEffect } from "react"

const queryClient = new QueryClient()

export default function MyApp({ Component, pageProps, site }) {
   const Layout = Component.layout || DefaultLayout

   useEffect(() => {
      Aos.init({ duration: 1000 })
   }, [])

   return (
      <>
         <Head>
            <link rel="icon" type="image/x-icon" href={site.attributes.Favicon.data.attributes.url} />
         </Head>

         <NextSeo
            defaultTitle={site.attributes.Name}
            openGraph={{ type: "website", site_name: site.attributes.Name }}
         />

         <ThemeProvider attribute="class">
            <NextNprogress options={{ showSpinner: false }} color="#188ec2" />
            <Toaster />

            <QueryClientProvider client={queryClient}>
               <Layout site={site}>
                  <Component {...pageProps} />
               </Layout>
            </QueryClientProvider>
         </ThemeProvider>
      </>
   )
}

MyApp.getInitialProps = async (ctx) => {
   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/site?populate=*`)
   const site = await res.json()
   return { site: site.data }
}
