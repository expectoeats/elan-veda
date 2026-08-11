import ProductCard from "./ProductCard";
import { pickProductImage } from "@/lib/productImages";

const products = [
  {
    image: pickProductImage("Charcoal Face Wash"),
    title: "Charcoal Face Wash",
    price: 299,
    oldPrice: 499,
    rating: 4.6,
    badge: "Best Seller",
  },
  {
    image: pickProductImage("Charcoal Face Scrub"),
    title: "Charcoal Face Scrub",
    price: 349,
    oldPrice: 549,
    rating: 4.4,
    badge: "New",
    badgeColor: "#1A6D3A",
  },
  {
    image: pickProductImage("Rose Water Face Mist"),
    title: "Rose Water Face Mist",
    price: 199,
    oldPrice: 349,
    rating: 4.7,
  },
  {
    image: pickProductImage("Onion Shampoo"),
    title: "Onion Shampoo",
    price: 399,
    oldPrice: 599,
    rating: 4.3,
    badge: "Trending",
    badgeColor: "#8B6914",
  },
];

export default function PopularProducts() {
  return (
    <section className="max-w-7xl mx-auto px-4 mb-12">
      <div className="flex items-end justify-between mb-5">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 tracking-tight">
            Popular Products
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
