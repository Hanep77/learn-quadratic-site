import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="min-h-screen">
        {/* <Image src="/3.png" alt="matematika" width={500} height={500} className="h-screen w-full bg-cover absolute -z-30" /> */}
        <div className="absolute min-h-screen w-full bg-gradient-to-b from-[rgba(128,21,174,1)] to-[rgba(28,3,50,1)]">
          <div className="min-h-screen flex justify-center items-center">
            <div className="text-center max-w-screen-md">
              <h1 className="text-5xl font-bold mb-5">
                Welcome to Our Learning Platform
              </h1>
              <div className="max-w-[570px] m-auto">
                <p className="text-xl text-violet-400 font-light">Gabung Sekarang dan Rasakan Serunya Belajar Kalkulus
                  dengan Pendekatan Visual dan Mudah dipahami !!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen">

      </div>
    </>
  );
}
