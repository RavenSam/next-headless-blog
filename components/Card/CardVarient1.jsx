import Image from "next/image"
import Link from "next/link"
import trancate from "../../utils/trancate"

export default function CardVarient1({ post }) {
   return (
      <>
         <Link href="#1">
            <a className="relative block group max-w-sm rounded overflow-hidden">
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
                     <a className="bg-gradient-to-l from-sky-300 to-sky-500 text-white font-semibold text-xs rounded-full px-4 py-2 opacity-80 hover:opacity-100">
                        {post.category}
                     </a>
                  </Link>
               </div>

               <div className="flex items-center text-sm mt-2 text-gray-500 dark:text-gray-300 space-x-2">
                  <Image
                     className="w-full rounded-full"
                     src={post.author.photo}
                     alt={post.author.name}
                     width={40}
                     height={40}
                     objectFit="cover"
                  />
                  <Link href="#3">
                     <a className="hover:text-sky-500">{post.author.name}</a>
                  </Link>

                  <span>&#8226;</span>

                  <span>{post.created_at}</span>
               </div>

               <div className="py-4">
                  <h2
                     title={post.title}
                     className="font-bold text-lg sm:text-xl mb-2 transition duration-500 group-hover:text-sky-500"
                  >
                     {trancate(post.title, 30)}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                     {trancate(post.description, 120)}
                  </p>
               </div>
            </a>
         </Link>
      </>
   )
}
