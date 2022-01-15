import Link from "next/link"
import ThemeToggle from "../ThemeToggle"

const navLists = [
   { title: "home", href: "/" },
   { title: "latest", href: "/" },
   { title: "about us", href: "/" },
   { title: "contact", href: "/" },
]

export default function Header() {
   return (
      <header className="w-full ">
         <div className="w-full max-w-6xl mx-auto flex items-center justify-between py-4 px-2">
            <div>
               <h2 className="text-3xl font-bold">LOGO</h2>
            </div>

            <nav className="flex items-center space-x-2">
               {navLists.map((list) => (
                  <Link href={list.href} key={list.title}>
                     <a className="btn-ghost text-sm">{list.title}</a>
                  </Link>
               ))}

               <ThemeToggle />
            </nav>
         </div>
      </header>
   )
}
