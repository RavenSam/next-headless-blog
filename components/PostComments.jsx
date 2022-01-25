import Image from "next/image"
import { HiDotsHorizontal, HiThumbUp } from "react-icons/hi"
import { GoReply } from "react-icons/go"
import { useEffect, useState } from "react"
import Link from "next/link"
import { useQuery } from "react-query"
import { Spinner } from "../components/Loading"
import { isEmpty } from "lodash"
import axios from "axios"
import toast from "react-hot-toast"

const getComments = async ({ queryKey }) => {
   const { postId } = queryKey[1]

   const { data } = await axios(
      `${process.env.NEXT_PUBLIC_API_URL}/api/comments?filters[article]=${postId}&populate=author`
   )

   return data
}

export default function PostComments({ postId }) {
   const [user, setUser] = useState({})
   const [commentContent, setCommentContent] = useState("")

   const { isLoading, error, data, refetch } = useQuery(["comments", { postId }], getComments)

   useEffect(() => {
      const getUser = JSON.parse(localStorage.getItem("user"))
      setUser(getUser)
   }, [])

   if (error) {
      console.log(error)
      return <p className="text-center text-gray-500">Oops Something went wrong...</p>
   }

   const handleSubmitComment = async (e) => {
      e.preventDefault()

      if (commentContent.length > 2) {
         const commentData = { author: { id: user.id }, article: { id: postId }, content: commentContent }

         try {
            const data = await axios.post(`/api/comments`, { data: commentData })

            setCommentContent("")

            toast.success("You Have Successfuly added a comment", { className: "toast", duration: 4000 })

            refetch()
         } catch (err) {
            console.log(err)
            toast.error("Somthing went wrong", { className: "toast", duration: 4000 })
         }
      }
   }

   return (
      <>
         <h2 className="font-semibold text-xl md:text-2xl ">
            Comments <span className="text-sky-500">{data?.data.length}</span>
         </h2>

         {!isEmpty(user) ? (
            <div className="flex gap-4 my-8 p-4">
               <div className="img min-w-[60]">
                  <Image src="/images/user.jpg" alt="user" width={60} height={60} className="rounded-full" />
               </div>

               <form onSubmit={handleSubmitComment} className="flex-1 space-y-4">
                  <textarea
                     value={commentContent}
                     onChange={(e) => setCommentContent(e.target.value)}
                     className="input"
                     placeholder="Type your comment here..."
                     name="comment"
                     id="comment"
                  ></textarea>

                  <button
                     type="submit"
                     className="btn-secondary ml-auto"
                     disabled={!(commentContent.length > 2) || isLoading}
                  >
                     {isLoading && <Spinner className="border-sky-500 !w-5 !h-5" />}
                     Submit
                  </button>
               </form>
            </div>
         ) : (
            <div className="p-4 my-6">
               <p className="text-gray-600  dark:text-gray-400">
                  You need to loggin to be abble to comment.
                  <Link href="/login">
                     <a className="text-sky-500 font-semibold p-2">Login Now</a>
                  </Link>
               </p>
            </div>
         )}

         {isLoading ? (
            <div className="flex items-center justify-center h-36">
               <Spinner className="border-sky-500 " />
            </div>
         ) : data.data.length ? (
            <div className="my-6 space-y-2">
               {data.data.map((comment, i) => (
                  <div key={comment.id} className="">
                     <div className="bg-white dark:bg-gray-900 rounded-xl p-4">
                        <Comment comment={comment.attributes} />
                        {comment.replies &&
                           comment.replies.map((reply, i) => (
                              <div key={i} className="ml-8 pl-4 border-l border-gray-400 dark:border-gray-700">
                                 <Comment comment={reply} imgSize={50} noReply />
                              </div>
                           ))}
                     </div>
                  </div>
               ))}
            </div>
         ) : (
            <div className="">
               <div className="p-4 my-6">
                  <p className="text-gray-600  dark:text-gray-400 text-center">
                     Wow! You are first, quicly say something.
                  </p>
               </div>
            </div>
         )}
      </>
   )
}

export function Comment({ comment, imgSize = 60, noReply = false }) {
   return (
      <div className="flex gap-4  py-2">
         <div className="img" style={{ minWidth: imgSize }}>
            <Image src="/images/user.jpg" alt="user" width={imgSize} height={imgSize} className="rounded-full" />
         </div>

         <div className="space-y-2 flex-1">
            <p className="font-semibold">{comment.author.data.attributes.username}</p>

            <p className="text-sm text-gray-600  dark:text-gray-400">{comment.content}</p>

            <div className="flex items-center justify-end text-sm  space-x-2">
               <button title="Reply to Comment" aria-label="Reply to Comment" className="btn-icon" disabled>
                  <HiDotsHorizontal size={17} />
               </button>

               {!noReply && (
                  <button title="Reply to Comment" aria-label="Reply to Comment" className="btn-icon" disabled>
                     <GoReply size={17} />
                  </button>
               )}

               <div className="flex items-center px-2 gap-1">
                  <button title="Like Comment" aria-label="Like Comment" className="btn-icon" disabled>
                     <HiThumbUp size={17} />
                  </button>
                  <span className="font-medium text-gray-600  dark:text-gray-400">0</span>
               </div>
            </div>
         </div>
      </div>
   )
}
