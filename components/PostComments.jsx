import Image from "next/image"
import { HiDotsHorizontal, HiThumbUp } from "react-icons/hi"
import { GoReply } from "react-icons/go"
import { useState } from "react"
import Link from "next/link"

const comments = [
   { name: "john Doe", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
   {
      name: "john Doe",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      replies: [
         { name: "john Doe", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
         { name: "john Doe", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
      ],
   },
   { name: "john Doe", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
]

export default function PostComments() {
   const [logged, setLogged] = useState(false)

   return (
      <>
         <h2 className="font-semibold text-xl md:text-2xl ">
            Comments <span className="text-sky-500">28</span>
         </h2>

         {logged ? (
            <div className="flex gap-4 my-8 p-4">
               <div className="img min-w-[60]">
                  <Image src="/images/user.jpg" alt="user" width={60} height={60} className="rounded-full" />
               </div>

               <div className="flex-1 space-y-4">
                  <textarea
                     className="input"
                     placeholder="Type your comment here..."
                     name="comment"
                     id="comment"
                  ></textarea>

                  <button className="btn-secondary ml-auto">Submit</button>
               </div>
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

         {/* ******     COMMENTS    ****** */}
         <div className="my-6 space-y-2">
            {comments.map((comment, i) => (
               <div key={i} className="">
                  <div className="bg-white dark:bg-gray-900 rounded-xl p-4">
                     <Comment comment={comment} />
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
            <p className="font-semibold">{comment.name}</p>

            <p className="text-sm text-gray-600  dark:text-gray-400">{comment.content}</p>

            <div className="flex items-center justify-end text-sm  space-x-2">
               <button title="Reply to Comment" aria-label="Reply to Comment" className="btn-icon">
                  <HiDotsHorizontal size={17} />
               </button>

               {!noReply && (
                  <button title="Reply to Comment" aria-label="Reply to Comment" className="btn-icon">
                     <GoReply size={17} />
                  </button>
               )}

               <div className="flex items-center px-2 gap-1">
                  <button title="Like Comment" aria-label="Like Comment" className="btn-icon">
                     <HiThumbUp size={17} />
                  </button>
                  <span className="font-medium text-gray-600  dark:text-gray-400">12</span>
               </div>
            </div>
         </div>
      </div>
   )
}
