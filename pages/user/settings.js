import UserLayout from "../../layouts/UserLayout"
import { NextSeo } from "next-seo"
import Avatar from "react-avatar"
import { useState } from "react"

const inputs = [
   { name: "firstname", label: "your firstname", type: "text" },
   { name: "lastname", label: "your lastname", type: "text" },
   { name: "username", label: "your username", type: "text" },
   { name: "email", label: "your email", type: "email" },
]

export default function Settings({ user }) {
   const [inputsState, setInputsState] = useState({
      firstname: "",
      lastname: "",
      username: user.username,
      email: user.email,
   })

   const onSubmitHandler = (e) => {
      e.preventDefault()
   }

   return (
      <>
         <NextSeo
            title="Your Settings"
            description="Your Settings | change your settings and make yourself more unique"
         />

         <div className="relative rounded-xl shadow px-5 py-8 md:p-10 bg-white dark:bg-gray-900">
            <h1 className="text-xl md:text-2xl font-bold">Settings</h1>
         </div>

         <div className="grid grid-cols-12 py-5 mt-5">
            <div className="col-span-4 ">
               <Avatar
                  name={user.username}
                  src={user.photo}
                  maxInitials={2}
                  size="150"
                  round={true}
                  className="!leading-[150px]"
               />
            </div>

            <div className="col-span-8">
               <form className="space-y-5 max-w-lg mx-auto" onSubmit={onSubmitHandler}>
                  {inputs.map((input, i) => (
                     <div key={i} className="space-y-2">
                        <label
                           htmlFor={input.name}
                           className="text-sm px-2 capitalize font-medium flex items-center gap-2"
                        >
                           {input.label}
                        </label>
                        <div className="relative">
                           <input
                              className="input pr-12"
                              name={input.name}
                              type={input.type}
                              value={inputsState[input.name]}
                              onChange={(e) => setInputsState({ ...inputsState, [e.target.name]: e.target.value })}
                           />
                        </div>
                     </div>
                  ))}
               </form>
            </div>
         </div>
      </>
   )
}

Settings.layout = UserLayout
