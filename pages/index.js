import { HiAdjustments } from "react-icons/hi"
import Card from "../components/Card"
import TabsPosts from "../components/TabsPosts"

const posts = [
   {
      id: 1,
      title: "The Coldest Sunset",
      description:
         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      image: "/images/tren-lg-2.jpg",
      created_at: "24 May 2021",
      category: "coder",
      author: { name: "Techie Coder", photo: "/images/tren-lg-2.jpg" },
   },

   {
      id: 2,
      title: "The Coldest Sunset",
      description:
         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      image: "/images/tren-lg-2.jpg",
      created_at: "24 May 2021",
      category: "coder",
      author: { name: "Techie Coder", photo: "/images/tren-lg-2.jpg" },
   },
]

const posts2 = [
   {
      id: 1,
      title: "The Coldest Sunsetcccccccccccccc",
      description:
         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      image: "/images/tren-lg-2.jpg",
      created_at: "24 May 2021",
      category: "coder",
      author: { name: "Techie Coder", photo: "/images/tren-lg-2.jpg" },
   },

   {
      id: 2,
      title: "The Coldest Sunsetddddddddddddddddddddd",
      description:
         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      image: "/images/tren-lg-2.jpg",
      created_at: "24 May 2021",
      category: "coder",
      author: { name: "Techie Coder", photo: "/images/tren-lg-2.jpg" },
   },
]

const tabs = [
   { id: 1, title: "popular", posts },
   { id: 2, title: "latest", posts: posts2 },
]

export default function Home() {
   return (
      <div className="xlContainer">
         <div className="grid grid-cols-12">
            <div className="col-span-8"></div>

            <div className="col-span-4">
               <TabsPosts tabs={tabs} />
            </div>
         </div>
      </div>
   )
}
