import Breadcrumbs from "../../breadcrumbs";

export default function MacamMacamFungsi() {
  return (
    <>
      <Breadcrumbs chapter="Apa itu fungsi?" title="Macam-macam fungsi" />
      <h4 className="text-lg font-semibold text-green-400 mb-2">Apa itu fungsi?</h4>
      <h2 className="text-3xl font-semibold mb-2 text-white">Macam-macam Fungsi</h2>
      <p>Terdapat berbagai jenis fungsi, antara lain:</p>
      <ul className="list-disc ms-10 my-2">
        <li><span className="text-white font-medium">Fungsi Linear: </span>Fungsi yang berbentuk f(x) = ax + b, dengan grafik berupa garis lurus. Contoh: f(x) = 2x + 1.</li>
        <li><span className="text-white font-medium">Fungsi Kuadrat: </span>Fungsi berbentuk f(x) = ax^2 + bx + c, dengan grafik berbentuk parabola. Contoh: f(x) = x^2 - 4x + 4.</li>
        <li><span className="text-white font-medium">Fungsi Kubik: </span>Fungsi berbentuk f(x) = ax^3 + bx + c, dengan grafik mempunyai 2 titik extreme. Contoh: f(x) = x^3 - 3x + 2.</li>
        <li><span className="text-white font-medium">Fungsi Eksponensial: </span>Fungsi yang melibatkan eksponen variabel. Bentuk umum: f(x) = a^x. Contoh: f(x) = 2^x.</li>
        <li><span className="text-white font-medium">Fungsi Logaritma: </span>Fungsi kebalikan dari eksponensial. Bentuk umum: f(x) = log(a)(x). Contoh: f(x) = log2(x).</li>
        <li><span className="text-white font-medium">Fungsi Trigonometri: </span>Fungsi yang melibatkan sudut dalam trigonometri, seperti sinus, kosinus, dan tangen. Contoh: f(x) = sin(x).</li>
      </ul>
    </>
  )
}
