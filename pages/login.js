import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { BsEyeFill, BsEnvelope, BsKey, BsEyeSlashFill, BsArrowLeft } from "react-icons/bs"
import { FcGoogle } from "react-icons/fc"

export default function Login() {
   const [showPassword, setShowPassword] = useState(false)
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
                  login<span className="text-sky-500">.</span>
               </h1>

               <form className="space-y-5" onSubmit={handleSubmit}>
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

                  <div className="text-right">
                     <Link href="#">
                        <a className="link font-medium">Forget your password?</a>
                     </Link>
                  </div>

                  <button type="submit" className="btn-primary text-sm mx-auto">
                     Login
                  </button>
               </form>

               <div className="space-y-2">
                  <div className="flex items-center justify-center">
                     <hr className=" flex-1 dark:border-gray-600" />
                     <span className="p-4">or</span>
                     <hr className="  flex-1 dark:border-gray-600" />
                  </div>

                  <button className="justify-center gap-4  w-full bg-white rounded-md shadow-lg py-3 px-5 btn border opacity-70 hover:opacity-100">
                     <FcGoogle size={25} />
                     <span className="text-gray-700 darktext-gray-500 font-medium">Login With Google</span>
                  </button>
               </div>
            </div>

            <p className="text-sm text-center my-4 text-gray-600 dark:text-gray-400">
               {`Don't have an account? `}
               <Link href="/signup">
                  <a className="text-sky-500 font-medium">Sign up</a>
               </Link>
            </p>
         </div>
      </div>
   )
}
