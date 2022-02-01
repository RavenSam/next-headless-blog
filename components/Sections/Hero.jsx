import Image from "next/image"
import Card from "../Card"

export default function Hero({ articles }) {
   return (
      <div>
         <div className="relative h-[60vh] md:h-[90vh]">
            <Image src="/hero.jpg" alt="hero" layout="fill" objectFit="cover" width={800} height={500} />

            <div className="absolute inset-0 bg-black bg-opacity-70" />

            <div className="absolute top-0 left-0 right-0 h-full md:h-[80%] flex items-center justify-center text-center">
               <div className="p-4 text-white max-w-xl space-y-4">
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide">
                     <span className="text-sky-500">Thrilling</span> topics to look out for, with{" "}
                     <span className="text-sky-500">Diversity</span> of niches inside
                  </h1>

                  <p className="text-gray-200 text-sm sm:text-base md:text-lg">
                     We tackle interesting topics every day, Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Quidem, odit?
                  </p>

                  <button className="btn-primary mx-auto">Learn More</button>
               </div>
            </div>
         </div>

         <div className="md:-mt-[20vh]">
            <div className="grid grid-cols-2 sm:grid-cols-3 xlContainer gap-2 md:gap-8 p-2">
               {articles.data.slice(0, 3).map((post) => (
                  <div key={post.id} className="max-w-[400px] mx-auto sm:mx-0">
                     <Card varient={2} post={post.attributes} />
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}
