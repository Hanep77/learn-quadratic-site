import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="min-h-screen">
        <Image src="/bg.jpg" alt="matematika" width={500} height={500} className="h-screen w-full bg-cover absolute -z-30" />
        <div className="absolute min-h-screen w-full bg-gradient-to-b from-[rgba(128,21,174,0.8)] to-[rgba(28,3,50,1)]">
          <div className="min-h-screen flex justify-center items-center">
            <div className="text-center max-w-screen-md">
              <h1 className="text-5xl font-bold mb-5">
                Welcome to Our Learning Platform
              </h1>
              <div className="max-w-[570px] m-auto">
                <p className="text-xl text-violet-400 font-light">Gabung Sekarang dan Rasakan Serunya Belajar Kalkulus
                  dengan Pendekatan Visual dan Mudah dipahami !!</p>
              </div>
              <div className="mt-5 flex justify-center">
                <Link href={'#more'} className="px-5 py-2 border border-violet-300 hover:bg-violet-300 hover:text-violet-950 active:bg-violet-100 rounded-full">View More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="min-h-screen bg-[rgba(28,3,50,1)] flex flex-col justify-center items-center" id="more">
        <div className="text-justify max-w-screen-md">
          <h1 className="text-5xl font-bold mb-8 text-center">Apa itu fungsi kuadrat</h1>
          <div className="text-lg text-violet-300 font-light">
            <p>
              Fungsi kuadrat adalah sebuah fungsi matematika di mana variabel bebasnya hanya memiliki pangkat paling tinggi dua. Bentuk umumnya adalah:
              <span className="text-white font-semibold">
                <span className="text-yellow-400"> f(x) </span>= <span className="text-green-400">ax² </span>+ <span className="text-green-400">bx </span> + <span className="text-green-400">c</span></span> di mana:
            </p>
            <ul className="list-disc ms-10 mt-2">
              <li>a, b, dan c adalah konstanta (bilangan tetap)</li>
              <li>x adalah variabel bebas</li>
              <li>a ≠ 0 (agar tetap disebut fungsi kuadrat)</li>
            </ul>
            <div className="mt-5 flex justify-center gap-2">
              <Link href={'/learn'} className="px-5 py-2 border border-violet-300 hover:bg-violet-300 hover:text-violet-950 active:bg-violet-100 rounded-full">Pelajari Lebih Lanjut</Link>
              <Link href={'/calculator'} className="px-5 py-2 border border-violet-300 hover:bg-violet-300 hover:text-violet-950 active:bg-violet-100 rounded-full">Coba Kalkulator</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
