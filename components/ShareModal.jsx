import { useRef } from "react"
import { BsShareFill, BsLink } from "react-icons/bs"
import Modal from "./shared/Modal"
import {
   FacebookIcon,
   FacebookShareButton,
   PinterestIcon,
   PinterestShareButton,
   RedditIcon,
   RedditShareButton,
   TumblrIcon,
   TumblrShareButton,
   TwitterIcon,
   TwitterShareButton,
   VKIcon,
   VKShareButton,
} from "react-share"
import toast from "react-hot-toast"

const btnIcons = [
   { btn: CopyButton, icon: BsLink },
   { btn: FacebookShareButton, icon: FacebookIcon },
   { btn: TwitterShareButton, icon: TwitterIcon },
   { btn: RedditShareButton, icon: RedditIcon },
   { btn: TumblrShareButton, icon: TumblrIcon },
   { btn: PinterestShareButton, icon: PinterestIcon },
   { btn: VKShareButton, icon: VKIcon },
]

export default function ShareModal({ path }) {
   const shareRef = useRef()

   const url = process.env.NEXT_PUBLIC_DOMAIN + path

   return (
      <>
         <Modal className="btn-icon-1" icon={BsShareFill} initFocusRef={shareRef} title="Share Post">
            <div className="grid grid-cols-4 gap-4">
               {btnIcons.map((btn, i) => (
                  <div key={i} className="flex items-center justify-center">
                     <btn.btn url={url}>
                        <btn.icon round="true" />
                     </btn.btn>
                  </div>
               ))}
            </div>
         </Modal>
      </>
   )
}

export function CopyButton({ children, url }) {
   const handleCopy = () => {
      navigator.clipboard.writeText(url)

      toast.success("Url Copied to clipboard", { className: "toast", duration: 2000 })
   }

   return (
      <button
         onClick={handleCopy}
         title="Copy to Clipboard"
         aria-label="Copy to Clipboard"
         className="btn w-[62px] h-[62px]  justify-center bg-gray-300 dark:bg-gray-700 rounded-full text-3xl"
      >
         {children}
      </button>
   )
}
