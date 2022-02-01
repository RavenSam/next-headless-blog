import Card from "../components/Card"
import TabsPosts from "../components/TabsPosts"

export default function Archive({ hotArticles, recommandedArticles }) {
   return (
      <div className="xlContainer px-2 mt-10">
         <section className="grid grid-cols-1 sm:grid-cols-12 gap-4">
            <div className="col-span-7 lg:col-span-8 grid grid-cols-12 gap-4 py-4">
               {hotArticles.data.map((post, i) => (
                  <div key={post.id} className={` ${i === 0 ? "col-span-12" : "col-span-6"}`}>
                     <Card varient={2} post={post.attributes} />
                  </div>
               ))}
            </div>

            <div className="col-span-5 lg:col-span-4 py-4">
               <TabsPosts />
            </div>
         </section>

         <section className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-10">
            <div className="col-span-8 ">
               <h2 className="text-xl md:text-2xl font-semibold py-4">{"Editor's Pick"}</h2>

               <div className="gap-4 py-4 space-x-2 space-y-2 grid sm:grid-rows-4 sm:grid-flow-col sm:grid-cols-2">
                  {recommandedArticles.data.map((post, i) => (
                     <div key={post.id} className={` ${i === 0 ? "row-span-4" : ""} mx-auto`}>
                        <Card varient={i === 0 ? 1 : 5} post={post.attributes} />
                     </div>
                  ))}
               </div>
            </div>

            <div className="col-span-4 py-4">
               <div className=" pb-4 rounded-xl">
                  <h3 className="text-lg md:text-xl font-semibold py-4 text-center">Popular Articles</h3>
                  <div className="space-y-10 mt-4 px-4">
                     {recommandedArticles.data.map((post, i) => (
                        <Card varient={4} key={post.id} post={post.attributes} num={i + 1} />
                     ))}
                  </div>
               </div>
            </div>
         </section>
      </div>
   )
}

export async function getStaticProps(context) {
   const resHotArticles = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/articles?pagination[pageSize]=3&fields=title&fields=slug&fields=description&fields=publishedAt&populate=category&populate=featuredImage`
   )
   const hotArticles = await resHotArticles.json()

   const resRecommandedArticles = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/articles?pagination[pageSize]=5&fields=title&fields=slug&fields=description&fields=publishedAt&populate=category&populate=featuredImage`
   )
   const recommandedArticles = await resRecommandedArticles.json()

   return {
      props: { hotArticles, recommandedArticles },
   }
}
