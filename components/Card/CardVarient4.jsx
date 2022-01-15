import Image from "next/image"
import Link from "next/link"
import trancate from "../../utils/trancate"

export default function CardVarient4({ post, round, num }) {
   return (
      <Link href="#1">
         <a className="group flex flex-col space-y-4 sm:space-y-0 sm:space-x-4 sm:flex-row">
            {round ? (
               <div className="relative img">
                  <Image
                     className="w-full rounded-full"
                     src={post.image}
                     alt={post.title}
                     width={80}
                     height={80}
                     objectFit="cover"
                  />

                  {num && (
                     <span className="absolute -top-1 -left-1 text-white text-center leading-[2rem] w-8 h-8 rounded-full bg-sky-500 border border-white">
                        {num}
                     </span>
                  )}
               </div>
            ) : (
               <div className="overflow-hidden img rounded-xl">
                  <Image
                     className="w-full rounded-xl "
                     src={post.image}
                     alt={post.title}
                     width={120}
                     height={80}
                     objectFit="cover"
                  />
               </div>
            )}

            <div className="max-w-sm space-y-5">
               <div className="">
                  <h2
                     title={post.title}
                     className="font-bold text-lg mb-2 group-hover:text-sky-500 transition duration-500"
                  >
                     {trancate(post.title, 30)}
                  </h2>

                  <p className="text-gray-600 text-sm">{post.created_at}</p>
               </div>
            </div>
         </a>
      </Link>
   )
}
