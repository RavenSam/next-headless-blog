import Image from "next/image"
import Link from "next/link"
import trancate from "../../utils/trancate"

export default function CardVarient0({ post }) {
   return (
      <>
         <div className="relative block group max-w-sm rounded overflow-hidden space-y-3">
            <div className="img overflow-hidden rounded-xl ">
               <Image
                  className="w-full rounded-xl transform group-hover:scale-110 transition duration-500"
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={230}
                  objectFit="cover"
               />
            </div>

            <div className="absolute top-5 left-5">
               <Link href="#2">
                  <a className="bg-gradient-to-l from-sky-300 to-sky-500 text-white font-semibold  text-xs rounded-full px-4 py-2 opacity-80 hover:opacity-100">
                     {post.category}
                  </a>
               </Link>
            </div>

            <div className="">
               <Link href="#3">
                  <a
                     title={post.title}
                     className="font-bold text-lg sm:text-xl transition duration-500 group-hover:text-sky-500"
                  >
                     {trancate(post.title, 30)}
                  </a>
               </Link>
            </div>

            <div className="flex items-center text-sm text-gray-500 dark:text-gray-300 space-x-2">
               <Link href="#3">
                  <a className="hover:text-sky-500">{post.author.name}</a>
               </Link>

               <span>&#8226;</span>

               <span>{post.created_at}</span>
            </div>
         </div>
      </>
   )
}
