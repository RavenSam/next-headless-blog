import Image from "next/image"
import Link from "next/link"
import imageUrl from "../../utils/imageUrl"
import trancate from "../../utils/trancate"

export default function CardVarient4({ post, round, num }) {
   const m = imageUrl(post.featuredImage, "thumbnail")

   // console.log(post.featuredImage)

   return (
      <div className="group flex flex-col space-y-4 sm:space-y-0 sm:space-x-4 sm:flex-row">
         {round ? (
            <div className="relative img">
               <Image
                  className="w-full rounded-full"
                  src={imageUrl(post.featuredImage, "thumbnail")}
                  alt={post.title}
                  width={60}
                  height={60}
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
               <Link href="#">
                  <a
                     title={post.title}
                     className="font-bold text-lg mb-2 group-hover:text-sky-500 transition duration-500"
                  >
                     {trancate(post.title, 30)}
                  </a>
               </Link>

               <p className="text-gray-600 dark:text-gray-400 text-sm ">{post.created_at}</p>
            </div>
         </div>
      </div>
   )
}
