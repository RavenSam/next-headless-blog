// Styles
import "../styles/globals.css"

// Layouts
import DefaultLayout from "../layouts/DefaultLayout"

function MyApp({ Component, pageProps }) {
   const Layout = Component.layout || DefaultLayout

   return (
      <Layout>
         <Component {...pageProps} />
      </Layout>
   )
}

export default MyApp
