import Image from "next/image"
import Link from "next/link"
import trancate from "../../utils/trancate"
import { HiOutlineDotsHorizontal, HiOutlineShare } from "react-icons/hi"

export default function CardVarient3({ post }) {
   return (
      <div className="group flex flex-col space-y-4 sm:space-y-0 sm:space-x-4 sm:flex-row ">
         <div className="overflow-hidden img rounded-xl">
            <Image
               className="w-full rounded-xl transform group-hover:scale-110 transition duration-500"
               src={post.image}
               alt={post.title}
               width={280}
               height={190}
               objectFit="cover"
            />
         </div>

         <div className="max-w-sm space-y-5">
            <div className="flex items-center text-xs sm:text-sm flex-wrap text-gray-500 dark:text-gray-300 space-x-2">
               <Image
                  className="w-full rounded-full "
                  src={post.author.photo}
                  alt={post.author.name}
                  width={30}
                  height={30}
                  objectFit="cover"
               />

               <Link href="#3">
                  <a className="hover:text-sky-500">{post.author.name}</a>
               </Link>

               <span>&#8226;</span>

               <Link href="#4">
                  <a className="hover:text-sky-500">{post.category}</a>
               </Link>

               <span>&#8226;</span>

               <span>{post.created_at}</span>
            </div>

            <div className="">
               <Link href="#4">
                  <a
                     title={post.title}
                     className="font-bold text-lg sm:text-xl mb-2 group-hover:text-sky-500 transition duration-500"
                  >
                     {trancate(post.title, 30)}
                  </a>
               </Link>
               <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">{trancate(post.description, 100)}</p>
            </div>

            <div className="flex items-center justify-between text-sm text-gray-500  dark:text-gray-300">
               <span>
                  <HiOutlineShare size={20} />
               </span>

               <span>
                  <HiOutlineDotsHorizontal size={20} />
               </span>
            </div>
         </div>
      </div>
   )
}
