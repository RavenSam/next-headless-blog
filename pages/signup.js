import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { BsEyeFill, BsEnvelope, BsKey, BsEyeSlashFill, BsArrowLeft, BsPerson } from "react-icons/bs"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

const inputs = [
   { name: "username", label: "username", type: "text", icon: BsPerson },
   { name: "email", label: "your email", type: "email", icon: BsEnvelope },
   { name: "password", label: "your password", type: "password", icon: BsKey },
   { name: "password2", label: "confirm password", type: "password", icon: BsKey },
]

const schema = yup.object().shape({
   username: yup.string().min(4).max(32).required(),
   email: yup.string().email().required(),
   password: yup.string().min(8).max(32).required(),
   password2: yup.string().oneOf([yup.ref("password1"), null], "passwords must match"),
})

export default function SignUp() {
   const [showPassword, setShowPassword] = useState({ password: false, password2: false })
   const { back } = useRouter()

   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm({
      resolver: yupResolver(schema),
   })

   const onSubmitHandler = (data) => {
      console.log(data)
      reset()
   }

   const handleShowPW = (name) => {
      setShowPassword({ ...showPassword, [name]: !showPassword[name] })
   }

   return (
      <div className="flex items-center justify-center min-h-screen">
         <div className="w-full max-w-md p-2">
            <button title="go back" className="btn-icon !text-sky-500" aria-label="go back" onClick={back}>
               <BsArrowLeft size={20} />
            </button>

            <div className="card bg-white dark:bg-gray-900 rounded-xl px-4 py-8 shadow-xl">
               <h1 className="text-3xl capitalize font-bold pb-8 tracking-widest">
                  Sign Up<span className="text-sky-500">.</span>
               </h1>

               <form className="space-y-5" onSubmit={handleSubmit(onSubmitHandler)}>
                  {inputs.map((input, i) => (
                     <div key={i} className="space-y-2">
                        <label htmlFor={input.name} className="text-sm capitalize font-medium flex items-center gap-2">
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
                              type={
                                 input.type !== "password" ? input.type : showPassword[input.name] ? "text" : "password"
                              }
                           />

                           {input.type === "password" && (
                              <button
                                 type="button"
                                 className="text-sky-500  h-full btn px-3 rounded-r-xl absolute top-1/2 right-0 transform  -translate-y-1/2 "
                                 onClick={() => handleShowPW(input.name)}
                              >
                                 {showPassword[input.name] ? <BsEyeFill size={20} /> : <BsEyeSlashFill size={20} />}
                              </button>
                           )}
                        </div>
                        <p className="text-pink-500 text-sm px-2">{errors[input.name]?.message}</p>
                     </div>
                  ))}

                  <button type="submit" className="btn-primary mx-auto">
                     Sign Up
                  </button>
               </form>
            </div>

            <p className="text-sm text-center my-4 text-gray-600 dark:text-gray-400">
               {`Already have an account? `}
               <Link href="/login">
                  <a className="text-sky-500 font-medium">Login</a>
               </Link>
            </p>
         </div>
      </div>
   )
}
