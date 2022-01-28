import { marked } from "marked"
import Image from "next/image"
import { useRouter } from "next/router"
import Loading from "../../components/Loading"
import {
   BsBookmark,
   BsBookmarkFill,
   BsEyeFill,
   BsFillChatDotsFill,
   BsHeart,
   BsHeartFill,
   BsShareFill,
} from "react-icons/bs"
import { useState } from "react"
import Link from "next/link"
import moment from "moment"
import PostComments from "../../components/PostComments"
import Meta from "../../components/Meta"
import ShareModal from "../../components/ShareModal"

export default function Post({ data }) {
   const router = useRouter()
   const [likedPost, setLikedPost] = useState(false)
   const [bookmarkedPost, setBookmarkedPost] = useState(false)

   if (router.isFallback) {
      return <Loading />
   }

   const handleLiked = () => {
      setLikedPost(!likedPost)
   }

   const handleBookmark = () => {
      setBookmarkedPost(!bookmarkedPost)
   }

   const tags = data.attributes.tags.data.map((tag) => tag.attributes.name) || []

   const html = marked.parse(data.attributes.content)

   return (
      <>
         <Meta data={data} />

         <div className="p-2">
            <div className="relative overflow-hidden rounded-xl">
               <div className="img relative overflow-hidden rounded-xl h-[55vh] sm:h-[70vh] md:h-[80vh]">
                  <Image
                     className="w-full rounded-xl "
                     src={data.attributes.featuredImage.data.attributes.url}
                     alt={data.attributes.title}
                     layout="fill"
                     objectFit="cover"
                     quality={100}
                  />
               </div>

               <div className="absolute inset-0 bg-black bg-opacity-50" />

               <div className="absolute inset-0 h-full flex flex-col justify-end p-8 sm:p-[8%]">
                  <Link href="#2">
                     <a className="cat">{data.attributes.category.data.attributes.name}</a>
                  </Link>

                  <div className="py-2 md:w-1/2">
                     <h1
                        title={data.attributes.title}
                        className="font-bold text-white text-base sm:text-lg md:text-xl lg:text-3xl "
                     >
                        {data.attributes.title}
                     </h1>
                  </div>

                  <div className="flex items-center text-sm text-gray-300 space-x-2">
                     <Link href="#3">
                        <a className="hover:text-sky-500">John Doe</a>
                     </Link>

                     <span>&#8226;</span>

                     <span>{moment(data.attributes.publishedAt).format("DD MMM YYYY")}</span>
                  </div>

                  <div className="flex items-center text-sm font-medium space-x-4 mt-4 text-white">
                     <div className="flex items-center gap-2 p-3">
                        <span>
                           <BsEyeFill size={17} />
                        </span>
                        <span>1093</span>
                     </div>

                     <a href="#comments" className="flex items-center gap-2 p-3">
                        <span>
                           <BsFillChatDotsFill size={17} />
                        </span>
                        <span>{data.attributes.comments.data.length}</span>
                     </a>

                     <div className="flex items-center gap-2 p-3">
                        <span className="text-pink-500">
                           <BsHeartFill size={17} />
                        </span>
                        <span>{data.attributes.likes.data.length}</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="xlContainer px-2">
            <div className="relative grid md:grid-cols-12">
               <div className="col-span-1 lg:col-span-2 w-full absolute md:relative top-0 left-0 z-10 transform md:transform-none -translate-y-1/2">
                  <div className="flex md:flex-col justify-end md:justify-start items-center p-4 space-x-4 md:space-x-0 md:space-y-4">
                     <ShareModal path={router.asPath} />

                     <button
                        className={`btn-icon-1 ${bookmarkedPost && "!text-blue-500 hover:!text-blue-600"}`}
                        onClick={handleBookmark}
                        title="Bookmark Post"
                        aria-label="Bookmark"
                     >
                        {bookmarkedPost ? <BsBookmarkFill size={20} /> : <BsBookmark size={20} />}
                     </button>

                     <button
                        className={`btn-icon-1 ${likedPost && "!text-pink-500 hover:!text-pink-600"}`}
                        onClick={handleLiked}
                        title="Like Post"
                        aria-label="Like"
                     >
                        {likedPost ? <BsHeartFill size={20} /> : <BsHeart size={20} />}
                     </button>
                  </div>
               </div>

               <div className="col-span-8 px-6 pb-6  mb-10 z-[5] rounded-xl border-2 dark:border-none bg-white dark:bg-gray-900 md:shadow-xl">
                  <article className="md:prose prose-sm prose-headings:font-semibold dark:prose-invert ">
                     <div dangerouslySetInnerHTML={{ __html: html }} />
                  </article>
               </div>

               <div className="col-span-3 lg:col-span-2  w-full">
                  <div className="px-2 py-4">
                     <h3 className="font-semibold text-lg md:text-xl pb-2">
                        Tags <span className="text-sky-500">.</span>
                     </h3>

                     <div className="flex flex-wrap gap-1">
                        {tags.map((tag, i) => (
                           <Link key={i} href="#">
                              <a className="tag">
                                 <span className="text-sky-400">#</span>
                                 {tag}
                              </a>
                           </Link>
                        ))}
                     </div>
                  </div>
               </div>
            </div>

            <div className="grid md:grid-cols-12">
               <div className="col-span-1 lg:col-span-2"></div>

               <div id="comments" className="col-span-8 mt-8">
                  <PostComments postId={data.id} />
               </div>

               <div className="col-span-3 lg:col-span-2"></div>
            </div>
         </div>
      </>
   )
}

export async function getStaticProps({ params }) {
   const article = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/articles?filters[slug]=${params.slug}&populate=*`
   )
   const { data } = await article.json()

   return {
      props: {
         data: data[0],
      },
      revalidate: 10,
   }
}

export async function getStaticPaths() {
   const articlesSlugs = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/articles?fields=slug`)
   const { data } = await articlesSlugs.json()

   const paths = data.map((el) => {
      return { params: { slug: el?.attributes.slug.toString() } }
   })

   return {
      paths,
      fallback: "blocking",
   }
}
