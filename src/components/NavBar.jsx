import { Link } from "react-router-dom";
import { Menu } from "@boxicons/react";
import { useState } from "react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Product", path: "/" },
  { name: "Contact", path: "/" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <nav className="container flex justify-between items-center md:px-10 bg-shimbada-main shadow-xl">
        {/* Logo */}
        <Link
          to="/"
          className="pl-2 py-3 flex gap-2 items-center group transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <img
            src="/icon/shimbada.png"
            alt="Shimbada logo"
            className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-slate-200 shadow-md object-cover"
          />
          <span className="text-sm md:text-xl font-bold text-shimbada-secondary group-hover:text-shimbada-primary">
            Shimbada Shop
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-lg font-semibold">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="transition-all duration-300 text-shimbada-secondary hover:text-shimbada-primary active:scale-95"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          aria-label="Toggle menu"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex md:hidden items-center justify-center pr-4 py-3"
        >
          <Menu className="cursor-pointer transition-all duration-300 active:scale-95 hover:text-primary" />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden mx-2 mt-2 overflow-hidden rounded-md border border-shimbada-primary/70 bg-main shadow-md transition-all duration-500 ${
          isOpen ? "max-h-60 opacity-100 py-2" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="py-3 transition-all duration-300 hover:text-shimbada-primary active:scale-95"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
