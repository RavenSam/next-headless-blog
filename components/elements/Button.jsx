export default function Button({ children, varient, disabled = false, loading }) {
   const ghostV = `capitalize font-semibold  tracking-wider  flex items-center transition duration-300 disabled:opacity-60 disabled:pointer-events-none  text-gray-500 hover:text-gray-800 hover:bg-gray-200 active:bg-gray-300 px-4 py-2 rounded-xl `

   const primaryV = `capitalize font-semibold  tracking-wider rounded-xl flex items-center gap-2 transition duration-300 disabled:opacity-60 disabled:pointer-events-none ${
      loading && "pointer-events-none opacity-80"
   } text-white border-2 border-sky-500 bg-sky-500 hover:border-sky-600 hover:bg-sky-600 px-8 py-2 transform active:scale-90`

   const secondayV = `capitalize font-semibold  tracking-wider rounded-xl flex items-center gap-2 transition duration-300 disabled:opacity-60 disabled:pointer-events-none ${
      loading && "pointer-events-none opacity-80"
   } text-sky-500 border-2 border-sky-500 hover:bg-sky-500 hover:text-white px-4 py-2 transform active:scale-90`

   const iconV = `capitalize font-semibold rounded-full h-12 w-12 text-center flex items-center justify-center  transition duration-300 disabled:opacity-60 disabled:pointer-events-none  text-gray-500 hover:text-gray-800 hover:bg-gray-200 active:bg-gray-300`

   switch (varient) {
      case "ghost":
         return (
            <button className={`${ghostV}`} disabled={disabled}>
               {children}
            </button>
         )

      case "primary":
         return (
            <button className={`${primaryV}`} disabled={disabled}>
               {loading && (
                  <span
                     style={{ borderTopColor: "transparent" }}
                     className="w-4 h-4 border-2 border-solid rounded-full animate-spin"
                  />
               )}
               {children}
            </button>
         )

      case "secondary":
         return (
            <button className={`${secondayV}`} disabled={disabled}>
               {loading && (
                  <span
                     style={{ borderTopColor: "transparent" }}
                     className="w-4 h-4 border-2 border-solid rounded-full animate-spin"
                  />
               )}
               {children}
            </button>
         )

      case "icon":
         return (
            <button className={`${iconV}`} disabled={disabled}>
               {children}
            </button>
         )

      default:
         return (
            <button className={`${ghostV}`} disabled={disabled}>
               {children}
            </button>
         )
   }
}
