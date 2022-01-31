import { useEffect, useState } from "react"
import { BsBookmark, BsBookmarkFill, BsHeart, BsHeartFill } from "react-icons/bs"
import ShareModal from "./ShareModal"
import axios from "axios"
import { useRouter } from "next/router"
import toast from "react-hot-toast"

export default function PostButtons({ postId, likes, bookmarks }) {
   const [likedPost, setLikedPost] = useState(false)
   const [bookmarkedPost, setBookmarkedPost] = useState(false)

   const router = useRouter()

   useEffect(() => {
      const user = JSON.parse(localStorage.getItem("user"))

      const alreadyLiked = likes.data.some((userLike) => userLike.id === user?.id)
      setLikedPost(alreadyLiked)

      const alreadyBookmarked = bookmarks.data.some((userLike) => userLike.id === user?.id)
      setBookmarkedPost(alreadyBookmarked)
   }, [])

   const handleLiked = async () => {
      try {
         const user = JSON.parse(localStorage.getItem("user"))

         if (user) {
            const res = await axios.put("/api/likes", { postId, user })

            setLikedPost(!likedPost)
         } else {
            toast("Login To Like The Post", { className: "toast", duration: 4000 })
         }
      } catch (err) {
         console.log(err)
      }
   }

   const handleBookmark = async () => {
      try {
         const user = JSON.parse(localStorage.getItem("user"))
         if (user) {
            const res = await axios.put("/api/bookmarks", { postId, user })
            console.log(res)

            setBookmarkedPost(!bookmarkedPost)
         } else {
            toast("Login To Bookmark The Post", { className: "toast", duration: 4000 })
         }
      } catch (err) {
         console.log(err)
      }
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
