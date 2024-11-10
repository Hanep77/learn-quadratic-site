"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-[rgba(28,3,50,.2)] backdrop-blur border-b border-violet-500 z-30">
      <nav className="max-w-screen-lg h-full m-auto flex justify-between items-center">
        <h1 className="font-semibold text-xl">Logo</h1>
        <ul className="flex gap-1">
          <li><Link href={"/home"} className={`py-1 px-2 rounded-full ${pathname == "/home" ? "text-violet-900 bg-white" : "hover:text-violet-900 hover:bg-white"}`}>Home</Link></li>
          <li><Link href={"/learn"} className={`py-1 px-2 rounded-full ${pathname == "/learn" ? "text-violet-900 bg-white" : "hover:text-violet-900 hover:bg-white"}`}>Learn</Link></li>
          <li><Link href={"/calculator"} className={`py-1 px-2 rounded-full ${pathname == "/calculator" ? "text-violet-900 bg-white" : "hover:text-violet-900 hover:bg-white"}`}>Calculator</Link></li>
          <li><Link href={"/quiz"} className={`py-1 px-2 rounded-full ${pathname == "/quiz" ? "text-violet-900 bg-white" : "hover:text-violet-900 hover:bg-white"}`}>Quiz</Link></li>
        </ul>
        <div>
          <Link href={"/team"} className="block px-5 py-1 border rounded-full bg-violet-100 text-violet-950">Our Team</Link>
        </div>
      </nav>
    </header>
  );
}
