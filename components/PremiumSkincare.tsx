import ProductCard from "./ProductCard";

const products = [
  {
    image: "https://lm25aarogyaindia.com/assets/websiteimages/Artboard%203.jpg",
    title: "Aloe Vera Foaming Face Wash",
    price: 249,
    oldPrice: 399,
    rating: 4.6,
    badge: "Hydrating",
    badgeColor: "#1A6D3A",
  },
  {
    image: "https://lm25aarogyaindia.com/assets/websiteimages/Artboard%203.jpg",
    title: "Aloe Vera Gel — 99% Pure",
    price: 199,
    oldPrice: 349,
    rating: 4.8,
    badge: "Bestseller",
  },
  {
    image: "https://lm25aarogyaindia.com/assets/websiteimages/WhatsApp%20Image%202024-09-14%20at%2011.28.31%20AM.jpeg",
    title: "Neem Tulsi Face Wash",
    price: 279,
    oldPrice: 449,
    rating: 4.5,
    badge: "Anti-Acne",
    badgeColor: "#8B6914",
  },
  {
    image: "https://lm25aarogyaindia.com/assets/websiteimages/WhatsApp%20Image%202024-09-14%20at%2011.28.31%20AM.jpeg",
    title: "Haldi Chandan Face Pack",
    price: 329,
    oldPrice: 499,
    rating: 4.7,
    badge: "Glow Boost",
    badgeColor: "#DAA520",
  },
];

export default function PremiumSkincare() {
  return (
    <section className="mb-12">
      <div
        className="relative overflow-hidden rounded-xl mx-4 md:mx-auto max-w-7xl mb-6 shadow-lg"
        style={{
          background:
            "linear-gradient(135deg, #FFFDE7 0%, #FFF9C4 40%, #FFF59D 100%)",
        }}
      >
        <div className="grid md:grid-cols-5 gap-4 p-5 md:p-8 items-center">
          <div className="md:col-span-2 relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-sm mb-4 border border-white">
              <span className="text-base">✨</span>
              <span className="font-medium text-xs tracking-wider" style={{ color: "#1A6D3A" }}>
                PREMIUM SKINCARE FOR RADIANT SKIN
              </span>
            </div>
            <h2
              className="text-2xl md:text-3xl font-semibold leading-snug"
              style={{ color: "#8B6914" }}
            >
              Discover glowing skin with our natural
            </h2>
            <p
              className="text-base mt-2 font-normal leading-snug"
              style={{ color: "#5C2A10" }}
            >
              nourishing skincare collection.
            </p>
            <p
              className="text-sm mt-2 font-medium"
              style={{ color: "#1A6D3A" }}
            >
              Hydrate, rejuvenate.
            </p>
            <button
              className="mt-5 px-5 py-2.5 rounded-md text-white text-sm font-medium hover:opacity-90 transition-opacity"
              style={{ background: "#1A6D3A" }}
            >
              Explore Collection
            </button>
          </div>

          <div className="md:col-span-3 relative h-56 md:h-72">
            <h2
              className="absolute -top-1 right-4 font-black text-6xl md:text-9xl tracking-tighter italic opacity-10 select-none pointer-events-none leading-none"
              style={{ color: "#8B6914" }}
            >
              GLOW UP
            </h2>
            <h2
              className="absolute top-0 right-4 font-black text-6xl md:text-9xl tracking-tighter italic leading-none select-none pointer-events-none"
              style={{ WebkitTextStroke: "2px #DAA520", color: "transparent" }}
            >
              GLOW UP
            </h2>

            <div className="absolute inset-0 grid grid-cols-3 gap-2 md:gap-3 p-2 md:p-4 items-end">
              {[
                "https://lm25aarogyaindia.com/assets/websiteimages/Artboard%203.jpg",
                "https://lm25aarogyaindia.com/assets/websiteimages/Artboard%202.jpg",
                "https://lm25aarogyaindia.com/assets/websiteimages/WhatsApp%20Image%202024-09-14%20at%2011.28.31%20AM.jpeg",
              ].map((src, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl shadow-lg flex items-end justify-center p-2 aspect-[3/4] border border-[#DAA520]/30"
                  style={{ transform: `translateY(${i === 1 ? "-12px" : i === 2 ? "-6px" : "0"})` }}
                >
                  <img
                    src={src}
                    alt={`Product ${i + 1}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
          <div className="absolute top-4 left-4 text-3xl">🌿</div>
          <div className="absolute bottom-4 left-1/4 text-2xl">🌾</div>
          <div className="absolute top-8 right-1/3 text-2xl opacity-60">🍃</div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between mb-5">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 tracking-tight">
              Cosmetic Products
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
