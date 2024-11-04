import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-[rgba(128,21,174,1)] shadow z-30">
      <nav className="max-w-screen-lg h-full m-auto flex justify-between items-center">
        <h1 className="font-semibold text-xl">Logo</h1>
        <ul className="flex gap-4">
          <li><Link href={"/home"}>Home</Link></li>
          <li><Link href={"/learn"}>Learn</Link></li>
          <li><Link href={"/calculator"}>Calculator</Link></li>
          <li><Link href={"/quiz"}>Quiz</Link></li>
          <li><Link href={"/team"}>Team</Link></li>
        </ul>
        <div>
        </div>
      </nav>
    </header>
  );
}
