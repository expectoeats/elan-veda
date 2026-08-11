const categories = [
  {
    label: "Immunity Booster",
    image: "https://images.unsplash.com/photo-1576671081837-49000212a370?w=200&h=200&fit=crop&crop=center",
  },
  {
    label: "Pure Herbs",
    image: "https://images.unsplash.com/photo-1611911813383-67769b37a149?w=200&h=200&fit=crop&crop=center",
  },
  {
    label: "Hair Care",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=200&h=200&fit=crop&crop=center",
  },
  {
    label: "Remedies",
    image: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=200&h=200&fit=crop&crop=center",
  },
  {
    label: "Herbal Juices",
    image: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=200&h=200&fit=crop&crop=center",
  },
  {
    label: "Health & Wellness",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=200&h=200&fit=crop&crop=center",
  },
  {
    label: "Diabetes",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=200&h=200&fit=crop&crop=center",
  },
  {
    label: "Cough & Cold",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=200&h=200&fit=crop&crop=center",
  },
  {
    label: "Classical Range",
    image: "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?w=200&h=200&fit=crop&crop=center",
  },
  {
    label: "Chyawanprash",
    image: "https://lm25aarogyaindia.com/assets/websiteimages/Artboard-1256.jpg",
  },
  {
    label: "Digestion",
    image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=200&h=200&fit=crop&crop=center",
  },
  {
    label: "Honey",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=200&h=200&fit=crop&crop=center",
  },
];

export default function CategoryCards() {
  return (
    <section className="w-full bg-white py-10 md:py-14">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-center text-xl md:text-2xl font-semibold text-gray-800 mb-8 md:mb-10 tracking-tight">
          Shop By Collections
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-6 gap-x-4 gap-y-7 md:gap-y-10">
          {categories.map((cat) => (
            <a
              key={cat.label}
              href="#"
              className="flex flex-col items-center gap-3 group"
            >
              {/* Circle image */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-gray-100 shadow-sm group-hover:border-[#1A6D3A] group-hover:shadow-md transition-all duration-300">
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-400"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://placehold.co/200x200/E8F5E9/1A6D3A?text=" + encodeURIComponent(cat.label[0]);
                  }}
                />
              </div>

              {/* Label */}
              <span className="text-center text-xs md:text-sm text-gray-600 group-hover:text-[#1A6D3A] font-medium transition-colors leading-tight">
                {cat.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
