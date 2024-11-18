import Breadcrumbs from "../breadcrumbs";

export default function FungsiKuadrat() {
  return (
    <>
      <Breadcrumbs chapter="Fungsi kuadrat" title="Pengertian" />
      <h4 className="text-lg font-semibold text-green-400 mb-2">Fungsi Kuadrat</h4>
      <h2 className="text-3xl font-semibold mb-2 text-white">Pengertian</h2>
      <p className="mb-2">Fungsi kuadrat adalah fungsi polinomial dengan pangkat tertinggi dari variabelnya adalah dua. Bentuk umum dari fungsi kuadrat adalah:</p>
      <div className="mb-2 font-medium text-white border border-violet-700 shadow-white inline-block p-3 rounded">
        <span className="text-green-400">f(x)</span> = ax^2 + bx + c
      </div>
      <p className="mb-2">di mana:</p>
      <ul className="list-disc ms-10 mb-4">
        <li>f adalah nama fungsi</li>
        <li>x adalah variabel input (atau argumen fungsi)</li>
        <li>f(x) adalah hasil fungsi atau output dari fungsi untuk input x</li>
      </ul>
      <div className="mb-4">
        <h3 className="text-xl font-medium text-white mb-2">Bagian-bagian Fungsi Kuadrat</h3>
        <ul className="list-disc ms-10 my-2">
          <li><span className="text-white font-medium">Koefisien a: </span>Koefisien dari x^2, yang menentukan lebar dan arah parabola. Jika a &gt; 0, parabola terbuka ke atas, dan jika a &lt; 0, parabola terbuka ke bawah.</li>
          <li><span className="text-white font-medium">Koefisien b: </span>Koefisien dari x, yang mempengaruhi posisi sumbu simetri parabola.</li>
          <li><span className="text-white font-medium">Konstanta c: </span>Menentukan titik potong dengan sumbu y (y-intercept).</li>
        </ul>
      </div>
    </>
  )
}
