"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname: string = usePathname();
  const [sidebar, setSidebar] = useState<boolean>(false);

  const handleSidebar = () => {
    setSidebar(!sidebar);
  }

  const closeSidebar = () => {
    setSidebar(false);
  }

  return (
    <header className={`px-4 lg:px-0 fixed top-0 left-0 right-0 h-16 bg-[rgba(28,3,50,.2)] ${sidebar && 'bg-[rgba(28,3,50,1)] border-none'} backdrop-blur border-b border-violet-700 z-30`}>
      <nav className="max-w-screen-lg h-full m-auto flex justify-between items-center">
        <img src="/logo.png" alt="logo" className="h-8" />
        <div className={`fixed md:static bg-[rgba(28,3,50,1)] min-h-screen md:bg-transparent z-50 inset-0 mt-16 pt-4 md:pt-0 md:mt-0 ${!sidebar && 'translate-x-full'} transition md:translate-x-0 flex`}>
          <ul className="md:flex md:gap-1 flex flex-col md:flex-row items-center gap-5 text-lg font-medium px-4 md:px-0 w-full">
            <li><Link href={"/home"} onClick={closeSidebar} className={`py-1 px-2 rounded-full ${pathname == "/home" ? "text-violet-900 bg-white" : "hover:text-violet-900 hover:bg-white"}`}>Home</Link></li>
            <li><Link href={"/learn"} onClick={closeSidebar} className={`py-1 px-2 rounded-full ${pathname == "/learn" ? "text-violet-900 bg-white" : "hover:text-violet-900 hover:bg-white"}`}>Learn</Link></li>
            <li><Link href={"/calculator"} onClick={closeSidebar} className={`py-1 px-2 rounded-full ${pathname == "/calculator" ? "text-violet-900 bg-white" : "hover:text-violet-900 hover:bg-white"}`}>Calculator</Link></li>
            <li><Link href={"/quiz"} onClick={closeSidebar} className={`py-1 px-2 rounded-full ${pathname == "/quiz" ? "text-violet-900 bg-white" : "hover:text-violet-900 hover:bg-white"}`}>Quiz</Link></li>
          </ul>
        </div>

        <div className="hidden md:block">
          <Link href={"/team"} className="px-5 py-1 border rounded-full bg-violet-100 text-violet-950">Our Team</Link>
        </div>

        <button className={`flex flex-col gap-[6px] md:hidden py-2`} onClick={handleSidebar}>
          <div className={`w-8 h-[3px] bg-white rounded ${sidebar && 'translate-y-[4.7px] rotate-45'} transition`}></div>
          <div className={`w-8 h-[3px] bg-white rounded ${sidebar && 'hidden'} transition`}></div>
          <div className={`w-8 h-[3px] bg-white rounded ${sidebar && '-translate-y-[4.7px] -rotate-45'} transition`}></div>
        </button>
      </nav>
    </header>
  );
}
