import Image from "next/image"

export default function Banner({ title = "banner", image = "/hero.jpg" }) {
   return (
      <>
         <div className="relative w-full rounded-xl overflow-hidden h-80 bg-gray-800">
            <Image src={image} alt={title} layout="fill" objectFit="cover" />

            <div className="absolute inset-0 bg-black bg-opacity-80" />

            <div className="text-white w-full absolute inset-0 flex items-center justify-center p-4">
               <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-wider">
                  {title}
                  <span className="text-sky-500">.</span>
               </h1>
            </div>
         </div>
      </>
   )
}
