"use client"

import { MathJax } from "better-react-mathjax";
import Breadcrumbs from "../../breadcrumbs";

export default function GrafikFungsiKuadrat() {
  return (
    <>
      <Breadcrumbs chapter="Fungsi kuadrat" title="Grafik fungsi kuadrat" />
      <h4 className="text-lg font-semibold text-green-400 mb-2">Fungsi Kuadrat</h4>
      <h2 className="text-3xl font-semibold mb-2 text-white">Grafik Fungsi Kuadrat</h2>
      <p className="mb-2">Grafik dari fungsi kuadrat berbentuk parabola. Beberapa karakteristik grafik fungsi kuadrat antara lain:</p>
      <ul className="list-disc ms-10 mb-4">
        <li>
          <p className="mb-2">Sumbu Simetri: Grafik fungsi kuadrat simetris terhadap garis vertikal yang melalui titik puncak parabola. Sumbu simetri dapat ditemukan dengan rumus:</p>
          <div className="mb-2 font-medium text-white border border-violet-700 shadow-white inline-block p-3 rounded">
            <MathJax>{"x = -\\frac{b}{2a}"}</MathJax>
          </div>
        </li>
        <li>
          <p className="mb-2">Titik Puncak (Vertex): Titik tertinggi atau terendah pada grafik fungsi kuadrat. Jika a &gt; 0, puncak adalah titik terendah (minimum), dan jika a &lt; 0, puncak adalah titik tertinggi (maksimum). Koordinat puncak adalah:</p>
          <div className="mb-2 font-medium text-white border border-violet-700 shadow-white inline-block p-3 rounded">
            <p><span className="text-green-400">x</span> = -b/2a</p>
            <p><span className="text-green-400">y</span> = <span className="text-orange-400">f(x)</span> = f(-b/2)</p>
          </div>
        </li>
        <li>Titik Potong dengan Sumbu Y (Y-intercept): Nilai fungsi ketika x = 0, yaitu c. Jadi, titik potong dengan sumbu y adalah (0, c).</li>
        <li>
          <p>Titik Potong dengan Sumbu X (X-intercept): Titik di mana grafik memotong sumbu x diperoleh dengan mencari akar-akar (solusi) dari persamaan kuadrat ax^2 + bx + c = 0. Akar-akar ini bisa dicari dengan:</p>
          <ul className="list-disc ms-10 mb-4">
            <li>Memfaktorkan (jika memungkinkan),</li>
            <li>
              <p className="mb-2">Menggunakan Rumus Kuadrat:</p>
              <div className="mb-2 font-medium text-white border border-violet-700 shadow-white inline-block p-3 rounded">
                <p><span className="text-green-400">x</span> = -b +- √b^2 - 4ac/2a</p>
              </div>
              <p>Di mana Δ = b^2 - 4ac disebut diskriminan.</p>
            </li>
          </ul>
        </li>
      </ul>
    </>
  )
}
