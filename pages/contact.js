import React from "react"
import Banner from "../components/shared/Banner"
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa"
import { NextSeo } from "next-seo"

export default function Contact() {
   return (
      <>
         <NextSeo
            title="Contact Us | Contact our team"
            description="Contact Us | Contact our team & start a conversation with us"
         />

         <div className="xlContainer">
            <Banner title="Contact Us" image="/contact.jpg" />

            <div className="relative flex items-top justify-center min-h-screen sm:items-center sm:pt-0">
               <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                  <div className="mt-8 overflow-hidden">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
                        <div className="p-4 mr-2">
                           <h2 className="text-2xl lg:text-3xl  text-gray-800 dark:text-white font-bold">
                              Get in touch<span className="text-sky-500">.</span>
                           </h2>
                           <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                              Fill in the form to start a conversation
                           </p>

                           <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                              <FaMapMarkerAlt size={20} />
                              <span className="ml-4 text-md tracking-wide font-semibold w-50">
                                 Street, State, Postal Code
                              </span>
                           </div>

                           <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                              <FaPhone size={20} />
                              <span className="ml-4 text-md tracking-wide font-semibold w-50">+44 1234567890</span>
                           </div>

                           <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                              <FaEnvelope size={20} />
                              <span className="ml-4 text-md tracking-wide font-semibold w-50">info@exemple.org</span>
                           </div>
                        </div>

                        <form className="p-4 space-y-5">
                           <div className="flex flex-col">
                              <label htmlFor="name" className="hidden">
                                 Full Name
                              </label>
                              <input
                                 type="name"
                                 name="name"
                                 id="name"
                                 placeholder="Full Name"
                                 className="input text-base"
                              />
                           </div>

                           <div className="flex flex-col mt-2">
                              <label htmlFor="email" className="hidden">
                                 Email
                              </label>
                              <input
                                 type="email"
                                 name="email"
                                 id="email"
                                 placeholder="Email"
                                 className="input  text-base"
                              />
                           </div>

                           <div className="flex flex-col mt-2">
                              <label htmlFor="message" className="hidden">
                                 Message
                              </label>
                              <textarea
                                 name="message"
                                 id="message"
                                 className="input  text-base"
                                 placeholder="Message"
                              ></textarea>
                           </div>

                           <button type="submit" className="btn-primary">
                              Submit
                           </button>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}
