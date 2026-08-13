import { Download, Gift, Sparkles } from "lucide-react";

export default function AppDownloadBanner() {
  return (
    <section className="mb-12 relative overflow-hidden">
      <div
        className="max-w-7xl mx-auto mx-4 md:mx-auto rounded-2xl shadow-2xl relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #FFFDE7 0%, #FFF9C4 40%, #FFE0B2 100%)",
        }}
      >
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
          <div
            className="absolute top-0 right-0 w-72 h-72 rounded-full"
            style={{ background: "#C0392B", filter: "blur(80px)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-60 h-60 rounded-full"
            style={{ background: "#1A6D3A", filter: "blur(80px)" }}
          />
        </div>

        <div className="grid md:grid-cols-5 gap-6 p-6 md:p-10 items-center relative z-10">
          <div className="md:col-span-2 relative h-64 md:h-80 flex items-end justify-center">
            <div className="absolute left-0 bottom-0 w-40 md:w-56 h-64 md:h-80 rounded-[1.75rem] border-[6px] border-[#1A1A1A] shadow-2xl overflow-hidden bg-gradient-to-b from-[#1A6D3A]/10 to-white">
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#1A1A1A] rounded-full z-20" />
              <div className="absolute inset-2 rounded-[1.5rem] overflow-hidden bg-white flex flex-col">
                <div className="bg-[#1A6D3A] text-white p-2">
                  <div className="text-[10px] font-medium text-center">ELAN VEDA APP</div>
                </div>
                <div className="flex-1 p-2 grid grid-cols-2 gap-2 overflow-hidden">
                  <img
                    src="https://www.pravek.com/cdn/shop/articles/Website_blog_-_Pravekliv.jpg?v=1786106076&width=720"
                    alt=""
                    className="w-full h-full object-cover rounded"
                  />
                  <img
                    src="https://www.pravek.com/cdn/shop/articles/ayurvedic_cough_syrup_for_dry_cough.jpg?v=1784895338&width=720"
                    alt=""
                    className="w-full h-full object-cover rounded"
                  />
                  <img
                    src="https://www.pravek.com/cdn/shop/articles/best_ayurvedic_chyawanprash_online_870b92ac-c57d-4001-b5e6-b072b05b0533.jpg?v=1784528320&width=720"
                    alt=""
                    className="w-full h-full object-cover rounded"
                  />
                  <img
                    src="https://www.pravek.com/cdn/shop/articles/best_ayurvedic_chyawanprash_online_870b92ac-c57d-4001-b5e6-b072b05b0533.jpg?v=1784528320&width=720"
                    alt=""
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <div className="bg-[#1A6D3A]/10 p-1.5 flex justify-around border-t">
                  {["🏠", "🛒", "❤️", "👤"].map((i, idx) => (
                    <span key={idx} className={`text-xs ${idx === 1 ? "text-[#C0392B]" : "text-[#1A6D3A]"}`}>
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div
              className="absolute right-0 md:right-6 bottom-6 w-24 h-24 md:w-32 md:h-32 rounded-full shadow-2xl overflow-hidden border-4 border-white hidden sm:block"
              style={{ background: "#FFF8E1" }}
            >
              <img
                src="https://maharishiayurvedaindia.com/cdn/shop/files/Dr._Priyanka_Jagota_8c915b88-672e-40bb-ae34-fafa32be3d3a.jpg?v=1781169246&width=300"
                alt="Doctor recommended"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const t = e.target as HTMLImageElement;
                  t.style.display = "none";
                  const p = t.parentElement!;
                  p.style.background = "#1A6D3A";
                  const div = document.createElement("div");
                  div.style.cssText =
                    "width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff;";
                  div.innerHTML =
                    '<div style="font-size:36px">👨‍⚕️</div><div style="font-size:9px;font-weight:800;text-align:center">DOCTOR<br/>RECOMMENDED</div>';
                  p.appendChild(div);
                }}
              />
            </div>
          </div>

          <div className="md:col-span-3 relative">
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 mb-4 shadow-md">
              <Sparkles className="w-4 h-4 text-[#DAA520]" />
              <span className="text-xs font-medium" style={{ color: "#1A6D3A" }}>
                Doctor Formulated · Trusted by Families
              </span>
            </div>

            <h2 className="font-semibold tracking-tight leading-snug">
              <span className="block text-2xl md:text-3xl text-[#008566]">
                Download Our App
              </span>
              <span className="block text-xl md:text-2xl text-[#008566]">
                for Exclusive Offers
              </span>
              <span className="block text-lg md:text-xl text-[#8B6914] mt-1">
                and Get
              </span>
            </h2>

            <div
              className="my-4 md:my-6 inline-block px-5 py-2 md:px-8 md:py-3 rounded-xl shadow-2xl rotate-[-2deg] hover:rotate-0 transition-transform"
              style={{ background: "#C0392B" }}
            >
              <div className="flex items-baseline gap-3 md:gap-5">
                <span className="text-4xl md:text-7xl font-black text-white leading-none tracking-tighter drop-shadow-lg">
                  20%
                </span>
                <span className="text-2xl md:text-5xl font-black text-[#FFE082] leading-none tracking-tighter drop-shadow-lg">
                  OFF
                </span>
              </div>
              <div className="text-white text-xs md:text-base font-bold mt-1 tracking-wide uppercase">
                On Your First Order 🎉
              </div>
            </div>

            <div className="flex flex-wrap gap-3 md:gap-4 items-center">
              <a
                href="#"
                className="flex items-center gap-2 bg-[#1A1A1A] text-white rounded-lg px-4 py-2.5 hover:scale-105 transition-transform shadow-lg"
              >
                <svg className="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <div className="leading-tight">
                  <div className="text-[9px] md:text-[10px] opacity-80 font-medium">Download on the</div>
                  <div className="text-sm md:text-base font-bold">App Store</div>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center gap-2 bg-[#1A1A1A] text-white rounded-lg px-4 py-2.5 hover:scale-105 transition-transform shadow-lg"
              >
                <svg className="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 24 24">
                  <path fill="#FFD700" d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92z"/>
                  <path fill="#FF3D00" d="M16.81 8.495l-3.017 3.018 3.017 3.017 3.521-2.026a1 1 0 000-1.982L16.81 8.495z"/>
                  <path fill="#4CAF50" d="M3.609 1.814l10.182 10.186 3.018-3.018L5.21 1.494a1 1 0 00-1.601.32z"/>
                  <path fill="#00BCD4" d="M16.81 14.53L13.792 12l-10.183 10.186a1 1 0 001.602.32L16.81 14.53z"/>
                </svg>
                <div className="leading-tight">
                  <div className="text-[9px] md:text-[10px] opacity-80 font-medium">GET IT ON</div>
                  <div className="text-sm md:text-base font-bold">Google Play</div>
                </div>
              </a>

              <div className="flex items-center gap-2 px-3 py-2 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-white">
                <Gift className="w-5 h-5 text-[#C0392B]" />
                <span className="text-xs font-bold text-text-body">
                  Use code: <span style={{ color: "#C0392B" }}>FIRST20</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-4 left-4 text-3xl md:text-4xl opacity-30 animate-bounce">
          <Download className="w-6 h-6 md:w-8 md:h-8" style={{ color: "#1A6D3A" }} />
        </div>
      </div>
    </section>
  );
}
