import Link from "next/link";
import Breadcrumbs from "./breadcrumbs";

export default function Learn() {
  return (
    <>
      <Breadcrumbs chapter="Pengantar" title="Pendahuluan" />
      <h4 className="text-lg font-semibold text-green-400 mb-2">Pengantar</h4>
      <h2 className="text-3xl font-semibold mb-2 text-white">Pendahuluan</h2>
      <div className="text-justify mb-8">
        <p className="mb-2">
          Matematika merupakan fondasi dari berbagai bidang ilmu, baik di sains, teknologi, ekonomi, maupun teknik. Salah satu cabang penting dalam matematika adalah fungsi, yang menjadi konsep dasar dalam memahami hubungan antara dua himpunan. Dalam kehidupan sehari-hari, fungsi sering digunakan untuk memodelkan berbagai fenomena seperti pergerakan benda, pertumbuhan populasi, hingga perubahan suhu.
        </p>
        <p className="mb-2">
          Fungsi kuadrat adalah salah satu bentuk fungsi yang memiliki peranan penting, terutama dalam analisis grafik, fisika, dan optimisasi. Fungsi kuadrat memiliki bentuk unik yang menghasilkan grafik berupa parabola. Pemahaman tentang fungsi kuadrat membantu kita dalam menyelesaikan berbagai masalah, seperti menentukan waktu maksimum/minimum dalam suatu peristiwa, memprediksi jalur gerak benda, dan lain-lain.
        </p>
        <p>
          Namun, sebelum mempelajari fungsi kuadrat secara mendalam, diperlukan pemahaman konsep-konsep dasar agar materi dapat dipahami dengan baik.</p>
      </div>
      <div className="flex justify-end">
        <Link href={"/learn/pengantar/prerequisit"}>
          <div>
            <p className="text-sm">Selanjutnya</p>
            <h3 className="text-base md:text-xl text-white font-medium">Prasyarat <span className="text-xl">&gt;</span></h3>
          </div>
        </Link>
      </div>
    </>
  )
}
