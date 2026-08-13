const categories = [
  {
    label: "Cold Pressed Oil",
    image:
      "https://www.pravek.com/cdn/shop/files/Pravek_Naturals.png?v=1773134192&width=250",
  },
  {
    label: "Ayurvedic Capsules",
    image:
      "https://www.pravek.com/cdn/shop/files/4._Herbal_Capsules.png?v=1740043447&width=250",
  },
  {
    label: "Medicated Oils",
    image:
      "https://www.pravek.com/cdn/shop/files/1._Oils.png?v=1740043353&width=250",
  },
  {
    label: "Herbal Tea",
    image:
      "https://www.pravek.com/cdn/shop/files/Pravek-T_e97b2303-1149-49e6-a11c-d9d503c2d231.png?v=1752743029&width=250",
  },
  {
    label: "Syrups",
    image:
      "https://www.pravek.com/cdn/shop/files/2._Syrups.png?v=1740043386&width=250",
  },
  {
    label: "Churna",
    image:
      "https://www.pravek.com/cdn/shop/files/6._Churna.png?v=1740043675&width=250",
  },
  {
    label: "Tablets",
    image:
      "https://www.pravek.com/cdn/shop/files/3._Tablets.png?v=1740043661&width=250",
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

        {/* Grid — 4 on mobile, 7 on desktop */}
        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-7 gap-x-3 gap-y-7 md:gap-y-10 justify-items-center">
          {categories.map((cat) => (
            <a
              key={cat.label}
              href="#"
              className="flex flex-col items-center gap-3 group"
            >
              {/* Circle image */}
              <div
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-gray-100 shadow-sm group-hover:border-[#1A6D3A] group-hover:shadow-md transition-all duration-300 bg-[#F5F9F6] flex items-center justify-center"
              >
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="w-full h-full object-contain p-1 group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://placehold.co/200x200/E8F5E9/1A6D3A?text=" +
                      encodeURIComponent(cat.label[0]);
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
