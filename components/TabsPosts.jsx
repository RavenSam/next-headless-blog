import { useState } from "react"
import { Tab } from "@headlessui/react"
import Card from "./Card"

export default function TabsPosts({ tabs }) {
   const [currentTab, setCurrentTab] = useState(tabs[0])

   const handleChange = (e) => {
      console.log(e)
   }

   return (
      <>
         <Tab.Group as={"div"} className="p-4" onChange={handleChange}>
            <Tab.List className="flex items-center space-x-4">
               {tabs.map((tab) => (
                  <Tab
                     key={tab.id}
                     className={({ selected }) =>
                        `${
                           selected
                              ? "bg-sky-500 text-white shadow-xl"
                              : "bg-white dark:bg-gray-900 border opacity-40 hover:opacity-70"
                        } px-5 py-2 rounded-full font-semibold flex-1 capitalize `
                     }
                  >
                     {tab.title}
                  </Tab>
               ))}
            </Tab.List>

            <div className="mt-8 px-4">
               <div className="space-y-4">
                  {currentTab.posts.map((post) => (
                     <Card varient={4} key={post.id} post={post} round />
                  ))}
               </div>
            </div>
         </Tab.Group>
      </>
   )
}
