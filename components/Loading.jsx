export default function Loading() {
   return (
      <div className=" flex items-center justify-center w-full h-[70vh] flex-1">
         <Spinner className="border-sky-500" />
      </div>
   )
}

export function Spinner({ className }) {
   return (
      <div>
         <div
            style={{ borderTopColor: "transparent" }}
            className={`${className} w-8 h-8 border-2  border-solid rounded-full animate-spin`}
         />
      </div>
   )
}
