import Image from "next/image"
import React from "react"

export default function Testimonials() {
   return (
      <div className="xlContainer p-2 my-8">
         <h2 className="text-xl lg:text-2xl font-bold py-4 text-center mb-10 md:mb-20">
            Testimonials<span className="text-sky-500 text-4xl">.</span>
         </h2>

         <div className="">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8">
               {testimonials.map((el, i) => (
                  <Testimonial key={i} testimonial={el} i={i} />
               ))}
            </div>
         </div>
      </div>
   )
}

function Testimonial({ testimonial, i }) {
   return (
      <div className={`flex flex-col items-center  text-center space-y-4 ${i === 1 && "md:-mt-10"}`}>
         <div className={`relative img w-[70px]  ${i === 1 && "md:w-[100px]"}`}>
            <Image
               className="w-full rounded-full"
               src={testimonial.img}
               alt="Jon Doe"
               width={100}
               height={100}
               objectFit="cover"
            />
         </div>

         <div className="space-y-3">
            <h3 className="font-bold text-base">{testimonial.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-sm">{testimonial.msg}</p>
         </div>
      </div>
   )
}

const testimonials = [
   {
      name: "Sara Doe",
      img: "/images/user-1.jpg",
      msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, facilis?",
   },
   {
      name: "Emma Doe",
      img: "/images/user-4.jpg",
      msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, facilis?",
   },

   {
      name: "Eric Doe",
      img: "/images/user-3.jpg",
      msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, facilis?",
   },
]
