import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { BsEyeFill, BsEyeSlashFill, BsArrowLeft } from "react-icons/bs"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import axios from "axios"
import { Spinner } from "../components/Loading"
import toast from "react-hot-toast"
import { registerInputs } from "../lib/inputsArrays"
import { signupSchema } from "../lib/yupSchima"

export default function SignUp() {
   const [showPassword, setShowPassword] = useState({ password: false, password2: false })
   const { back } = useRouter()
   const { register, handleSubmit, setError, formState, reset } = useForm({ resolver: yupResolver(signupSchema) })
   const { errors, isSubmitting } = formState

   const onSubmitHandler = async (data) => {
      try {
         const res = await axios.post("/api/auth/register", { data })

         localStorage.setItem("user", JSON.stringify(res.data))

         reset()

         toast.success("You Have Registred Successfully", { className: "toast", duration: 4000 })

         setTimeout(() => (location.href = "/user"), 2000)
      } catch (err) {
         console.log(err.message)
         setError("apiError", { message: "Something went wrong: Registration Failed" })
         toast.error("Something went wrong", { className: "toast", duration: 4000 })
      }
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
                  {registerInputs.map((input, i) => (
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
                              type={
                                 input.type !== "password" ? input.type : showPassword[input.name] ? "text" : "password"
                              }
                              placeholder={input.placeholder}
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

                  <button type="submit" className="btn-primary mx-auto" disabled={isSubmitting}>
                     {isSubmitting && <Spinner className="text-white !w-5 !h-5" />}
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
