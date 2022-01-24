import Image from "next/image"
import { BsEnvelope, BsPerson } from "react-icons/bs"
import UserLayout from "../../layouts/UserLayout"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

const inputs = [
   { name: "email", label: "your email", type: "email", icon: BsEnvelope },
   { name: "username", label: "your username", type: "text", icon: BsPerson },
]

const loginSchema = yup.object().shape({
   email: yup.string().email().required(),
   password: yup.string().min(8).max(32).required(),
})

export default function Settings() {
   const { register, handleSubmit, setError, formState, reset } = useForm({ resolver: yupResolver(loginSchema) })
   const { errors, isSubmitting } = formState

   const onSubmitHandler = (data) => {
      console.log(data)
   }

   return (
      <div>
         <div className="-z-10 relative rounded-xl shadow px-5 py-8 md:p-10 bg-white dark:bg-gray-900">
            <h1 className="text-xl md:text-2xl font-bold">Settings</h1>
         </div>

         <div className="grid grid-cols-12 py-5 mt-5">
            <div className="col-span-4 ">
               <div className="relative img w-[150px] h-[150px] mx-auto">
                  <Image
                     className="w-full rounded-full "
                     src="/images/user.jpg"
                     alt="Jon Doe"
                     width={150}
                     height={150}
                     objectFit="cover"
                  />
               </div>
            </div>

            <div className="col-span-8">
               <form className="space-y-5 max-w-lg mx-auto" onSubmit={handleSubmit(onSubmitHandler)}>
                  {inputs.map((input, i) => (
                     <div key={i} className="space-y-2">
                        <label
                           htmlFor={input.name}
                           className="text-sm px-2 capitalize font-medium flex items-center gap-2"
                        >
                           <span className="text-sky-500 ">
                              <input.icon size={20} />
                           </span>
                           {input.label}
                        </label>
                        <div className="relative">
                           <input
                              className="input pr-12"
                              name={input.name}
                              {...register(input.name)}
                              type={input.type}
                           />
                        </div>
                        <p className="text-pink-500 text-sm px-2">{errors[input.name]?.message}</p>
                     </div>
                  ))}
               </form>
            </div>
         </div>
      </div>
   )
}

Settings.layout = UserLayout
