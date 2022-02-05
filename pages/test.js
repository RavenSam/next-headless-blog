import React, { useState } from "react"
import { useTransition, animated } from "react-spring"

export default function Test() {
   const [items, setItems] = useState([])
   const transitions = useTransition(items, {
      from: { opacity: 0, x: -100, y: 400 },
      enter: (item) => async (next) => {
         await next({ opacity: 1, x: 0, y: 0, delay: item.delay })
      },
      leave: { opacity: 0, x: 100, y: 400 },
   })

   const handleClick = () => {
      setItems((v) => (v.length ? [] : [{ delay: 200 }, { delay: 400 }, { delay: 600 }]))
   }

   return (
      <div className="max-w-3xl mx-auto min-h-screen flex flex-col items-center">
         <button className="btn-primary max-w-fit" onClick={handleClick}>
            Click
         </button>

         <div className="flex-1 pt-20 space-y-4">
            {transitions(
               (style, item) =>
                  item && (
                     <animated.div style={style}>
                        <div className="w-20 h-20 rounded-xl bg-sky-500" />
                     </animated.div>
                  )
            )}
         </div>
      </div>
   )
}
