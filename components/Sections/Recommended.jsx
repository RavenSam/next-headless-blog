import Card from "../Card"

export default function Recommended({ articles }) {
   return (
      <div className="xlContainer p-2">
         <h2 data-aos="fade-up" className="text-xl lg:text-2xl font-bold py-4 text-center mb-12">
            Recommended Articles<span className="text-sky-500 text-4xl">.</span>
         </h2>

         <div className="">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 lg:gap-x-8 gap-y-14 md:gap-y-20 lg:gap-y-32">
               {articles.data.slice(0, 5).map((post, i) => (
                  <div data-aos="zoom-in-up" data-aos-delay={i * 300} key={post.id} className="max-w-fit mx-auto">
                     <Card varient={1} post={post.attributes} />
                  </div>
               ))}
               <div
                  data-aos="fade-up"
                  className="sm:bg-gray-200 sm:dark:bg-gray-700 rounded-xl sm:flex items-center justify-center "
               >
                  <button className="btn-secondary mx-auto my-10 ">Read More</button>
               </div>
            </div>
         </div>
      </div>
   )
}
