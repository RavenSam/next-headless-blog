import Image from "next/image"
import Link from "next/link"
import trancate from "../../utils/trancate"
import moment from "moment"

export default function CardVarient5({ post }) {
   return (
      <div className="group flex max-w-md space-x-4 ">
         <div className="relative img min-w-[100px]">
            <Image
               className="w-full rounded-xl"
               src={post.featuredImage.data.attributes.formats.small.url}
               alt={post.title}
               width={100}
               height={80}
               objectFit="cover"
               quality={100}
            />
         </div>

         <div className="max-w-sm space-y-5">
            <div className="">
               <Link href={`/post/${post.slug}`}>
                  <a
                     title={post.title}
                     className="text-sm sm:text-base font-semibold mb-2 group-hover:text-sky-500 transition duration-500"
                  >
                     {trancate(post.title, 40)}
                  </a>
               </Link>

               <p className="text-gray-600 font-medium dark:text-gray-400 text-sm ">
                  {moment(post.publishedAt).format("DD MMM YYYY")}
               </p>
            </div>
         </div>
      </div>
   )
}
