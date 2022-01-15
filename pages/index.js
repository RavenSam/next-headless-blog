import { HiAdjustments } from "react-icons/hi"
import Card from "../components/Card"

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

   // {
   //    id: 2,
   //    title: "The Coldest Sunset",
   //    description:
   //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
   //    image: "/images/tren-lg-2.jpg",
   //    created_at: "24 May 2021",
   //    category: "coder",
   //    author: { name: "Techie Coder", photo: "/images/tren-lg-2.jpg" },
   // },

   // {
   //    id: 3,
   //    title: "The Coldest Sunset",
   //    description:
   //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
   //    image: "/images/tren-lg-2.jpg",
   //    created_at: "24 May 2021",
   //    category: "coder",
   //    author: { name: "Techie Coder", photo: "/images/tren-lg-2.jpg" },
   // },

   // {
   //    id: 4,
   //    title: "The Coldest Sunset",
   //    description:
   //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
   //    image: "/images/tren-lg-2.jpg",
   //    created_at: "24 May 2021",
   //    category: "coder",
   //    author: { name: "Techie Coder", photo: "/images/tren-lg-2.jpg" },
   // },
]
export default function Home() {
   return (
      <div className="h-screen w-full flex items-center justify-center">
         <div className="flex items-center space-x-6">
            {posts.map((p) => (
               <Card key={p.id} post={p} varient={1} />
            ))}
         </div>
      </div>
   )
}
