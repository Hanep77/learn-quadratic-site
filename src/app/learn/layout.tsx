"use client"

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { MathJaxContext } from "better-react-mathjax";

const mathJaxConfig = {
  loader: { load: ["[tex]/color"] },
  tex: {
    inlineMath: [["$", "$"], ["\\(", "\\)"]],
    displayMath: [["$$", "$$"], ["\\[", "\\]"]],
  },
};

export { mathJaxConfig };

export default function Learn({ children }: { children: React.ReactNode }) {
  const pathname: string = usePathname();

  return (
    <div className="bg-[rgba(28,3,50,1)] pt-20 min-h-screen max-w-screen">
      <div className="max-w-screen-lg m-auto flex gap-5">
        <aside className="h-screen overflow-y-auto min-w-48 flex flex-col gap-5">
          <div>
            <h6 className="font-medium mb-2">Pengantar</h6>
            <ul className="text-violet-400 font-light">
              <li className={`border-s ${pathname == "/learn" ? "text-white font-normal" : "border-violet-700"} ps-4 py-1`}><Link href={'/learn'}>Pendahuluan</Link></li>
              <li className={`border-s ${pathname == "/learn/pengantar/prerequisit" ? "text-white font-normal" : "border-violet-700"} ps-4 py-1`}><Link href={'/learn/pengantar/prerequisit'}>Pre-requisites</Link></li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium mb-2">Apa itu fungsi?</h6>
            <ul className="text-violet-400 font-light">
              <li className={`border-s ${pathname == "/learn/fungsi" ? "text-white font-normal" : "border-violet-700"} ps-4 py-1`}><Link href={'/learn/fungsi'}>Pengertian</Link></li>
              <li className={`border-s ${pathname == "/learn/fungsi/macam-macam-fungsi" ? "text-white font-normal" : "border-violet-700"} ps-4 py-1`}><Link href={'/learn/fungsi/macam-macam-fungsi'}>Macam-macam Fungsi</Link></li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium mb-2">Fungsi kuadrat</h6>
            <ul className="text-violet-400 font-light">
              <li className={`border-s ${pathname == "/learn/fungsi-kuadrat" ? "text-white font-normal" : "border-violet-700"} ps-4 py-1`}><Link href={'/learn/fungsi-kuadrat'}>Pengertian</Link></li>
              <li className={`border-s ${pathname == "/learn/fungsi-kuadrat/grafik-fungsi-kuadrat" ? "text-white font-normal" : "border-violet-700"} ps-4 py-1`}><Link href={'/learn/fungsi-kuadrat/grafik-fungsi-kuadrat'}>Grafik fungsi kuadrat</Link></li>
              <li className={`border-s ${pathname == "/learn/fungsi-kuadrat/contoh-soal" ? "text-white font-normal" : "border-violet-700"} ps-4 py-1`}><Link href={'/learn/fungsi-kuadrat/contoh-soal'}>Contoh soal</Link></li>
            </ul>
          </div>
        </aside>
        <div className="flex-grow">
          <div className="w-full leading-7 text-lg text-violet-300 pb-16">
            <MathJaxContext config={mathJaxConfig}>
              {children}
            </MathJaxContext>
          </div>
        </div>
      </div>
    </div>
  )
}
