import Image from "next/image";

export default function Team() {
  return (
    <div className="min-h-screen bg-white">
      <div className="min-h-screen sm:min-h-[50vh] sm:h-[60vh]" style={{ backgroundImage: "url(/protruding-squares.svg)" }}>
        <div className="max-w-screen-lg m-auto pt-56 pb-8 flex flex-col items-center sm:items-stretch sm:flex-row justify-center gap-44 sm:gap-8">
          <div className="bg-violet-900 p-1 rounded w-72 sm:w-60 ">
            <div className="bg-slate-300 h-52 sm:h-36 relative flex justify-center rounded-t">
              <Image src={"/yudis.png"} alt="yudis" width={700} height={700} className="absolute -top-[128px] sm:-top-[87px] w-72 sm:w-48" />
            </div>
            <div className="p-2 text-center">
              <h5 className="text-lg font-medium">Yudis Sutisna</h5>
              <p className="text-sm">Developer</p>
              <p className="italic text-violet-300">&quot;Rahasia menjadi pintar adalah the secret of being smart&quot;</p>
            </div>
          </div>
          <div className="bg-violet-900 p-1 rounded w-72 sm:w-60">
            <div className="bg-slate-300 h-52 sm:h-36 relative flex justify-center rounded-t">
              <Image src={"/adi.png"} alt="adi" width={700} height={700} className="absolute -top-[165px] sm:-top-[112px] w-72 sm:w-48" />
            </div>
            <div className="p-2 text-center">
              <h5 className="text-lg font-medium">Adi M. Yasir</h5>
              <p className="text-sm">Developer &amp; Penyusun Materi</p>
              <p className="italic text-violet-300">&quot;Bekerja dengan hati, dan kadang-kadang dengan Google.&quot;</p>
            </div>
          </div>
          <div className="bg-violet-900 p-1 rounded w-72 sm:w-60">
            <div className="bg-slate-300 h-52 sm:h-36 relative flex justify-center rounded-t">
              <Image src={"/aziz.png"} alt="yudis" width={700} height={700} className="absolute -top-[160px] sm:-top-[94px] w-[272px] sm:w-44" />
            </div>
            <div className="py-2 text-center">
              <h5 className="text-lg font-medium">Abdul Aziz</h5>
              <p className="text-sm">UI/UX Designer</p>
              <p className="italic text-violet-300">&quot;Keberhasilan bukan soal seberapa cepat melangkah, melainkan seberapa konsisten kamu melangkah.&quot;</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
