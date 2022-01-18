import { useEffect, useState } from "react"
import Card from "./Card"
import { useQuery } from "react-query"
import Loading from "./Loading"

const fetchMinArticlesByCategoryId = async ({ queryKey }) => {
   const catId = queryKey[1]

   const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/articles?fields=title&fields=description&filters[category]=${catId}&populate=category&populate=featuredImage`
   )
   const data = await res.json()

   return data
}

const tabTitle = [
   { name: "business", val: 2 },
   { name: "finance", val: 1 },
]

export default function TabsPosts() {
   const [btnTab, setBtnTab] = useState(tabTitle[0].val)

   const { isLoading, error, data } = useQuery(["resData", btnTab], fetchMinArticlesByCategoryId)

   if (error) {
      console.log(error)
      return <p className="text-center text-gray-500">Oops Something went wrong...</p>
   }
   return (
      <>
         <div className="flex items-center space-x-2">
            {tabTitle.map((t) => (
               <button
                  key={t.val}
                  onClick={() => setBtnTab(t.val)}
                  className={`${
                     btnTab === t.val
                        ? "bg-sky-500 text-white shadow-xl"
                        : "bg-white dark:bg-gray-900 border opacity-40 hover:opacity-70"
                  } px-5 py-2 rounded-full font-semibold flex-1 capitalize `}
               >
                  {t.name}
               </button>
            ))}
         </div>

         {isLoading ? (
            <div className="min-h-[150px] flex items-center justify-center bg-gray-200 dark:bg-gray-700 mt-4 rounded-xl">
               <Loading />
            </div>
         ) : (
            <div className="space-y-4 mt-8 px-4">
               {data.data?.map((post) => (
                  <Card varient={4} key={post.id} post={post.attributes} round />
               ))}
            </div>
         )}
      </>
   )
}
