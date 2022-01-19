export default function Loading() {
   return (
      <div className=" flex items-center justify-center w-full h-[70vh] flex-1">
         <Spinner />
      </div>
   )
}

export function Spinner() {
   return (
      <div>
         <div
            style={{ borderTopColor: "transparent" }}
            className="w-8 h-8 border-2 border-sky-500 border-solid rounded-full animate-spin"
         />
      </div>
   )
}
