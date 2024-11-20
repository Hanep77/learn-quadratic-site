"use client";

import { MathJax } from "better-react-mathjax";
import Breadcrumbs from "../../breadcrumbs";

export default function MacamMacamFungsi() {
  return (
    <>
      <Breadcrumbs chapter="Apa itu fungsi?" title="Macam-macam fungsi" />
      <h4 className="text-lg font-semibold text-green-400 mb-2">Apa itu fungsi?</h4>
      <h2 className="text-3xl font-semibold mb-2 text-white">Macam-macam Fungsi</h2>
      <p>Terdapat berbagai jenis fungsi, antara lain:</p>
      <ul className="list-disc ms-10 my-2">
        <li>
          <span className="text-white font-medium">Fungsi Linear: </span>Fungsi yang berbentuk <MathJax inline className="text-white">{"\\(f(x) = ax + b\\)"}</MathJax>, dengan grafik berupa garis lurus. Contoh: <MathJax inline className="text-white">{"\\(f(x) = 2x + 1\\)"}</MathJax>.
        </li>
        <li>
          <span className="text-white font-medium">Fungsi Kuadrat: </span>
          Fungsi berbentuk <MathJax inline className="text-white">{"\\(f(x) = ax^2 + bx + c\\)"}</MathJax>, dengan grafik berbentuk parabola. Contoh: <MathJax inline className="text-white">{"\\(f(x) = x^2 - 4x + 4\\)"}</MathJax>.
        </li>
        <li>
          <span className="text-white font-medium">Fungsi Kubik: </span>
          Fungsi berbentuk <MathJax inline className="text-white">{"\\(f(x) = ax^3 + bx + c\\)"}</MathJax>, dengan grafik mempunyai 2 titik ekstrem. Contoh: <MathJax inline className="text-white">{"\\(f(x) = x^3 - 3x + 2\\)"}</MathJax>.
        </li>
        <li>
          <span className="text-white font-medium">Fungsi Eksponensial: </span>
          Fungsi yang melibatkan eksponen variabel. Bentuk umum: <MathJax inline className="text-white">{"\\(f(x) = a^x\\)"}</MathJax>. Contoh: <MathJax inline className="text-white">{"\\(f(x) = 2^x\\)"}</MathJax>.
        </li>
        <li>
          <span className="text-white font-medium">Fungsi Logaritma: </span>
          Fungsi kebalikan dari eksponensial. Bentuk umum: <MathJax inline className="text-white">{"\\(f(x) = \\log_a(x)\\)"}</MathJax>. Contoh: <MathJax inline className="text-white">{"\\(f(x) = \\log_2(x)\\)"}</MathJax>.
        </li>
        <li>
          <span className="text-white font-medium">Fungsi Trigonometri: </span>
          Fungsi yang melibatkan sudut dalam trigonometri, seperti sinus, kosinus, dan tangen. Contoh: <MathJax inline className="text-white">{"\\(f(x) = \\sin(x)\\)"}</MathJax>.
        </li>
      </ul>
    </>
  );
}
