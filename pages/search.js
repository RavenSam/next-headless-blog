import axios from "axios"
import { useQuery } from "react-query"
import Card from "../components/Card"
import { isEmpty } from "lodash"
import Loading from "../components/Loading"
import { useRouter } from "next/router"
import { useState } from "react"
import { HiOutlineSearch } from "react-icons/hi"
import { NextSeo } from "next-seo"

const getResults = async ({ queryKey }) => {
   const { query } = queryKey[1]

   const { data } = await axios(
      `${process.env.NEXT_PUBLIC_API_URL}/api/articles?filters[likes]=${query}&fields=title&fields=slug&fields=description&populate=featuredImage&populate=category`
   )

   return data
}

export default function Search({ researchData }) {
   const { query, push } = useRouter()
   const [searchValue, setSearchValue] = useState(query.q)
   const { isLoading, error, data } = useQuery(["likes", { query: 9 }], getResults, { initialData: researchData })

   const handleSubmit = (e) => {
      e.preventDefault()

      push({ pathname: "/search", query: { q: searchValue } })
   }

   if (isLoading) return <Loading />

   if (error)
      return (
         <p className="text-center text-xl  md:text-2xl font-semibold text-gray-600 dark:text-gray-400 pt-[30vh]">
            Oops! Something went wrong
         </p>
      )

   return (
      <>
         <NextSeo
            title={` ${query.q} | search results `}
            description={`there are ${data.data.length} Search results for ${query.q} `}
         />

         <div className="max-w-3xl mx-auto mt-10">
            <div className="relative rounded-xl shadow px-5 py-8 md:p-10 bg-white dark:bg-gray-900">
               <h1 className="text-2xl md:text-3xl font-bold">
                  Search <span className="text-sky-500">.</span>
               </h1>

               <form onSubmit={handleSubmit} className="relative mt-5">
                  <input
                     type="search"
                     name="search"
                     className="input pr-14 text-lg text-gray-600 dark:text-gray-300"
                     value={searchValue}
                     onChange={(e) => setSearchValue(e.target.value)}
                  />

                  <button
                     className="text-sky-500 h-full btn px-4  rounded-r-xl absolute top-1/2 right-0 transform  -translate-y-1/2 "
                     aria-label="Search"
                  >
                     <HiOutlineSearch size={20} />
                  </button>
               </form>
            </div>

            {!isEmpty(data.data) ? (
               <div className="w-full py-7 lg:px-8 p-2">
                  <h2 className="text-xl md:text-2xl font-medium py-6">
                     Search results for <span className="text-sky-500 font-semibold">{query.q}</span>
                  </h2>
                  <div className="space-y-8">
                     {data.data.map((post) => (
                        <div
                           key={post.id}
                           className="border-b last:border-none pb-4 border-gray-300 dark:border-gray-700"
                        >
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
         </div>
      </>
   )
}

export async function getServerSideProps() {
   // just a complicated way to pass props to react query
   const key = { queryKey: [0, { query: 9 }] }
   const researchData = await getResults(key)

   return { props: { researchData } }
}
