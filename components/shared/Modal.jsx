import { Dialog, Transition } from "@headlessui/react"
import { Fragment, useRef, useState } from "react"
import { HiUser, HiX } from "react-icons/hi"

export default function Modal({ children, icon, title, initFocusRef, className = "btn-icon" }) {
   const [open, setOpen] = useState(false)
   const cancelButtonRef = useRef()

   const BtnIcon = icon ? icon : HiUser

   return (
      <>
         <button className={className} onClick={() => setOpen(!open)} aria-label="Open Modal">
            <BtnIcon size={20} />
         </button>

         <Transition.Root show={open} as={Fragment}>
            <Dialog
               initialFocus={initFocusRef}
               as="div"
               className="fixed z-50 inset-0 overflow-hidden"
               onClose={() => setOpen(!open)}
            >
               <div className="absolute inset-0 overflow-hidden">
                  <Transition.Child
                     as={Fragment}
                     enter="ease-in-out duration-700"
                     enterFrom="opacity-0"
                     enterTo="opacity-400"
                     leave="ease-in-out duration-700"
                     leaveFrom="opacity-400"
                     leaveTo="opacity-0"
                  >
                     <Dialog.Overlay className="absolute inset-0 bg-gray-400 bg-opacity-80 transition-opacity " />
                  </Transition.Child>

                  <div className="fixed inset-1/2 max-w-full font-poppins">
                     <Transition.Child
                        as={Fragment}
                        enter="transform transition ease-in-out duration-[0.7s] "
                        enterFrom="scale-50 opacity-0"
                        enterTo="scale-100 opacity-1"
                        leave="transform transition ease-in-out duration-300 "
                        leaveFrom="scale-100 opacity-1"
                        leaveTo="scale-50 opacity-0"
                     >
                        <div className=" bg-white dark:bg-gray-900 shadow-2xl w-screen  max-w-md p-4 rounded-xl  transform -translate-x-1/2 -translate-y-1/2 ">
                           <div className="">
                              <div className="flex items-start justify-between pb-3 mb-4 border-b dark:border-gray-600">
                                 <h3 className="text-lg md:text-xl font-semibold">{title ? title : "title"}</h3>
                                 <div className="ml-3 h-7 flex items-center">
                                    <button
                                       ref={cancelButtonRef}
                                       type="button"
                                       className="-m-2 btn-icon"
                                       onClick={() => setOpen(false)}
                                       autoFocus={false}
                                    >
                                       <span className="sr-only">Close panel</span>
                                       <HiX className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                 </div>
                              </div>

                              <div className="py-4">
                                 {/* ****************************************************** */}
                                 {/* ****************************************************** */}

                                 {children}

                                 {/* ****************************************************** */}
                                 {/* ****************************************************** */}
                              </div>
                           </div>
                        </div>
                     </Transition.Child>
                  </div>
               </div>
            </Dialog>
         </Transition.Root>
      </>
   )
}
