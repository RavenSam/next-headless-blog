import Image from "next/image"
import Link from "next/link"
import trancate from "../../utils/trancate"

export default function CardVarient2({ post }) {
   return (
      <>
         <Link href="#1">
            <a className="relative group block overflow-hidden rounded-xl bg-black">
               <div className=" img w-full overflow-hidden rounded-xl ">
                  <Image
                     className="w-full rounded-xl transform group-hover:scale-110 transition duration-500 "
                     src={post.image}
                     alt={post.title}
                     width={500}
                     height={400}
                     objectFit="cover"
                  />
               </div>

               <div className="absolute inset-0 bg-sky-900 bg-opacity-50" />

               <div className="absolute inset-0 h-full flex flex-col justify-end p-[8%]">
                  <Link href="#2">
                     <a className="w-min bg-gradient-to-l from-sky-300 to-sky-500  font-semibold text-white text-xs rounded-full px-4 py-2 opacity-80 hover:opacity-100">
                        {post.category}
                     </a>
                  </Link>

                  <div className="py-2">
                     <h2 title={post.title} className="font-bold text-white text-lg sm:text-xl md:text-2xl">
                        {trancate(post.title, 30)}
                     </h2>
                  </div>

                  <div className="flex items-center text-sm text-gray-300 space-x-2">
                     <Link href="#3">
                        <a className="hover:text-sky-500">{post.author.name}</a>
                     </Link>

                     <span>&#8226;</span>

                     <span>{post.created_at}</span>
                  </div>
               </div>
            </a>
         </Link>
      </>
   )
}
