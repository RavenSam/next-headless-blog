import { Menu, Transition } from "@headlessui/react"
import Image from "next/image"
import { Fragment } from "react"
import { HiChevronDown, HiOutlineUser } from "react-icons/hi"

export default function Dropdown({ title, children, round, img }) {
   return (
      <div className="">
         <Menu as="div" className="relative inline-block text-left">
            {!round ? (
               <Menu.Button className="btn-ghost text-sm">
                  {title && "Options"}
                  <HiChevronDown size={20} aria-hidden="true" />
               </Menu.Button>
            ) : img ? (
               <Menu.Button className="relative img">
                  <Image
                     className="w-full rounded-full "
                     src={img}
                     alt="Jon Doe"
                     width={45}
                     height={45}
                     objectFit="cover"
                  />
               </Menu.Button>
            ) : (
               <Menu.Button className="btn-icon text-sm">
                  <HiOutlineUser size={20} aria-hidden="true" />
               </Menu.Button>
            )}

            <Transition
               as={Fragment}
               enter="transition ease-out duration-100"
               enterFrom="transform opacity-0 scale-95"
               enterTo="transform opacity-100 scale-100"
               leave="transition ease-in duration-75"
               leaveFrom="transform opacity-100 scale-100"
               leaveTo="transform opacity-0 scale-95"
            >
               <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-900">
                  {children}
               </Menu.Items>
            </Transition>
         </Menu>
      </div>
   )
}
