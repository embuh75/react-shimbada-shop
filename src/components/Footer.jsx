import { Facebook, Instagram, Twitter } from "@boxicons/react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-shimbada-secondary text-shimbada-main pt-12 pb-6">
      <div className="container mx-auto px-5">
        {/* Top Section: Company Info + Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
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
                className="text-shimbada-primary hover:text-shimbada-main transition"
                aria-label="Facebook"
              >
                <Facebook />
              </a>
              <a
                href="#"
                className="text-shimbada-primary hover:text-shimbada-main transition"
                aria-label="Instagram"
              >
                <Instagram />
              </a>
              <a
                href="#"
                className="text-shimbada-primary hover:text-shimbada-main transition"
                aria-label="Twitter"
              >
                <Twitter />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="container text-center md:text-left border-t-2 border-shimbada-primary pt-6 md:border-0 md:p-0">
            <h3 className="text-sm font-bold uppercase tracking-wider text-shimbada-primary mb-4">
              Perusahaan
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className=" hover:text-shimbada-primary transition">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-shimbada-primary transition">
                  Aksesoris
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-shimbada-primary transition">
                  Networking
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-shimbada-primary transition">
                  Mobile
                </a>
              </li>
            </ul>
          </div>

          {/* Layanan & Bantuan */}
          <div className="container text-center md:text-left border-t-2 border-shimbada-primary pt-6 md:border-0 md:p-0">
            <h3 className="text-sm font-bold uppercase tracking-wider text-shimbada-primary mb-4">
              Bantuan
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className=" hover:text-shimbada-primary transition">
                  Syarat & Ketentuan
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-shimbada-primary transition">
                  Kebijakan Privasi
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-shimbada-primary transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-shimbada-primary transition">
                  Bantuan & Layanan
                </a>
              </li>
            </ul>
          </div>

          {/* Bottom Divider */}
          <div className="border-t-2 border-shimbada-primary pt-6 md:border-0 md:p-0">
            {/* Newsletter / Email (opsional) */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
              <p className="text-sm text-center md:text-left">
                Dapatkan promo dan update produk terbaru.
              </p>
              <form className="flex w-full md:w-64">
                <input
                  type="email"
                  placeholder="Masukkan email Anda"
                  className="px-4 py-2 text-sm text-shimbada-secondary bg-shimbada-main rounded-l-lg focus:outline-none focus:ring-2 focus:ring-shimbada-primary w-full"
                />
                <button
                  type="submit"
                  className="bg-shimbada-primary hover:bg-shimbada-secondary text-shimbada-secondary hover:text-shimbada-primary px-4 py-2 rounded-r-lg text-sm transition"
                >
                  Daftar
                </button>
              </form>
            </div>

            {/* Copyright */}
            <div className="text-center">
              <p className="text-xs">
                © {currentYear}{" "}
                <span className="font-semibold text-shimbada-primary">KatalogKu</span>. All
                rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
