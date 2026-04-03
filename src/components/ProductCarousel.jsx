import { useState, useEffect } from "react";
import { ArrowRight, ArrowLeft } from "@boxicons/react";

export default function ProductCarousel({ products }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  // Auto‑slide (opsional)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products.length]);

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Wrapper slide */}
      <div className="relative overflow-hidden rounded-2xl shadow-xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {products.map((product, idx) => (
            <div key={idx} className="min-w-full">
              <div className="bg-shimbada-main p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 relative">
                {/* Gambar */}
                <div className="shrink-0 w-full md:w-80 h-64 md:h-80 rounded-xl overflow-hidden shadow-md">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Konten produk */}
                <div className="w-full md:flex-1 text-center md:text-left">
                  <span className="inline-block bg-shimbada-primary/40 text-shimbada-secondary/95 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {product.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-shimbada-secondary mb-2">
                    {product.name}
                  </h3>
                  <p className="text-shimbada-secondary/80 mb-4 max-w-md mx-auto md:mx-0">
                    {product.description ||
                      "Produk berkualitas dengan harga terbaik, siap melengkapi kebutuhan Anda."}
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                    <span className="text-2xl font-bold text-shimbada-primary text-shadow-sm">
                      {product.price}
                    </span>
                    <button className="btn btn-neutral bg-shimbada-secondary text-shimbada-main hover:opacity-90 transition-all duration-300 transform">Pesan Sekarang!</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tanda posisi (dots) */}
      <div className="flex justify-center mt-4 gap-2">
        {products.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2.5 h-2.5 rounded-full transition ${
              idx === currentIndex
                ? "bg-shimbada-secondary"
                : "bg-shimbada-primary/40 hover:bg-shimbada-primary/60"
            }`}
          />
        ))}
      </div>

      {/* Panah navigasi */}
      <button
        onClick={prevSlide}
        className="cursor-pointer active:scale-95 absolute top-1/2 left-4 -translate-y-1/2 bg-shimbada-secondary text-shimbada-primary opacity-75 p-2 rounded-full hover:opacity-100 transition"
        aria-label="Previous slide"
      >
        <ArrowLeft />
      </button>
      <button
        onClick={nextSlide}
        className="cursor-pointer active:scale-95 absolute top-1/2 right-4 -translate-y-1/2 bg-shimbada-secondary text-shimbada-primary opacity-75 p-2 rounded-full hover:opacity-100 transition"
        aria-label="Next slide"
      >
        <ArrowRight />
      </button>
    </div>
  );
}
