import Breadcrumbs from "../../breadcrumbs";

export default function Learn() {
  return (
    <>
      <Breadcrumbs chapter="Pengantar" title="Pre-requisites" />
      <h4 className="text-lg font-semibold text-green-400 mb-2">Pengantar</h4>
      <h2 className="text-3xl font-semibold mb-2 text-white">Pre-requisites</h2>
      <p>Sebelum mempelajari fungsi dan fungsi kuadrat, ada beberapa konsep dasar yang perlu dikuasai terlebih dahulu yaitu:</p>
      <ol className="list-decimal ms-10 my-2">
        <li>Konsep Dasar Matematika
          <ul className="list-disc ms-10 my-2">
            <li>Bilangan Real: Pemahaman tentang bilangan positif, negatif, nol, dan pecahan.</li>
            <li>Operasi Aljabar: Penjumlahan, pengurangan, perkalian, dan pembagian pada ekspresi aljabar.</li>
          </ul>
        </li>
        <li>Persamaan dan Pertidaksamaan
          <ul className="list-disc ms-10 my-2">
            <li>Menyelesaikan persamaan linear satu variabel.</li>
            <li>Menyelesaikan persamaan kuadrat sederhana menggunakan faktorisasi.</li>
            <li>Memahami konsep pertidaksamaan untuk membandingkan dua nilai.</li>
          </ul>
        </li>
        <li>Konsep Grafik
          <ul className="list-disc ms-10 my-2">
            <li>Koordinat Kartesius: Memahami cara menentukan titik di bidang x-y.</li>
            <li>Grafik Linear: Memahami bentuk garis lurus dan konsep gradien.</li>
          </ul>
        </li>
      </ol>

    </>
  )
}
