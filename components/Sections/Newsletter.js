import React from "react"

export default function Newsletter() {
   return (
      <div
         data-aos="fade"
         className="xlContainer rounded-xl py-14 md:py-28 px-4 text-white text-center bg-gradient-to-r from-cyan-600 to-sky-400 "
      >
         <div className="flex flex-col items-center justify-center space-y-8 max-w-md mx-auto">
            <h2
               data-aos="fade-up"
               data-aos-delay="500"
               className="text-2xl lg:text-3xl font-bold md:font-extrabold text-center  tracking-wide"
            >
               Subscribe to our Newsletter
            </h2>

            <p className="font-medium" data-aos="fade-up" data-aos-delay="1000">
               Subscribe to rou newsletter to receive exclusive offers, latest news and updates.
            </p>

            <button
               data-aos="fade-up"
               data-aos-delay="1500"
               className="btn rounded-xl px-7 py-3 border border-white hover:bg-white hover:text-sky-500"
            >
               Subscribe
            </button>
         </div>
      </div>
   )
}
