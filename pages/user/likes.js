import axios from "axios"
import { useQuery } from "react-query"
import UserLayout from "../../layouts/UserLayout"
import Card from "../../components/Card"
import { isEmpty } from "lodash"
import Loading from "../../components/Loading"
import { NextSeo } from "next-seo"

const getLikes = async ({ queryKey }) => {
   const { userId } = queryKey[1]

   const { data } = await axios(
      `${process.env.NEXT_PUBLIC_API_URL}/api/articles?filters[likes]=${userId}&fields=title&fields=slug&fields=description&populate=featuredImage&populate=category`
   )

   return data
}

export default function Likes({ user }) {
   const { isLoading, error, data } = useQuery(["likes", { userId: user.id }], getLikes)

   if (isLoading) return <Loading />

   if (error)
      return (
         <p className="text-center text-xl  md:text-2xl font-semibold text-gray-600 dark:text-gray-400 pt-[30vh]">
            Oops! Something went wrong
         </p>
      )

   return (
      <>
         <NextSeo title="Your Liked Posts" description="Your Liked Posts | see all the posts that you've liked" />
         <div className="relative rounded-xl shadow px-5 py-8 md:p-10 bg-white dark:bg-gray-900">
            <h1 className="text-2xl md:text-3xl font-bold">Likes</h1>
         </div>

         {!isEmpty(data.data) ? (
            <div className="w-full py-7 lg:px-8">
               <h2 className="text-xl md:text-2xl font-medium py-6 capitalize">
                  All The Posts That you <span className="text-sky-500 font-semibold">Liked</span>
               </h2>
               <div className="space-y-8">
                  {data.data.map((post) => (
                     <div key={post.id} className="">
                        <Card varient={3} post={post.attributes} />
                     </div>
                  ))}
               </div>
            </div>
         ) : (
            <h2 className="text-1xl md:text-2xl font-medium py-6 capitalize">
               No <span className="text-sky-500 font-semibold">Liked </span>
               Posts
            </h2>
         )}
      </>
   )
}
Likes.layout = UserLayout
