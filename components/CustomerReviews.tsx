import { Star, Quote, CheckCircle } from "lucide-react";

const reviews = [
  {
    name: "Priya Srivastava",
    city: "Lucknow, UP",
    product: "Aloe Vera Gel",
    rating: 5,
    text: "Mujhe Aarogya India ka Aloe Vera Gel bahut pasand aaya. 2 mahine use karne ke baad meri skin glow karne lagi aur dryness bilkul khatam ho gayi. 100% natural feel aata hai — sach mein results visible hain!",
    avatar: "https://lm25aarogyaindia.com/assets/websiteimages/Artboard%203.jpg",
    productImg: "https://lm25aarogyaindia.com/assets/websiteimages/Artboard%203.jpg",
    verified: true,
  },
  {
    name: "Ramesh Prajapat",
    city: "Jaipur, Rajasthan",
    product: "Shilajit 24K Gold",
    rating: 5,
    text: "Himalaya ka original shilajit — stamina aur energy level mein bahut farak dikha. Pehle bahut tired rehte the, ab subah fresh hote hain aur poore din active rehte hain. Best purchase of 2024!",
    avatar: "https://lm25aarogyaindia.com/assets/websiteimages/Artboard-1256.jpg",
    productImg: "https://lm25aarogyaindia.com/assets/websiteimages/Artboard-1256.jpg",
    verified: true,
  },
  {
    name: "Anita Devi",
    city: "Patna, Bihar",
    product: "Jamun Karela Juice",
    rating: 5,
    text: "Mere husband ke sugar level ko natural tarike se control karne ke liye ye juice bahut kaam aaya. 1 mahine mein hi fasting sugar normal range mein aa gaya. Taste bhi surprisingly accha hai!",
    avatar: "https://lm25aarogyaindia.com/assets/websiteimages/Artboard%204%20(1).jpg",
    productImg: "https://lm25aarogyaindia.com/assets/websiteimages/Artboard%204%20(1).jpg",
    verified: true,
  },
  {
    name: "Vikram Singh",
    city: "Dehradun, Uttarakhand",
    product: "Charcoal Face Wash",
    rating: 4,
    text: "Pimples aur blackheads ke liye ekdum perfect product. Ek week ke regular use se meri skin clear aur oil-free lagne lagi. Packaging bhi premium quality ki hai — paisa vasool!",
    avatar: "https://lm25aarogyaindia.com/assets/websiteimages/Artboard%202.jpg",
    productImg: "https://lm25aarogyaindia.com/assets/websiteimages/Artboard%202.jpg",
    verified: true,
  },
];

export default function CustomerReviews() {
  return (
    <section className="max-w-7xl mx-auto px-4 mb-12">
      <div className="flex items-end justify-between mb-5">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 tracking-tight">
            What our customers have to say
          </h2>
          <div className="h-0.5 w-10 rounded-full mt-2" style={{ background: "#1A6D3A" }} />
        </div>
        <a href="#" className="text-sm font-medium text-[#1A6D3A] hover:underline">
          View all
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {reviews.map((r, idx) => (
          <div
            key={idx}
            className="relative bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all p-4 border border-canvas-deep"
          >
            <Quote
              className="absolute top-3 right-3 w-7 h-7 opacity-10"
              style={{ color: "#1A6D3A" }}
            />

            <div className="relative mb-4 -mx-4 -mt-4">
              <div className="relative h-32 rounded-t-xl overflow-hidden"
                   style={{ background: "linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)" }}>
                <img
                  src={r.productImg}
                  alt={r.product}
                  className="absolute inset-0 w-full h-full object-contain p-3"
                />
              </div>
              <div className="absolute -bottom-5 left-4 w-12 h-12 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white">
                <img
                  src={r.avatar}
                  alt={r.name}
                  className="w-full h-full object-cover scale-125"
                  onError={(e) => {
                    const t = e.target as HTMLImageElement;
                    t.style.display = "none";
                    const p = t.parentElement!;
                    p.style.background = "#1A6D3A";
                    const span = document.createElement("span");
                    span.textContent = r.name.charAt(0);
                    span.style.color = "#fff";
                    span.style.fontWeight = "800";
                    span.style.display = "flex";
                    span.style.alignItems = "center";
                    span.style.justifyContent = "center";
                    span.style.width = "100%";
                    span.style.height = "100%";
                    span.style.fontSize = "18px";
                    p.appendChild(span);
                  }}
                />
              </div>
            </div>

            <div className="mt-7">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < r.rating
                          ? "fill-[#DAA520] text-[#DAA520]"
                          : "text-gray-200"
                      }`}
                    />
                  ))}
                </div>
                {r.verified && (
                  <div className="flex items-center gap-1 text-[10px] font-bold text-[#1A6D3A]">
                    <CheckCircle className="w-3 h-3" />
                    Verified
                  </div>
                )}
              </div>

              <h4 className="font-medium text-sm text-gray-800 mt-2">{r.name}</h4>
              <p className="text-[10px] text-text-light font-medium">{r.city}</p>
              <p
                className="text-[11px] font-bold mt-1 inline-block px-2 py-0.5 rounded-full"
                style={{ background: "#FFF8E1", color: "#8B6914" }}
              >
                🛒 {r.product}
              </p>

              <p className="text-xs text-text-body mt-3 leading-relaxed line-clamp-6">
                {r.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
