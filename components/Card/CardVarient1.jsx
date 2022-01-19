import moment from "moment"
import Image from "next/image"
import Link from "next/link"
import trancate from "../../utils/trancate"

export default function CardVarient1({ post }) {
   return (
      <>
         <div className="relative block group max-w-md rounded overflow-hidden">
            <div className="img overflow-hidden rounded-xl ">
               <Image
                  className="w-full rounded-xl transform group-hover:scale-110 transition duration-500"
                  src={post.featuredImage.data.attributes.formats.medium.url}
                  alt={post.title}
                  width={400}
                  height={230}
                  objectFit="cover"
               />
            </div>

            <div className="absolute top-5 left-5">
               <Link href="#2">
                  <a className="font-medium border border-white bg-black bg-opacity-30 text-white w-min px-4 py-1 rounded-md capitalize hover:text-sky-500 hover:border-sky-500">
                     {post.category.data.attributes.name}
                  </a>
               </Link>
            </div>

            <div className="flex items-center text-sm mt-4 text-gray-500 dark:text-gray-300 space-x-2">
               {/* <Image
                  className="w-full rounded-full"
                  src={post.author.photo}
                  alt={post.author.name}
                  width={40}
                  height={40}
                  objectFit="cover"
               />
               <Link href="#3">
                  <a className="hover:text-sky-500">{post.author.name}</a>
               </Link> */}

               <span>&#8226;</span>

               <span> {moment(post.publishedAt).format("DD MMM YYYY")}</span>
            </div>

            <div className="py-4">
               <Link href="#3">
                  <a
                     title={post.title}
                     className="font-bold text-lg sm:text-xl mb-2 transition duration-500 group-hover:text-sky-500"
                  >
                     {trancate(post.title, 30)}
                  </a>
               </Link>
               <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">{trancate(post.description, 120)}</p>
            </div>
         </div>
      </>
   )
}
