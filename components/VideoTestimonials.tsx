import { Play } from "lucide-react";
import { productImages, pickProductImage } from "@/lib/productImages";

const videos = [
  {
    title: "Pure Shilajit — Doctor's Review",
    subtitle: "Dr. Priya Sharma | Ayurveda Expert",
    thumbnail: productImages.shilajitGold,
    overlay: "linear-gradient(135deg, #008566 0%, #1A6D3A 100%)",
  },
  {
    title: "Amla Juice Benefits — Hindi",
    subtitle: "Customer Results — 3 Months",
    thumbnail: pickProductImage("Amla Juice Benefits"),
    overlay: "linear-gradient(135deg, #8B4513 0%, #C0392B 100%)",
  },
  {
    title: "Piles Care — Hemorrhoids Kit",
    subtitle: "Patient Testimonial — 100% Relief",
    thumbnail: pickProductImage("Piles Care Kit"),
    overlay: "linear-gradient(135deg, #5C2A10 0%, #A0322C 100%)",
  },
];

export default function VideoTestimonials() {
  return (
    <section className="max-w-7xl mx-auto px-4 mb-12">
      <div className="flex items-end justify-between mb-5">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 tracking-tight">
            Know More
          </h2>
          <div className="h-0.5 w-10 rounded-full mt-2" style={{ background: "#C0392B" }} />
        </div>
        <a href="#" className="text-sm font-medium text-[#1A6D3A] hover:underline">
          View all videos
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
        {videos.map((v) => (
          <a
            key={v.title}
            href="#"
            className="group relative rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all aspect-video cursor-pointer border border-white/50"
          >
            <img
              src={v.thumbnail}
              alt={v.title}
              className="absolute inset-0 w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-700"
            />
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.75) 100%), ${v.overlay}`,
                opacity: 0.75,
              }}
            />

            <div className="absolute inset-0 p-4 md:p-5 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <div className="bg-[#C0392B] text-white text-[10px] font-medium px-2 py-1 rounded tracking-wide">
                  ★ Featured
                </div>
                <div className="text-white/80 text-[10px] font-bold bg-black/40 backdrop-blur-sm px-2 py-1 rounded">
                  2:34 min
                </div>
              </div>

              <div>
                <div className="flex items-center justify-center mb-3">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white shadow-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div
                      className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center"
                      style={{ background: "#C0392B" }}
                    >
                      <Play className="w-5 h-5 md:w-6 md:h-6 text-white fill-white ml-1" />
                    </div>
                  </div>
                </div>
                <h4 className="text-white font-semibold text-sm md:text-base leading-tight mb-1">
                  {v.title}
                </h4>
                <p className="text-white/70 text-xs font-normal">{v.subtitle}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
