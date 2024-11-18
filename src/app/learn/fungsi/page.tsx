import Breadcrumbs from "../breadcrumbs";

export default function Fungsi() {
  return (
    <>
      <Breadcrumbs chapter="Apa itu fungsi?" title="Pengertian" />
      <h4 className="text-lg font-semibold text-green-400 mb-2">Apa itu fungsi?</h4>
      <h2 className="text-3xl font-semibold mb-2 text-white">Pengertian</h2>
      <p className="mb-2">Fungsi adalah sebuah relasi atau aturan yang menghubungkan setiap elemen dari suatu himpunan (disebut domain) dengan tepat satu elemen dari himpunan lain (disebut kodomain). Fungsi sering digunakan untuk memodelkan hubungan antara dua besaran atau variabel.</p>
      <p className="mb-2">Fungsi biasanya dinyatakan sebagai:</p>
      <div className="mb-2 font-medium text-white border border-violet-700 shadow-white inline-block p-3 rounded">
        <span className="text-green-400">f:</span> A -&gt; B
      </div>
      <p className="mb-4">Ini berarti bahwa fungsi <span className="text-green-400 font-medium">f</span> menghubungkan elemen-elemen dari himpunan <span className="text-white font-medium">A</span> (domain) ke elemen-elemen di himpunan <span className="text-white font-medium">B</span> (kodomain).</p>
      <div className="mb-4">
        <h3 className="text-xl font-medium text-white mb-2">Notasi Fungsi</h3>
        <p>Fungsi biasanya ditulis sebagai f(x), di mana:</p>
        <ul className="list-disc ms-10 my-2">
          <li>f adalah nama fungsi</li>
          <li>x adalah variabel input (atau argumen fungsi)</li>
          <li>f(x) adalah hasil fungsi atau output dari fungsi untuk input x</li>
        </ul>
        <p>contoh:</p>
        <div className="ps-5">
          <p>f(x) = 2x + 3</p>
          <p>Ini adalah fungsi linier yang menghubungkan setiap nilai x ke hasil 2x + 3. Jika kita masukkan nilai x = 2, maka hasilnya adalah:</p>
          <p>f(2) = 2(2) + 3 = 4 + 3 = 7</p>
          <p>Jadi, f(2) = 7.</p>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2 text-white">Komponen Fungsi</h3>
        <ul className="list-disc ms-10 my-2">
          <li><span className="text-white font-medium">Domain:</span> Himpunan semua nilai input (nilai x) yang dapat dimasukkan ke dalam fungsi. Contoh, jika f(x) = √x, domainnya hanya untuk x &gt;= 0 karena kita tidak dapat mengambil akar kuadrat dari bilangan negatif.</li>
          <li><span className="text-white font-medium">Kodomain:</span> Himpunan semua nilai hasil yang mungkin dari fungsi. Kodomain sering kali mencakup lebih banyak nilai daripada hasil aktual dari fungsi.</li>
          <li><span className="text-white font-medium">Range (Daerah hasil):</span> Himpunan dari semua nilai output yang dihasilkan oleh fungsi. Range adalah bagian dari kodomain yang benar-benar dicapai oleh fungsi.</li>
        </ul>
      </div>
    </>
  )
}
