import {
  Shield,
  Leaf,
  Scissors,
  HeartPulse,
  GlassWater,
  Sparkles,
  Activity,
  Thermometer,
  BookOpen,
  Soup,
  Salad,
  Droplets,
  LucideIcon,
} from "lucide-react";

const categories: { label: string; icon: LucideIcon; color: string }[] = [
  { label: "Immunity Booster", icon: Shield, color: "#1A6D3A" },
  { label: "Pure Herbs", icon: Leaf, color: "#2E7D32" },
  { label: "Hair Care", icon: Scissors, color: "#8B6914" },
  { label: "Remedies", icon: HeartPulse, color: "#C0392B" },
  { label: "Herbal Juices", icon: GlassWater, color: "#1A6D3A" },
  { label: "Health & Wellness", icon: Sparkles, color: "#DAA520" },
  { label: "Diabetes", icon: Activity, color: "#1A4D8F" },
  { label: "Cough & Cold", icon: Thermometer, color: "#C0392B" },
  { label: "Classical Range", icon: BookOpen, color: "#8B6914" },
  { label: "Chyawanprash", icon: Soup, color: "#5C2A10" },
  { label: "Digestion", icon: Salad, color: "#2E7D32" },
  { label: "Honey", icon: Droplets, color: "#DAA520" },
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
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <a
                key={cat.label}
                href="#"
                className="flex flex-col items-center gap-3 group"
              >
                <div
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center border-2 border-gray-100 shadow-sm group-hover:border-[#1A6D3A] group-hover:shadow-md group-hover:scale-105 transition-all duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg, #F1F8F3 0%, #E3F0E6 100%)",
                  }}
                >
                  <Icon
                    className="w-7 h-7 md:w-9 md:h-9"
                    style={{ color: cat.color }}
                    strokeWidth={1.5}
                  />
                </div>

                <span className="text-center text-xs md:text-sm text-gray-600 group-hover:text-[#1A6D3A] font-medium transition-colors leading-tight">
                  {cat.label}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
