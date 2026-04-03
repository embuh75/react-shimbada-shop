import { products } from "../data/products";
import ProductCarousel from "../components/ProductCarousel";
import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <div className="container min-h-screen">
      {/* Hero Section - Lebih elegan */}
      <section className="bg-shimbada-primary text-shimbada-secondary py-20">
        <div className="container mx-auto px-5 md:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Selamat Datang di Katalog Kami
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Temukan produk berkualitas dengan harga terbaik. Semua produk
            tersedia dalam satu katalog praktis dan mudah dicari.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button className="bg-shimbada-main text-shimbada-secondary font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Lihat Produk
            </button>
            <button className="border-2 border-shimbada-main text-shimbada-main font-semibold px-6 py-3 rounded-xl hover:bg-shimbada-main hover:text-shimbada-secondary transition-all duration-300">
              Cari Kategori
            </button>
          </div>
        </div>
      </section>

      <section className="container bg-shimbada-main py-12 md:py-24">
        <h2 className="text-2xl sm:text-4xl font-bold text-shimbada-secondary text-center font-sans text-shadow-md pb-6">
          Produk Unggulan
        </h2>
        <div className="container px-2">
          <ProductCarousel products={products} />
        </div>
      </section>

      {/* Section Kategori - Design card-pills lebih rapi */}
      {/* <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-5">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Kategori Produk
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Komputer", "Aksesoris", "Networking", "Perangkat Mobile"].map(
              (cat, i) => (
                <button
                  key={i}
                  className="bg-white text-gray-700 border border-gray-200 hover:border-blue-400 hover:bg-blue-50 font-medium px-5 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
                >
                  {cat}
                </button>
              ),
            )}
          </div>
        </div>
      </section> */}

      {/* Section Daftar Produk - Tampilan kartu lebih premium */}
      <section className=" bg-shimbada-main py-12 md:py-24">
        <div className="container mx-auto px-5">
          <h2 className="text-2xl sm:text-4xl font-bold text-shimbada-secondary my-12 md:my-24 text-center font-sans text-shadow-md">
            Daftar Produk
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
