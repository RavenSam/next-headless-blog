import { useState } from "react"
import { BsBookmark, BsBookmarkFill, BsHeart, BsHeartFill } from "react-icons/bs"
import ShareModal from "./ShareModal"
import axios from "axios"
import { useRouter } from "next/router"
import { useQuery } from "react-query"

const getLikes = async ({ queryKey }) => {
   const { postId } = queryKey[1]

   const { data } = await axios(`${process.env.NEXT_PUBLIC_API_URL}/api/articles/${postId}?&fields=slug&populate=likes`)

   return data
}

export default function PostButtons({ postId }) {
   const [likedPost, setLikedPost] = useState(false)
   const [bookmarkedPost, setBookmarkedPost] = useState(false)

   const router = useRouter()

   const { isLoading, error, data, refetch } = useQuery(["likes", { postId }], getLikes)

   const handleLiked = async () => {
      setLikedPost(!likedPost)
      try {
         const user = JSON.parse(localStorage.getItem("user"))

         const res = await axios.put("/api/likes", { postId, likes: data, user })
         console.log(res)

         refetch()
      } catch (err) {
         console.log(err)
      }
   }

   const handleBookmark = () => {
      setBookmarkedPost(!bookmarkedPost)
   }

   return (
      <>
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
      </>
   )
}
