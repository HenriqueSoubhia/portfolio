import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full flex justify-center bg-theme text-soft-white fixed top-0 z-50">
      <nav
        className="max-w-[1920px] mx-auto w-full h-16 flex justify-between items-center px-6 font-family-roboto"
        aria-label="Navegação principal"
      >
        <Link href="/" className="font-bold transition-colors text-3xl">
          ~ henrique*
        </Link>

        <ul className="flex gap-12 text-2xl">
          <li>
            <a href="#about" className="hover:underline">
              about
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:underline">
              projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
