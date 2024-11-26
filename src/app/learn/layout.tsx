"use client"

import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

export default function Learn({ children }: { children: React.ReactNode }) {
  const pathname: string = usePathname();
  const [menu, setMenu] = useState<boolean>(false)

  return (
    <div className="bg-[rgba(28,3,50,1)] pt-16 md:pt-20 min-h-screen max-w-screen">
      <button onClick={() => setMenu(!menu)} type="button"
        className={`fixed flex items-center ${menu ? "bg-[rgba(28,3,50,1)]" : "bg-[rgba(28,3,50,.2)]"} backdrop-blur border-b border-violet-900 py-1 px-4 md:hidden w-full text-start z-20`}>
        <span className={`inline-block mr-2 text-xl text-medium ${menu && "rotate-180"} transition`}>&gt;</span> Menu
      </button>
      <div className="max-w-screen-lg m-auto flex gap-5 px-4 lg:px-0 pt-14 md:pt-0">
        <aside className={`fixed bg-[rgba(28,3,50,1)] md:bg-transparent top-0 pt-28 md:top-20 ${!menu && "hidden"} left-0 md:left-auto right-0 md:right-auto p-4 md:p-0 md:pt h-screen overflow-y-auto md:flex flex-col gap-5 z-10`}>
          <div>
            <h6 className="font-medium mb-2">Pengantar</h6>
            <ul className="text-violet-400 font-light">
              <li className={`border-s ${pathname == "/learn" ? "text-white font-normal" : "border-violet-700"} ps-4 py-1`}><Link onClick={() => setMenu(false)} href={'/learn'}>Pendahuluan</Link></li>
              <li className={`border-s ${pathname == "/learn/pengantar/prerequisit" ? "text-white font-normal" : "border-violet-700"} ps-4 py-1`}><Link onClick={() => setMenu(false)} href={'/learn/pengantar/prerequisit'}>Prasyarat</Link></li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium mb-2">Apa itu fungsi?</h6>
            <ul className="text-violet-400 font-light">
              <li className={`border-s ${pathname == "/learn/fungsi" ? "text-white font-normal" : "border-violet-700"} ps-4 py-1`}><Link onClick={() => setMenu(false)} href={'/learn/fungsi'}>Pengertian</Link></li>
              <li className={`border-s ${pathname == "/learn/fungsi/macam-macam-fungsi" ? "text-white font-normal" : "border-violet-700"} ps-4 py-1`}><Link onClick={() => setMenu(false)} href={'/learn/fungsi/macam-macam-fungsi'}>Macam-macam Fungsi</Link></li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium mb-2">Fungsi kuadrat</h6>
            <ul className="text-violet-400 font-light">
              <li className={`border-s ${pathname == "/learn/fungsi-kuadrat" ? "text-white font-normal" : "border-violet-700"} ps-4 py-1`}><Link onClick={() => setMenu(false)} href={'/learn/fungsi-kuadrat'}>Pengertian</Link></li>
              <li className={`border-s ${pathname == "/learn/fungsi-kuadrat/grafik-fungsi-kuadrat" ? "text-white font-normal" : "border-violet-700"} ps-4 py-1`}><Link onClick={() => setMenu(false)} href={'/learn/fungsi-kuadrat/grafik-fungsi-kuadrat'}>Grafik fungsi kuadrat</Link></li>
              <li className={`border-s ${pathname == "/learn/fungsi-kuadrat/contoh-soal" ? "text-white font-normal" : "border-violet-700"} ps-4 py-1`}><Link onClick={() => setMenu(false)} href={'/learn/fungsi-kuadrat/contoh-soal'}>Contoh soal</Link></li>
            </ul>
          </div>
        </aside>
        <div className="flex-grow">
          <div className="w-full leading-7 text-lg text-violet-300 pb-16 md:ps-52">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
