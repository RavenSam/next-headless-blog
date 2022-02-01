import Card from "../Card"

export default function Recommended({ articles }) {
   return (
      <div className="xlContainer p-2">
         <h2 className="text-xl lg:text-2xl font-bold py-4 text-center mb-8">
            Recommended Articles<span className="text-sky-500 text-4xl">.</span>
         </h2>

         <div className="">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8">
               {articles.data.slice(0, 5).map((post) => (
                  <div key={post.id} className="max-w-fit mx-auto">
                     <Card varient={1} post={post.attributes} />
                  </div>
               ))}
               <div className="sm:bg-gray-200 sm:dark:bg-gray-700 rounded-xl sm:flex items-center justify-center ">
                  <button className="btn-secondary mx-auto my-10 ">Read More</button>
               </div>
            </div>
         </div>
      </div>
   )
}
