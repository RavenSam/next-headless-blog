import { NextSeo } from "next-seo"
import UserLayout from "../../layouts/UserLayout"
import { BsBook, BsBookmarks, BsHeart, BsHourglass } from "react-icons/bs"
import { useTransition, animated, useSpring } from "react-spring"

export default function User({ user }) {
   const transitions = useTransition(stats, {
      from: { opacity: 0, y: 800 },
      enter: (item) => async (next) => {
         await next({ opacity: 1, x: 0, y: 0, delay: item.delay })
      },
      leave: { opacity: 0 },
   })

   return (
      <>
         <NextSeo title="User Dashboard" description="User Dashboard | Have fun" />

         <div className="relative rounded-xl shadow px-5 py-8 md:p-10 bg-white dark:bg-gray-900">
            <h1 className="text-2xl md:text-3xl font-bold">Dashboard</h1>
         </div>

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {transitions(
               (style, item) =>
                  item && (
                     <animated.div style={style}>
                        <div className="bg-white dark:bg-gray-900 rounded-xl flex items-center p-4 lg:p-6 border dark:border-none shadow space-x-5 hover:bg-gray-200 hover:dark:bg-gray-700 cursor-pointer">
                           <span className="min-w-[30px]">
                              <item.icon size={30} className={item.cl} />
                           </span>

                           <div className="flex flex-col space-y-2">
                              <span className="text-gray-600 dark:text-gray-400  capitalize font-medium text-sm sm:text-base">
                                 {item.name}
                              </span>
                              <span className="font-bold text-lg text-500">{item.num}</span>
                           </div>
                        </div>
                     </animated.div>
                  )
            )}
         </div>

         <div>
            <p className="text-gray-600 dark:text-gray-400 text-center py-8 font-medium">No data for the moment.</p>
         </div>
      </>
   )
}

User.layout = UserLayout

const stats = [
   { name: "liked", num: 3, icon: BsHeart, cl: "text-pink-500", delay: 200 },
   { name: "bookmarked", num: 2, icon: BsBookmarks, cl: "text-blue-400", delay: 400 },
   { name: "read", num: 6, icon: BsBook, cl: "text-emerald-400", delay: 600 },
   { name: "time", num: "1h", icon: BsHourglass, cl: "text-violet-400", delay: 800 },
]
