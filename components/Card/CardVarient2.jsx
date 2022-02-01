import moment from "moment"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import trancate from "../../utils/trancate"

export default function CardVarient2({ post }) {
   const { push } = useRouter()

   return (
      <>
         <div
            className="relative group block overflow-hidden rounded-xl bg-black cursor-pointer"
            onClick={() => push(`/post/${post.slug}`)}
         >
            <div className=" img w-full overflow-hidden rounded-xl ">
               <Image
                  className="w-full rounded-xl transform group-hover:scale-110 transition duration-500 "
                  src={post.featuredImage.data.attributes.formats.medium.url}
                  alt={post.title}
                  width={500}
                  height={400}
                  objectFit="cover"
               />
            </div>

            <div className="absolute inset-0 bg-black bg-opacity-50" />

            <div className="absolute inset-0 h-full flex flex-col justify-end p-[8%]">
               <Link href="#2">
                  <a className="cat">{post.category.data.attributes.name}</a>
               </Link>

               <div className="py-2">
                  <Link href={`/post/${post.slug}`}>
                     <a
                        title={post.title}
                        className="font-semibold sm:font-bold text-white text-base md:text-xl lg:text-2xl hover:text-sky-500 "
                     >
                        {trancate(post.title, 30)}
                     </a>
                  </Link>
               </div>

               <div className="flex items-center text-sm text-gray-300 space-x-2">
                  <Link href="#3">
                     <a className="hover:text-sky-500">JohnDoe</a>
                  </Link>

                  <span>&#8226;</span>

                  <span>{moment(post.publishedAt).format("DD MMM YYYY")}</span>
               </div>
            </div>
         </div>
      </>
   )
}
