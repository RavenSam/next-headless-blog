import { Fragment, useRef, useState } from "react"
import { Transition, Dialog } from "@headlessui/react"
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi"

export default function Drawer({ children }) {
   const [open, setOpen] = useState(false)
   const cancelButtonRef = useRef()

   return (
      <>
         <button className="btn-icon" onClick={() => setOpen(!open)} aria-label="Menu">
            <HiOutlineMenuAlt3 size={24} />
         </button>

         <Transition.Root show={open} as={Fragment}>
            <Dialog
               initialFocus={cancelButtonRef}
               as="div"
               className="fixed z-50 inset-0 overflow-hidden"
               onClose={() => {
                  setOpen(!open)
               }}
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
                     <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                  </Transition.Child>

                  <div className="fixed inset-y-0 right-0  max-w-full flex font-poppins">
                     <Transition.Child
                        as={Fragment}
                        enter="transform transition ease-in-out duration-500 "
                        enterFrom="translate-x-full"
                        enterTo="translate-x-0"
                        leave="transform transition ease-in-out duration-500 "
                        leaveFrom="translate-x-0"
                        leaveTo="translate-x-full"
                     >
                        <div className="w-screen max-w-md">
                           <div className="h-full flex flex-col bg-gray-100 dark:bg-gray-800 shadow-xl overflow-y-scroll">
                              <div className="py-1 px-4">
                                 <button
                                    className="btn-icon ml-auto"
                                    aria-label="Close Menu"
                                    onClick={() => setOpen(false)}
                                 >
                                    <HiOutlineX size={24} />
                                 </button>
                              </div>

                              <div className="flex-1 py-4 overflow-y-auto px-4 ">
                                 {/* ************************************************************ */}
                                 {/* ************************************************************ */}
                                 {/* ************************************************************ */}
                                 {children}
                                 {/* ************************************************************ */}
                                 {/* ************************************************************ */}
                                 {/* ************************************************************ */}
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
