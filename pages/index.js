import Hero from "../components/Sections/Hero"
import Recommended from "../components/Sections/Recommended"
import Testimonials from "../components/Sections/Testimonials"

export default function Home({ hotArticles }) {
   return (
      <>
         <section>
            <Hero articles={hotArticles} />
         </section>

         <section className="mt-36">
            <Recommended articles={hotArticles} />
         </section>

         <section className="mt-36">
            <Testimonials />
         </section>
      </>
   )
}

export async function getStaticProps(context) {
   const resHotArticles = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/articles?pagination[pageSize]=6&fields=title&fields=slug&fields=description&fields=publishedAt&populate=category&populate=featuredImage`
   )
   const hotArticles = await resHotArticles.json()

   return {
      props: { hotArticles },
   }
}
