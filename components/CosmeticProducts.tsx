import ProductCard from "./ProductCard";

const products = [
  {
    image: "https://lm25aarogyaindia.com/assets/websiteimages/Artboard%203.jpg",
    title: "Aloe Vera Foaming Face Wash with Built-in Brush",
    price: 349,
    oldPrice: 549,
    rating: 4.7,
    badge: "Bestseller",
  },
  {
    image: "https://lm25aarogyaindia.com/assets/websiteimages/Artboard%203.jpg",
    title: "Pure Aloe Vera Gel — Multipurpose Beauty",
    price: 229,
    oldPrice: 399,
    rating: 4.8,
    badge: "99% Pure",
    badgeColor: "#1A6D3A",
  },
  {
    image: "https://lm25aarogyaindia.com/assets/websiteimages/WhatsApp%20Image%202024-09-14%20at%2011.28.31%20AM.jpeg",
    title: "Neem Tulsi Pimple Clearing Face Wash",
    price: 299,
    oldPrice: 449,
    rating: 4.5,
    badge: "Anti-Acne",
    badgeColor: "#C0392B",
  },
  {
    image: "https://lm25aarogyaindia.com/assets/websiteimages/WhatsApp%20Image%202024-09-14%20at%2011.28.31%20AM.jpeg",
    title: "Haldi Chandan Brightening Face Cream SPF 15",
    price: 379,
    oldPrice: 599,
    rating: 4.6,
    badge: "SPF 15",
    badgeColor: "#8B6914",
  },
];

export default function CosmeticProducts() {
  return (
    <section className="max-w-7xl mx-auto px-4 mb-12">
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
    </section>
  );
}
