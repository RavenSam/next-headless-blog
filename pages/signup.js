import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { BsEyeFill, BsEnvelope, BsKey, BsEyeSlashFill, BsArrowLeft, BsPerson } from "react-icons/bs"

export default function SignUp() {
   const [showPassword, setShowPassword] = useState(false)
   const [showPassword2, setShowPassword2] = useState(false)
   const { back } = useRouter()

   const handleSubmit = (e) => {
      e.preventDefault()
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

               <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                     <label htmlFor="username" className="text-sm font-medium flex items-center gap-2">
                        <span className="text-sky-500 ">
                           <BsPerson size={20} />
                        </span>
                        Username
                     </label>
                     <input className="input" type="email" name="username" />
                  </div>

                  <div className="space-y-2">
                     <label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                        <span className="text-sky-500 ">
                           <BsEnvelope size={20} />
                        </span>
                        Your Email
                     </label>
                     <input className="input" type="email" name="email" />
                  </div>

                  <div className="space-y-2">
                     <label htmlFor="password" className="text-sm font-medium flex items-center gap-2">
                        <span className="text-sky-500 ">
                           <BsKey size={20} />
                        </span>
                        Your Password
                     </label>
                     <div className="relative">
                        <input className="input pr-12" type={showPassword ? "text" : "password"} name="password" />

                        <button
                           type="button"
                           className="text-sky-500  h-full btn px-3 rounded-r-xl absolute top-1/2 right-0 transform  -translate-y-1/2 "
                           onClick={() => setShowPassword(!showPassword)}
                        >
                           {showPassword ? <BsEyeFill size={20} /> : <BsEyeSlashFill size={20} />}
                        </button>
                     </div>
                  </div>

                  <div className="space-y-2">
                     <label htmlFor="confirmPassword" className="text-sm font-medium flex items-center gap-2">
                        <span className="text-sky-500 ">
                           <BsKey size={20} />
                        </span>
                        Confirm Your Password
                     </label>
                     <div className="relative">
                        <input
                           className="input pr-12"
                           type={showPassword2 ? "text" : "password"}
                           name="confirmPassword"
                        />

                        <button
                           type="button"
                           className="text-sky-500  h-full btn px-3 rounded-r-xl absolute top-1/2 right-0 transform  -translate-y-1/2 "
                           onClick={() => setShowPassword2(!showPassword2)}
                        >
                           {showPassword2 ? <BsEyeFill size={20} /> : <BsEyeSlashFill size={20} />}
                        </button>
                     </div>
                  </div>

                  <button type="submit" className="btn-primary text-sm mx-auto">
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
