"use client"

import { MathJax } from "better-react-mathjax";
import Breadcrumbs from "../../breadcrumbs";
import Link from "next/link";

export default function GrafikFungsiKuadrat() {
  return (
    <>
      <Breadcrumbs chapter="Fungsi kuadrat" title="Grafik fungsi kuadrat" />
      <h4 className="text-lg font-semibold text-green-400 mb-2">Fungsi Kuadrat</h4>
      <h2 className="text-3xl font-semibold mb-2 text-white">Grafik Fungsi Kuadrat</h2>
      <p className="mb-2">
        Grafik dari fungsi kuadrat berbentuk parabola. Beberapa karakteristik grafik fungsi kuadrat antara lain:
      </p>
      <ul className="list-disc ms-10 mb-8">
        <li>
          <p className="mb-2">
            <span className="text-white font-medium">Sumbu Simetri:</span> Grafik fungsi kuadrat simetris terhadap garis vertikal yang melalui titik puncak parabola. Sumbu simetri dapat ditemukan dengan rumus:
          </p>
          <div className="mb-2 font-medium text-white border border-violet-700 shadow-white inline-block p-3 rounded">
            <MathJax className="text-white">{"\\(x = \\frac{-b}{2a}\\)"}</MathJax>
          </div>
        </li>
        <li>
          <p className="mb-2">
            <span className="text-white font-medium">Titik Puncak (Vertex):</span> Titik tertinggi atau terendah pada grafik fungsi kuadrat. Jika <span className="inline-block"><MathJax className="text-white">{"\\(a > 0\\)"}</MathJax></span>, puncak adalah titik terendah (minimum), dan jika <span className="inline-block"><MathJax className="text-white">{"\\(a < 0\\)"}</MathJax></span>, puncak adalah titik tertinggi (maksimum). Koordinat puncak adalah:
          </p>
          <div className="mb-2 font-medium text-white border border-violet-700 shadow-white inline-block p-3 rounded">
            <MathJax className="text-white">{"\\(x = \\frac{-b}{2a}\\)"}</MathJax> <br />
            <MathJax className="text-white">{"\\(y = f(x) = f\\left(\\frac{-b}{2a}\\right)\\)"}</MathJax>
          </div>
        </li>
        <li>
          <span className="text-white font-medium">Titik Potong dengan Sumbu Y (Y-intercept):</span> Nilai fungsi ketika <span className="inline-block"><MathJax className="text-white">{"\\(x = 0\\)"}</MathJax></span>, yaitu <span className="inline-block"><MathJax className="text-white">{"\\(c\\)"}</MathJax></span>. Jadi, titik potong dengan sumbu y adalah <span className="inline-block"><MathJax className="text-white">{"\\((0, c)\\)"}</MathJax></span>.
        </li>
        <li>
          <p className="mb-2">
            <span className="text-white font-medium">Titik Potong dengan Sumbu X (X-intercept):</span> Titik di mana grafik memotong sumbu x diperoleh dengan mencari akar-akar (solusi) dari persamaan kuadrat <span className="inline-block"><MathJax className="text-white">{"\\(ax^2 + bx + c = 0\\)"}</MathJax></span>. Akar-akar ini bisa dicari dengan:
          </p>
          <ul className="list-disc ms-10 mb-4">
            <li>Memfaktorkan (jika memungkinkan),</li>
            <li>
              <p className="mb-2">Menggunakan Rumus Kuadrat:</p>
              <div className="mb-2 font-medium text-white border border-violet-700 shadow-white inline-block p-3 rounded">
                <MathJax className="text-white">{"\\(x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}\\)"}</MathJax>
              </div>
              <p>
                Di mana <span className="inline-block"><MathJax className="text-white">{"\\(\\Delta = b^2 - 4ac\\)"}</MathJax></span> disebut diskriminan.
              </p>
            </li>
          </ul>
        </li>
      </ul>
      <div className="flex justify-between">
        <Link href={"/learn/fungsi-kuadrat"}>
          <div>
            <p className="text-sm ms-6">Kembali</p>
            <h3 className="text-xl text-white font-medium"><span className="text-2xl me-2">&lt;</span> Fungsi kuadrat</h3>
          </div>
        </Link>
        <Link href={"/learn/fungsi-kuadrat/contoh-soal"}>
          <div>
            <p className="text-sm">Selanjutnya</p>
            <h3 className="text-xl text-white font-medium">Contoh soal <span className="text-2xl ms-2">&gt;</span></h3>
          </div>
        </Link>
      </div>
    </>
  );
}

