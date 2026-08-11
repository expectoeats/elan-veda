import { Star, Leaf, Award, Shield, Globe, Heart, Users } from "lucide-react";

const trustPoints = [
  {
    icon: Leaf,
    title: "Rooted In Rich Heritage",
    desc: "5000+ years of Ayurvedic wisdom combined with modern science in every formulation we craft.",
    position: "top-left",
  },
  {
    icon: Award,
    title: "AYUSH Certified Practices",
    desc: "All products manufactured in strict compliance with AYUSH guidelines and protocols.",
    position: "top-right",
  },
  {
    icon: Shield,
    title: "100% Pure & Potent",
    desc: "Guaranteed authenticity — sourced directly from farms with zero adulteration at any step.",
    position: "bottom-left",
  },
  {
    icon: Users,
    title: "1 Lakh+ Happy Customers",
    desc: "Trusted by thousands of families across India for their everyday wellness and skincare needs.",
    position: "bottom-right",
  },
];

export default function GlobalPresence() {
  return (
    <section className="mb-12 py-10 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top, #E8F5E9 0%, transparent 60%), radial-gradient(ellipse at bottom, #FFF8E1 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-3xl font-semibold text-gray-800 tracking-tight">
            Join the Movement Towards{" "}
            <span style={{ color: "#1A6D3A" }}>Natural Healing</span> with Elan Veda
          </h2>
          <p className="text-sm text-gray-500 mt-2 max-w-2xl mx-auto">
            Your Trusted Companion on the Path to Holistic Health and Vitality
          </p>

          <div className="mt-4 inline-flex items-center gap-2 bg-[#DAA520]/10 border border-[#DAA520]/30 rounded-full px-4 py-1.5">
            <Star className="w-4 h-4 fill-[#DAA520] text-[#DAA520]" />
            <span className="text-xs font-medium" style={{ color: "#8B6914" }}>
              Excellence Awarded · Globally Recognized
            </span>
          </div>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 items-center min-h-[320px] md:min-h-[400px]">
          <div className="md:col-span-1 space-y-4 order-2 md:order-1">
            {trustPoints
              .filter((p) => p.position.includes("left"))
              .map((point) => {
                const Icon = point.icon;
                return (
                  <div
                    key={point.title}
                    className="bg-white rounded-xl p-4 shadow-card border border-[#1A6D3A]/10 hover:shadow-card-hover transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                        style={{ background: "#1A6D3A" }}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-right md:text-left">
                        <h4 className="font-medium text-sm text-gray-800 mb-1">{point.title}</h4>
                        <p className="text-xs text-text-muted leading-relaxed">{point.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>

          <div className="md:col-span-1 order-1 md:order-2 flex items-center justify-center relative">
            <div className="relative w-56 h-56 md:w-72 md:h-72">
              <div
                className="absolute inset-0 rounded-full animate-pulse"
                style={{
                  background:
                    "radial-gradient(circle, rgba(218,165,32,0.25) 0%, transparent 70%)",
                }}
              />
              <div
                className="absolute inset-4 rounded-full animate-pulse"
                style={{
                  background:
                    "radial-gradient(circle, rgba(26,109,58,0.15) 0%, transparent 70%)",
                  animationDelay: "1s",
                }}
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="absolute w-14 h-14 rounded-full shadow-lg flex items-center justify-center bg-white border-4 border-[#DAA520]"
                  style={{ top: "-10px", left: "50%", transform: "translateX(-50%)" }}
                >
                  <Star className="w-6 h-6 fill-[#DAA520] text-[#DAA520]" />
                </div>
                <div
                  className="absolute w-12 h-12 rounded-full shadow-lg flex items-center justify-center bg-white border-4 border-[#DAA520]"
                  style={{ top: "15%", right: "-10px" }}
                >
                  <Star className="w-5 h-5 fill-[#DAA520] text-[#DAA520]" />
                </div>
                <div
                  className="absolute w-12 h-12 rounded-full shadow-lg flex items-center justify-center bg-white border-4 border-[#DAA520]"
                  style={{ top: "55%", right: "0px" }}
                >
                  <Star className="w-5 h-5 fill-[#DAA520] text-[#DAA520]" />
                </div>
                <div
                  className="absolute w-12 h-12 rounded-full shadow-lg flex items-center justify-center bg-white border-4 border-[#DAA520]"
                  style={{ top: "55%", left: "0px" }}
                >
                  <Star className="w-5 h-5 fill-[#DAA520] text-[#DAA520]" />
                </div>
                <div
                  className="absolute w-12 h-12 rounded-full shadow-lg flex items-center justify-center bg-white border-4 border-[#DAA520]"
                  style={{ top: "15%", left: "-10px" }}
                >
                  <Star className="w-5 h-5 fill-[#DAA520] text-[#DAA520]" />
                </div>

                <img
                  src="https://lm25aarogyaindia.com/static/media/Globe.webp"
                  alt="Global Presence"
                  className="relative z-10 w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-2xl"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://lm25aarogyaindia.com/assets/websiteimages/Amla-banner-design.jpg";
                    (e.target as HTMLImageElement).className =
                      "relative z-10 w-full h-full object-cover rounded-full border-4 border-[#DAA520] shadow-2xl";
                  }}
                />

                <div
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 md:w-40 h-6 md:h-8 rounded-[50%] shadow-inner z-0"
                  style={{
                    background:
                      "linear-gradient(180deg, #8B6914 0%, #DAA520 50%, #F5DFA0 100%)",
                  }}
                />
              </div>
            </div>
          </div>

          <div className="md:col-span-1 space-y-4 order-3">
            {trustPoints
              .filter((p) => p.position.includes("right"))
              .map((point) => {
                const Icon = point.icon;
                return (
                  <div
                    key={point.title}
                    className="bg-white rounded-xl p-4 shadow-card border border-[#1A6D3A]/10 hover:shadow-card-hover transition-all"
                  >
                    <div className="flex items-start gap-3 md:flex-row-reverse">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                        style={{ background: "#1A6D3A" }}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="md:text-right">
                        <h4 className="font-medium text-sm text-gray-800 mb-1">{point.title}</h4>
                        <p className="text-xs text-text-muted leading-relaxed">{point.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="text-center mt-10">
          <p className="text-base font-semibold text-[#1A6D3A]">
            Certified Products
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mt-5">
            {[
              {
                label: "FSSAI",
                color: "#1A6D3A",
                img: "https://lm25aarogyaindia.com/static/media/5.png",
              },
              {
                label: "AYUSH",
                color: "#C0392B",
                img: "https://lm25aarogyaindia.com/static/media/2.png",
              },
              {
                label: "GMP",
                color: "#8B6914",
                img: "https://lm25aarogyaindia.com/static/media/5.png",
              },
              {
                label: "ISO 9001",
                color: "#1A4D8F",
                img: "https://lm25aarogyaindia.com/static/media/5.png",
              },
              {
                label: "100% Natural",
                color: "#2E7D32",
                img: "https://lm25aarogyaindia.com/static/media/2.png",
              },
            ].map((c) => (
              <div key={c.label} className="text-center group">
                <div
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 flex items-center justify-center mx-auto mb-2 bg-white shadow-card group-hover:scale-110 transition-all"
                  style={{ borderColor: c.color }}
                >
                  <img
                    src={c.img}
                    alt={c.label}
                    className="w-10 h-10 md:w-12 md:h-12 object-contain"
                    onError={(e) => {
                      const t = e.target as HTMLImageElement;
                      t.style.display = "none";
                      const parent = t.parentElement!;
                      const span = document.createElement("span");
                      span.style.fontWeight = "800";
                      span.style.fontSize = "10px";
                      span.style.color = c.color;
                      span.textContent = c.label;
                      parent.appendChild(span);
                    }}
                  />
                </div>
                <p
                  className="text-xs font-medium"
                  style={{ color: c.color }}
                >
                  {c.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
