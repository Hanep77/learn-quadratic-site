"use client";

import Breadcrumbs from "../breadcrumbs";
import { MathJax } from "better-react-mathjax";

export default function Fungsi() {
  return (
    <>
      <Breadcrumbs chapter="Apa itu fungsi?" title="Pengertian" />
      <h4 className="text-lg font-semibold text-green-400 mb-2">Apa itu fungsi?</h4>
      <h2 className="text-3xl font-semibold mb-2 text-white">Pengertian</h2>
      <p className="mb-2">
        Fungsi adalah sebuah relasi atau aturan yang menghubungkan setiap elemen dari suatu himpunan (disebut domain) dengan tepat satu elemen dari himpunan lain (disebut kodomain). Fungsi sering digunakan untuk memodelkan hubungan antara dua besaran atau variabel.
      </p>
      <p className="mb-2">Fungsi biasanya dinyatakan sebagai:</p>
      <div className="mb-2 font-medium text-white border border-violet-700 shadow-white inline-block p-3 rounded">
        <MathJax>{"\\(f: A \\to B\\)"}</MathJax>
      </div>
      <p className="mb-4">
        Ini berarti bahwa fungsi <span className="text-green-400 font-medium">f</span> menghubungkan elemen-elemen dari himpunan <span className="text-white font-medium">A</span> (domain) ke elemen-elemen di himpunan <span className="text-white font-medium">B</span> (kodomain).
      </p>
      <div className="mb-4">
        <h3 className="text-xl font-medium text-white mb-2">Notasi Fungsi</h3>
        <p>Fungsi biasanya ditulis sebagai <MathJax inline className="text-white">{"\\(f(x)\\)"}</MathJax>, di mana:</p>
        <ul className="list-disc ms-10 my-2">
          <li><span className="text-white font-medium">f</span> adalah nama fungsi</li>
          <li><span className="text-white font-medium">x</span> adalah variabel input (atau argumen fungsi)</li>
          <li><MathJax inline className="text-white">{"\\(f(x)\\)"}</MathJax> adalah hasil fungsi atau output dari fungsi untuk input <MathJax inline className="text-white">{"\\(x\\)"}</MathJax></li>
        </ul>
        <p>Contoh:</p>
        <div className="ps-5">
          <MathJax inline className="text-white">{"\\(f(x) = 2x + 3\\)"}</MathJax>
          <p>
            Ini adalah fungsi linier yang menghubungkan setiap nilai <MathJax inline className="text-white">{"\\(x\\)"}</MathJax> ke hasil <MathJax inline className="text-white">{"\\(2x + 3\\)"}</MathJax>. Jika kita masukkan nilai <MathJax inline className="text-white">{"\\(x = 2\\)"}</MathJax>, maka hasilnya adalah:
          </p>
          <MathJax inline className="text-white">{"\\(f(2) = 2(2) + 3 = 4 + 3 = 7\\)"}</MathJax>
          <p>Jadi, <MathJax inline className="text-white">{"\\(f(2) = 7\\)"}</MathJax>.</p>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2 text-white">Komponen Fungsi</h3>
        <ul className="list-disc ms-10 my-2">
          <li>
            <span className="text-white font-medium">Domain:</span> Himpunan semua nilai input (nilai <MathJax inline className="text-white">{"\\(x\\)"}</MathJax>) yang dapat dimasukkan ke dalam fungsi. Contoh, jika <MathJax inline className="text-white">{"\\(f(x) = \\sqrt{x}\\)"}</MathJax>, domainnya hanya untuk <MathJax inline className="text-white">{"\\(x \\geq 0\\)"}</MathJax> karena kita tidak dapat mengambil akar kuadrat dari bilangan negatif.
          </li>
          <li>
            <span className="text-white font-medium">Kodomain:</span> Himpunan semua nilai hasil yang mungkin dari fungsi. Kodomain sering kali mencakup lebih banyak nilai daripada hasil aktual dari fungsi.
          </li>
          <li>
            <span className="text-white font-medium">Range (Daerah hasil):</span> Himpunan dari semua nilai output yang dihasilkan oleh fungsi. Range adalah bagian dari kodomain yang benar-benar dicapai oleh fungsi.
          </li>
        </ul>
      </div>
    </>
  );
}

