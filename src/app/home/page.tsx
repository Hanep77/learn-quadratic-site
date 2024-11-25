"use client"

import { MathJax } from "better-react-mathjax";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="min-h-screen">
        <div className="min-h-screen px-4 lg:px-0"
          style={{ background: "linear-gradient(rgba(28,3,50,.7), rgba(28,3,50,1)), url(/graph-paper.svg)" }}>
          <div className="min-h-screen flex justify-center items-center">
            <div className="text-center max-w-screen-md bg-[rgba(250,250,250,.1)] p-5 py-12 rounded-md backdrop-blur-[2px]">
              <h1 className="text-3xl md:text-5xl font-bold mb-5">
                Selamat Datang di Platform Pembelajaran kami!
              </h1>
              <div className="max-w-[570px] m-auto">
                <p className="text-lg md:text-xl text-violet-300 font-light">Gabung Sekarang dan Rasakan Serunya Belajar Kalkulus
                  dengan Pendekatan Visual dan Mudah dipahami !!</p>
              </div>
              <div className="mt-5 flex justify-center">
                <Link href={'#more'} className="px-5 py-2 border border-violet-300 hover:bg-violet-200 hover:text-violet-950 active:bg-violet-100 rounded-full">Lihat Lebih Banyak</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center">Sekilas tentang <span className="text-green-500">website </span>ini</h1>
        <div className="text-justify max-w-screen-lg px-4 md:px-0">
          <div className="flex flex-col sm:flex-row mb-5">
            <div className="sm:w-1/2 flex justify-center mb-5 md:mb-0">
              <Image src={"/GeoGebra-fuer-interaktive-Tafelaufgaben.svg"} alt="belajar" width={500} height={500} className="w-96 border-s-2 border-t-2 p-2" />
            </div>
            <div className="sm:w-1/2 flex items-center">
              <div className="bg-[rgba(250,250,250,.1)] p-5 text-lg rounded backdrop-blur-[2px]">
                <p className="mb-2">
                  Website ini dibuat sebagai media pembelajaran digital tentang fungsi, khususnya fungsi kuadrat. Website ini juga sebagai salah satu syarat pemenuhan tugas UAS mata kuliah kalkulus I.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row">
            <div className="sm:w-2/3 flex items-center">
              <div className="bg-[rgba(250,250,250,.1)] p-5 text-lg rounded">
                <p className="mb-2">
                  Web ini menyediakan materi pembelajaran dan kalkulator grafik yang dapat memvisualisasikan bentuk dari fungsi. Selain itu terdapat juga quiz yang dapat pengguna selesaikan untuk menguji hasil pembelajaran.
                </p>
              </div>
            </div>
            <div className="sm:flex-grow flex justify-center my-5 md:my-0">
              <Image src={"/Gruppenarbeit-mit-GeoGebra.svg"} alt="belajar" width={500} height={500} className="w-60 border-b-2 border-e-2 p-2" />
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen px-4 pt-12 md:pt-0 lg:px-0 flex flex-col justify-center items-center" id="more" style={{ background: "linear-gradient(rgba(28,3,50,1), rgba(28,3,50,.7)), url(graph-paper.svg)" }}>
        <div className="text-justify max-w-screen-md">
          <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center">Apa itu <span className="text-green-500">fungsi kuadrat</span>?</h1>
          <div className="text-lg text-violet-200 flex flex-col md:flex-row gap-5">
            <div className="bg-[rgba(250,250,250,.1)] p-5 backdrop-blur-[2px] rounded">
              <p className="mb-2">
                Fungsi kuadrat adalah sebuah fungsi matematika di mana variabel bebasnya hanya memiliki pangkat paling tinggi dua. Bentuk umumnya adalah:
              </p>
              <div className="mb-2 font-medium text-white border border-violet-700 shadow-white inline-block p-3 rounded">
                <MathJax>{"\\(f(x) = ax^2 + bx + c\\)"}</MathJax>
              </div>
              <p>di mana:</p>
              <ul className="list-disc ms-10 mt-2">
                <li><MathJax inline>{"\\(a\\)"}</MathJax>, <MathJax inline>{"\\(b\\)"}</MathJax>, dan <MathJax inline>{"\\(c\\)"}</MathJax> adalah konstanta (bilangan tetap)</li>
                <li>x adalah variabel bebas</li>
                <li>a ≠ 0 (agar tetap disebut fungsi kuadrat)</li>
              </ul>
              <div className="mt-5 flex flex-col sm:flex-row gap-2">
                <Link href={'/learn'} className="text-center px-5 py-2 border border-violet-300 hover:bg-violet-300 hover:text-violet-950 active:bg-violet-100 rounded-full">Pelajari Lebih Lanjut</Link>
                <Link href={'/calculator'} className="text-center px-5 py-2 border border-violet-300 hover:bg-violet-300 hover:text-violet-950 active:bg-violet-100 rounded-full">Coba Kalkulator</Link>
              </div>
            </div>
            <div>
              <Image src="/quadratic_function.jpg" alt="matematika" width={700} height={500} className="bg-cover rounded-md hidden md:block" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
