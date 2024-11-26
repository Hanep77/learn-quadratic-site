"use client";

import Link from "next/link";
import Breadcrumbs from "../../breadcrumbs";
import { MathJax } from "better-react-mathjax";

export default function ContohSoal() {
  return (
    <>
      <Breadcrumbs chapter="Fungsi kuadrat" title="Contoh Soal" />
      <h4 className="text-lg font-semibold text-green-400 mb-2">Fungsi Kuadrat</h4>
      <h2 className="text-3xl font-semibold mb-2 text-white">Contoh soal dan penyelesaiannya</h2>
      <div className="mb-4">
        <p>
          <span className="text-white font-medium">Contoh 1: Menentukan Sumbu Simetri, Puncak, dan Diskriminan </span>
        </p>
        <p>
          Diberikan fungsi kuadrat <MathJax inline className="text-white">{"\\(f(x) = 2x^2 - 4x + 1\\)"}</MathJax>. Tentukan sumbu simetri, titik puncak, dan diskriminannya!.
        </p>
        <ul className="list-disc ms-10 mb-4">
          <li>
            <p className="mb-2">Sumbu simetri:</p>
            <div className="mb-2 font-medium text-white border border-violet-700 shadow-white inline-block p-3 rounded">
              <MathJax>{"\\(x = \\frac{-(-4)}{2 \\cdot 2} = \\frac{4}{4} = 1\\)"}</MathJax>
            </div>
          </li>
          <li>
            <p className="mb-2">Koordinat titik puncak:</p>
            <div className="mb-2 font-medium text-white border border-violet-700 shadow-white inline-block p-3 rounded">
              <div className="flex flex-row">
                <MathJax>{"\\(f(1)\\)"}</MathJax>
                <div className="flex flex-col ml-1">
                  <MathJax>{"\\(= 2(1)^2 - 4(1) + 1\\)"}</MathJax>
                  <MathJax>{"\\(= 2 - 4 + 1 = -1\\)"}</MathJax>
                  <MathJax>{"\\(= -1\\)"}</MathJax>
                </div>
              </div>
              <p className="font-light text-violet-400">
                jadi titik puncaknya adalah <MathJax inline className="text-white">{"\\((1, -1)\\)"}</MathJax>
              </p>
            </div>
          </li>
          <li>
            <p className="mb-2">Diskriminan:</p>
            <div className="mb-2 font-medium text-white border border-violet-700 shadow-white inline-block p-3 rounded">
              <div className="flex flex-row">
                <MathJax>{"\\(\\Delta\\)"}</MathJax>
                <div className="flex flex-col ml-1">
                  <MathJax>{"\\(= (-4)^2 - 4(2)(1)\\)"}</MathJax>
                  <MathJax>{"\\(= 16 - 8\\)"}</MathJax>
                  <MathJax>{"\\(= 8\\)"}</MathJax>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="mb-8">
        <p>
          <span className="text-white font-medium mb-2">Contoh 2: Menyelesaikan dengan Rumus Kuadrat </span>
        </p>
        <p>
          Selesaikan persamaan kuadrat <MathJax inline className="text-white">{"\\(3x^2 - 6x + 2 = 0\\)"}</MathJax> menggunakan rumus kuadarat ABC!.
        </p>
        <p className="mb-2">Gunakan rumus kuadrat:</p>
        <div className="ps-5 text-white font-medium flex flex-col gap-2">
          <MathJax>{"\\(x = \\frac{-(-6) \\pm \\sqrt{(-6)^2 - 4(3)(2)}}{2(3)}\\)"}</MathJax>
          <MathJax>{"\\(x = \\frac{6 \\pm \\sqrt{36 - 24}}{6}\\)"}</MathJax>
          <MathJax>{"\\(x = \\frac{6 \\pm \\sqrt{12}}{6}\\)"}</MathJax>
          <MathJax>{"\\(x = \\frac{6 \\pm 2\\sqrt{3}}{6}\\)"}</MathJax>
          <MathJax>{"\\(x = 1 \\pm \\frac{\\sqrt{3}}{3}\\)"}</MathJax>
        </div>
        <p>
          Jadi, akar-akarnya adalah <MathJax inline className="text-white">{"\\(x_1 = 1 + \\frac{\\sqrt{3}}{3}\\)"}</MathJax> dan{" "}
          <MathJax inline className="text-white">{"\\(x_2 = 1 - \\frac{\\sqrt{3}}{3}\\)"}</MathJax>.
        </p>
      </div>
      <div>
        <Link href={"/learn/fungsi-kuadrat/grafik-fungsi-kuadrat"}>
          <div>
            <p className="text-sm ms-6">Kembali</p>
            <h3 className="text-base md:text-xl text-white font-medium"><span className="text-xl">&lt;</span> Grafik fungsi kuadrat</h3>
          </div>
        </Link>
      </div>
    </>
  );
}
