interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  oldPrice?: number;
  rating?: number;
  badge?: string;
  badgeColor?: string;
}

export default function ProductCard({
  image,
  title,
  price,
  oldPrice,
  rating,
  badge,
  badgeColor = "#C0392B",
}: ProductCardProps) {
  const discount =
    oldPrice ? Math.round(((oldPrice - price) / oldPrice) * 100) : null;

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col overflow-hidden group">
      {/* Image */}
      <div className="relative overflow-hidden bg-gray-50">
        {badge && (
          <span
            className="absolute top-2 left-2 z-10 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow"
            style={{ background: badgeColor }}
          >
            {badge}
          </span>
        )}
        {discount && (
          <span className="absolute top-2 right-2 z-10 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
            -{discount}%
          </span>
        )}
        <img
          src={image}
          alt={title}
          className="w-full h-40 md:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://placehold.co/300x300/F0F7F2/1A6D3A?text=VedaPure";
          }}
        />
      </div>

      {/* Details */}
      <div className="p-3 flex flex-col gap-1 flex-1">
        <p className="text-xs md:text-sm font-semibold text-gray-800 leading-snug line-clamp-2">
          {title}
        </p>

        {rating && (
          <div className="flex items-center gap-1">
            <span className="text-yellow-400 text-xs">★</span>
            <span className="text-xs text-gray-500 font-medium">{rating}</span>
          </div>
        )}

        <div className="flex items-baseline gap-2 mt-auto pt-1">
          <span className="text-sm md:text-base font-semibold" style={{ color: "#1A6D3A" }}>
            ₹{price}
          </span>
          {oldPrice && (
            <span className="text-xs text-gray-400 line-through">₹{oldPrice}</span>
          )}
        </div>

        <button
          className="mt-2 w-full py-1.5 rounded-md text-white text-xs font-medium hover:opacity-90 transition-opacity"
          style={{ background: "#1A6D3A" }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
