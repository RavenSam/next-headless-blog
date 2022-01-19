import Head from "next/head"
import { marked } from "marked"
import Image from "next/image"

export default function Post({ data }) {
   const html = marked.parse(data.attributes.content)

   return (
      <>
         <Head>
            <title>{data?.attributes.title}</title>
         </Head>

         <div className="img overflow-hidden rounded-xl p-2">
            <Image
               className="w-full rounded-xl transform group-hover:scale-110 transition duration-500"
               src={data.attributes.featuredImage.data.attributes.formats.large.url}
               alt={data.attributes.title}
               width={1000}
               height={600}
               objectFit="cover"
               quality={100}
            />
         </div>

         <div className="xlContainer px-2">
            <div className="grid md:grid-cols-12">
               <div className="col-span-2 w-full"></div>

               <div className="col-span-8 px-6 pb-6 md:-mt-48 mb-10 z-10 rounded-xl border-2 dark:border-none bg-white dark:bg-gray-900 shadow-xl">
                  <article className="prose dark:prose-invert ">
                     <div dangerouslySetInnerHTML={{ __html: html }} />
                  </article>
               </div>

               <div className="col-span-2 w-full"></div>
            </div>
         </div>
      </>
   )
}

export async function getStaticProps({ params }) {
   const article = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/articles?filters[slug]=${params.slug}&populate=*`
   )
   const { data } = await article.json()

   return {
      props: {
         data: data[0],
      },
   }
}

export async function getStaticPaths() {
   const articlesSlugs = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/articles?fields=slug`)
   const { data } = await articlesSlugs.json()

   const paths = data.map((el) => {
      return { params: { slug: el.attributes.slug.toString() } }
   })

   return {
      paths,
      fallback: true,
   }
}
