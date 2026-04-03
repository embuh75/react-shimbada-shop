export default function ProductCard({ product }) {
  return (
    <div
      key={product.id}
      className="bg-shimbada-main rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 left-3 bg-shimbada-secondary text-shimbada-primary text-xs font-semibold px-2 py-1 rounded-md">
          {product.category}
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-lg text-shimbada-primary text-shadow-xs mb-2 leading-tight">
          {product.name}
        </h3>
        <p className="text-shimbada-secondary text-sm font-medium">
          Produk berkualitas dengan harga terbaik, siap melengkapi kebutuhan
          Anda.
        </p>
        <div className="flex items-center justify-between mt-3">
          <span className="font-bold text-lg text-shimbada-secondary">
            {product.price}
          </span>
          {/* <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg text-sm shadow-sm hover:shadow-md transition">
            Detail
          </button> */}
          <button className="btn btn-neutral btn-md bg-shimbada-secondary text-shimbada-primary hover:opacity-90 transition-all duration-300 transform">
            Pesan Sekarang!
          </button>
        </div>
      </div>
    </div>
  );
}
