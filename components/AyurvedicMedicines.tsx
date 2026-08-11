import ProductCard from "./ProductCard";

const products = [
  {
    image: "https://www.thehimalayanorganics.in/cdn/shop/files/HOShilajitGold60CapsFront.jpg?v=1733999171&width=1800",
    title: "Shilajit 24K Gold — Pure Himalayan",
    price: 1499,
    oldPrice: 2499,
    rating: 4.9,
    badge: "Premium",
    badgeColor: "#8B6914",
  },
  {
    image: "https://m.media-amazon.com/images/I/61W-BLo7QaL._AC_SX416_CB1169409_QL70_.jpg",
    title: "Apple Cider Vinegar — Mother",
    price: 449,
    oldPrice: 699,
    rating: 4.5,
    badge: "Fat Loss",
  },
  {
    image: "https://m.media-amazon.com/images/I/51feeVElqkL._SX679_.jpg",
    title: "Aarogyamulati — Multivitamin",
    price: 599,
    oldPrice: 999,
    rating: 4.6,
    badge: "Doctor's Choice",
    badgeColor: "#1A6D3A",
  },
  {
    image: "https://m.media-amazon.com/images/I/61z6N5wvWzL._AC_UL480_FMwebp_QL65_.jpg",
    title: "Shilajit 24K Gold Capsules",
    price: 1299,
    oldPrice: 1999,
    rating: 4.8,
    badge: "Top Rated",
    badgeColor: "#DAA520",
  },
];

export default function AyurvedicMedicines() {
  return (
    <section className="mb-12">
      <div className="relative overflow-hidden rounded-xl mx-4 md:mx-auto max-w-7xl mb-6 shadow-lg"
           style={{ background: "linear-gradient(135deg, #FFF8E1 0%, #FFECB3 50%, #FFE082 100%)" }}>
        <div className="grid md:grid-cols-3 gap-4 p-5 md:p-8 items-center">
          <div className="md:col-span-1 flex items-center justify-center">
            <div className="relative">
              <img
                src="https://www.thehimalayanorganics.in/cdn/shop/files/HOShilajitGold60CapsFront.jpg?v=1733999171&width=1800"
                alt="Chakra"
                className="w-28 h-28 md:w-36 md:h-36 object-contain drop-shadow-2xl"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://m.media-amazon.com/images/I/61z6N5wvWzL._AC_UL480_FMwebp_QL65_.jpg";
                }}
              />
            </div>
          </div>
          <div className="md:col-span-1 flex items-center justify-center">
            <img
              src="https://m.media-amazon.com/images/I/51feeVElqkL._SX679_.jpg"
              alt="Ayurvedic preparation"
              className="w-full h-40 md:h-48 object-cover rounded-lg shadow-inner"
              onError={(e) => {
                const t = e.target as HTMLImageElement;
                t.style.height = "auto";
                t.style.maxHeight = "200px";
                t.src =
                  "https://m.media-amazon.com/images/I/61W-BLo7QaL._AC_SX416_CB1169409_QL70_.jpg";
              }}
            />
          </div>
          <div className="md:col-span-1 text-right">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight" style={{ color: "#5C2A10" }}>
              सुखे
            </h2>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight" style={{ color: "#1A6D3A" }}>
              निरोगी
            </h2>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight" style={{ color: "#C0392B" }}>
              काया
            </h2>
            <p className="text-xs md:text-sm mt-3 font-medium text-[#6B3A1F] italic">
              Healthy · Happy · Disease-Free Body
            </p>
          </div>
        </div>

        <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full opacity-20" style={{ background: "#1A6D3A" }} />
        <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full opacity-20" style={{ background: "#C0392B" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between mb-5">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 tracking-tight">
              Ayurvedic Medicines
            </h2>
            <div className="h-0.5 w-10 rounded-full mt-2" style={{ background: "#1A6D3A" }} />
          </div>
          <a
            href="#"
            className="text-sm font-medium text-[#1A6D3A] hover:underline"
          >
            View all
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-5">
          {products.map((p) => (
            <ProductCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
