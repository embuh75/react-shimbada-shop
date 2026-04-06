import { Facebook, Instagram, Twitter, Whatsapp } from "@boxicons/react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-shimbada-secondary text-shimbada-main pt-12 pb-6">
      <div className="flex items-center justify-center">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3  gap-30 mb-10">
            {/* Brand */}
            <div className="container">
              <div className="flex items-center w-fit gap-2 mb-4 group cursor-pointer">
                <img
                  src="/icon/shimbada.png"
                  alt="logo"
                  className="w-8 h-8 rounded-full bg-shimbada-main object-center object-cover bg-no-repeat"
                />
                <span className="text-xl font-bold text-shimbada-primary group-hover:text-shimbada-main">
                  Shimbada Shop
                </span>
              </div>
              <p className="text-sm leading-relaxed mb-4 max-w-xs">
                Katalog produk lengkap untuk memudahkan pencarian dan pembelian
                barang kebutuhan Anda.
              </p>
              <div className="flex gap-2">
                <a
                  href="#"
                  className="text-blue-500 hover:text-shimbada-main transition"
                  aria-label="Facebook"
                >
                  <Facebook />
                </a>
                <a
                  href="#"
                  className="text-pink-800 hover:text-shimbada-main transition"
                  aria-label="Instagram"
                >
                  <Instagram />
                </a>
                <a
                  href="#"
                  className="text-sky-400 hover:text-shimbada-main transition"
                  aria-label="Twitter"
                >
                  <Twitter />
                </a>
              </div>
            </div>

            {/* Company Links */}
            <div className="container text-center md:text-left border-t-2 border-shimbada-primary pt-6 md:border-0 md:p-0">
              <h3 className="text-sm font-bold uppercase tracking-wider text-shimbada-primary mb-4">
                Tautan
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    to={"/"}
                    className=" hover:text-shimbada-primary transition"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/"}
                    className=" hover:text-shimbada-primary transition"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/"}
                    className=" hover:text-shimbada-primary transition"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/"}
                    className=" hover:text-shimbada-primary transition"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>

            {/* Layanan & Bantuan */}
            <div className="container text-center md:text-left border-t-2 border-shimbada-primary pt-6 md:border-0 md:p-0">
              <h3 className="text-sm font-bold uppercase tracking-wider text-shimbada-primary mb-4">
                Hubungi
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    to={"#"}
                    className=" hover:text-shimbada-primary transition"
                  >
                    <span className="flex gap-1"><Whatsapp className="text-green-600"/>+62 287263838</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={"#"}
                    className=" hover:text-shimbada-primary transition"
                  >
                    <span className="flex gap-1"><Whatsapp className="text-green-600"/>+62 287263838</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={"#"}
                    className=" hover:text-shimbada-primary transition"
                  >
                    <span className="flex gap-1"><Whatsapp className="text-green-600"/>+62 287263838</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-shimbada-primary border-t-2 pt-6 text-center">
            <span>
              © 2026{" "}
              <Link className="text-shimbada-primary hover:text-shimbada-primary/50 font-bold">
                Shimbada Shop
              </Link>
              . All Right Reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
