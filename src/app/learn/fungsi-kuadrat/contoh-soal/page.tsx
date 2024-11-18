import Breadcrumbs from "../../breadcrumbs";

export default function ContohSoal() {
  return (
    <>
      <Breadcrumbs chapter="Fungsi kuadrat" title="Contoh Soal" />
      <h4 className="text-lg font-semibold text-green-400 mb-2">Fungsi Kuadrat</h4>
      <h2 className="text-3xl font-semibold mb-2 text-white">Contoh soal dan penyelesaiannya</h2>
      <div className="mb-4">
        <p><span className="text-white font-medium">Contoh 1: </span>Menentukan Sumbu Simetri, Puncak, dan Diskriminan
          Diberikan fungsi kuadrat <span className="text-green-400 font-medium">f(x) = 2x^2 - 4x + 1.</span> Tentukan sumbu simetri, titik puncak, dan diskriminannya.</p>
        <ul className="list-disc ms-10 mb-4">
          <li>
            <p className="mb-2">Sumbu simetri:</p>
            <div className="mb-2 font-medium text-white border border-violet-700 shadow-white inline-block p-3 rounded">
              <span className="text-green-400">x</span> = -(-4)/2 * 2 = 4/4 = 1
            </div>
          </li>
          <li>
            <p className="mb-2">Koordinat titik puncak:</p>
            <div className="mb-2 font-medium text-white border border-violet-700 shadow-white inline-block p-3 rounded">
              <p><span className="text-green-400">f(1)</span> = 2(1)^2 - 4(1) + 1 = 2 - 4 + 1 = -1</p>
              <p className="font-light text-violet-400">jadi titik puncaknya adalah <span className="text-green-400 font-medium">(1, -1)</span></p>
            </div>
          </li>
          <li>
            <p className="mb-2">Diskriminan:</p>
            <div className="mb-2 font-medium text-white border border-violet-700 shadow-white inline-block p-3 rounded">
              <p><span className="text-green-400">Δ</span> = (-4)^2 - 4(2)(1) = 16 - 8 = 8</p>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <p><span className="text-white font-medium mb-2">Contoh 2: </span>Menyelesaikan dengan Rumus Kuadrat
          Selesaikan persamaan kuadrat <span className="text-green-400 font-medium">3x^2 - 6x + 2 = 0.</span></p>
        <p>Gunakan rumus kuadrat:</p>
        <div className="ps-5 text-white font-medium">
          <p>x = -(-6) +- √(-6)^2 - 4(3)(2)/2(3)</p>
          <p>x = 6 +- √(36 - 24)/6</p>
          <p>x = 6 +- √12/6</p>
          <p>x = 6 +- 2√3/6</p>
          <p>x = 1 +- √3/3</p>
        </div>
        <p>Jadi, akar-akarnya adalah <span className="text-white font-medium">x_1 = 1 + √3/3</span> dan <span className="text-white font-medium">x_2 = 1 - √3/3.</span></p>
      </div>
    </>
  )
}
