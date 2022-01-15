import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
   render() {
      return (
         <Html lang="en" className="light">
            <Head>
               <link rel="preconnect" href="https://fonts.googleapis.com" />
               <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
               <link
                  href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
                  rel="stylesheet"
               />
            </Head>
            <body className="bg-gray-100 dark:bg-gray-800 dark:text-white">
               <Main />
               <NextScript />
            </body>
         </Html>
      )
   }
}

export default MyDocument
