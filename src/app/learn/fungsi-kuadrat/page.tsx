"use client"

import { MathJax } from "better-react-mathjax";
import Breadcrumbs from "../breadcrumbs";
import Link from "next/link";

export default function FungsiKuadrat() {
  return (
    <>
      <Breadcrumbs chapter="Fungsi kuadrat" title="Pengertian" />
      <h4 className="text-lg font-semibold text-green-400 mb-2">Fungsi Kuadrat</h4>
      <h2 className="text-3xl font-semibold mb-2 text-white">Pengertian</h2>
      <p className="mb-2">
        Fungsi kuadrat adalah fungsi polinomial dengan pangkat tertinggi dari variabelnya adalah dua. Bentuk umum dari fungsi kuadrat adalah:
      </p>
      <div className="mb-2 font-medium text-white border border-violet-700 shadow-white inline-block p-3 rounded">
        <MathJax>{"\\(f(x) = ax^2 + bx + c\\)"}</MathJax>
      </div>
      <p className="mb-2">di mana:</p>
      <ul className="list-disc ms-10 mb-4">
        <li>
          <span className="text-white font-medium inline-block"><MathJax inline className="text-white">{"\\(f\\)"}</MathJax></span> adalah nama fungsi
        </li>
        <li>
          <span className="text-white font-medium inline-block"><MathJax inline className="text-white">{"\\(x\\)"}</MathJax></span> adalah variabel input (atau argumen fungsi)
        </li>
        <li>
          <span className="text-white font-medium inline-block"><MathJax inline className="text-white">{"\\(f(x)\\)"}</MathJax></span> adalah hasil fungsi atau output dari fungsi untuk input <span className="inline-block"><MathJax inline className="text-white">{"\\(x\\)"}</MathJax></span>
        </li>
      </ul>
      <div className="mb-8">
        <h3 className="text-xl font-medium text-white mb-2">Bagian-bagian Fungsi Kuadrat</h3>
        <ul className="list-disc ms-10 my-2">
          <li>
            <span className="text-white font-medium">Koefisien a: </span>
            Koefisien dari <MathJax inline className="text-white">{"\\(x^2\\)"}</MathJax>, yang menentukan lebar dan arah parabola. Jika <MathJax inline className="text-white">{"\\(a > 0\\)"}</MathJax>, parabola terbuka ke atas, dan jika <MathJax inline className="text-white">{"\\(a < 0\\)"}</MathJax>, parabola terbuka ke bawah.
          </li>
          <li>
            <span className="text-white font-medium">Koefisien b: </span>
            Koefisien dari <MathJax inline className="text-white">{"\\(x\\)"}</MathJax>, yang mempengaruhi posisi sumbu simetri parabola.
          </li>
          <li>
            <span className="text-white font-medium">Konstanta c: </span>
            Menentukan titik potong dengan sumbu y (<em>y-intercept</em>).
          </li>
        </ul>
      </div>
      <div className="flex justify-between">
        <Link href={"/learn/fungsi/macam-macam-fungsi"}>
          <div>
            <p className="text-sm ms-6">Kembali</p>
            <h3 className="text-xl text-white font-medium"><span className="text-2xl me-2">&lt;</span> Macam-macam fungsi</h3>
          </div>
        </Link>
        <Link href={"/learn/fungsi-kuadrat/grafik-fungsi-kuadrat"}>
          <div>
            <p className="text-sm">Selanjutnya</p>
            <h3 className="text-xl text-white font-medium">Grafik fungsi kuadrat <span className="text-2xl ms-2">&gt;</span></h3>
          </div>
        </Link>
      </div>
    </>
  );
}
