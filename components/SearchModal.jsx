import { useRef, useState } from "react"
import { HiOutlineSearch } from "react-icons/hi"
import Modal from "./shared/Modal"

export default function SearchModal() {
   const [searchValue, setSearchValue] = useState("")

   const searchRef = useRef()

   const handleSubmit = (e) => {
      e.preventDefault()

      alert(searchValue)
   }
   return (
      <>
         <Modal icon={HiOutlineSearch} initFocusRef={searchRef} title="Search">
            <form onSubmit={handleSubmit} className="relative">
               <input
                  type="search"
                  name="search"
                  className="input pr-14"
                  ref={searchRef}
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
               />

               <button className="text-sky-500 h-full btn px-4 rounded-r-xl absolute top-1/2 right-0 transform  -translate-y-1/2 ">
                  <HiOutlineSearch size={20} />
               </button>
            </form>
         </Modal>
      </>
   )
}
