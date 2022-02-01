import { NextSeo } from "next-seo"
import { useRouter } from "next/router"

export default function Meta({ data, site }) {
   const router = useRouter()

   return (
      <NextSeo
         title={data?.attributes.title}
         description={data?.attributes.description}
         canonical={`${site.attributes.Url}${router.asPath}`}
         openGraph={{
            url: site.attributes.Url + router.asPath,
            title: data?.attributes.title,
            description: data?.attributes.description,
            images: [
               {
                  url: data?.attributes.featuredImage.data.attributes.formats.small.url,
                  width: data?.attributes.featuredImage.data.attributes.formats.small.width,
                  height: data?.attributes.featuredImage.data.attributes.formats.small.height,
                  alt: data?.attributes.title,
                  type: data?.attributes.featuredImage.data.attributes.formats.small.mime,
               },
            ],
            article: {
               tags: data.attributes.tags.data.map((tag) => tag.attributes.name),
               publishedTime: data?.attributes.publishedAt,
               modifiedTime: data?.attributes.updatedAt,
            },
         }}
      />
   )
}
