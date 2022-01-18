export default function imageUrl(featuredImage, format) {
   const url = `${process.env.NEXT_PUBLIC_API_URL}${featuredImage.data.attributes.formats[format].url}`

   return url
}
