"use client";
import { useState } from "react";

const experts = [
  {
    name: "Dr. Priyanka Jagota",
    title: "Maharishi Expert Vaidya",
    image:
      "https://maharishiayurvedaindia.com/cdn/shop/files/Dr._Priyanka_Jagota_8c915b88-672e-40bb-ae34-fafa32be3d3a.jpg?v=1781169246&width=300",
    bio: "Dr. Priyanka Jagota is an experienced Ayurvedic physician with over seven years of clinical practice. A graduate of Guru Ravidas University (2018), she also holds a certification in Advanced Gastronomy from Chandigarh. She specialises in managing fatty liver, digestive disorders, joint pain, chronic inflammation, and hormonal imbalances including thyroid, PCOS/PCOD, and menopausal concerns. Her approach focuses on root-cause healing through classical Ayurveda, dietary correction, and sustainable lifestyle changes.",
  },
  {
    name: "Dr. Anil Sharma",
    title: "Senior Ayurvedic Consultant",
    image:
      "https://maharishiayurvedaindia.com/cdn/shop/files/Dr._Priyanka_Jagota_8c915b88-672e-40bb-ae34-fafa32be3d3a.jpg?v=1781169246&width=300",
    bio: "Dr. Anil Sharma brings over 12 years of expertise in classical Ayurvedic treatments. Specialising in Panchakarma therapies and lifestyle disorders, he combines ancient wisdom with modern diagnostics to provide comprehensive and personalised wellness solutions.",
  },
  {
    name: "Dr. Sunita Verma",
    title: "Ayurvedic Skin & Hair Specialist",
    image:
      "https://maharishiayurvedaindia.com/cdn/shop/files/Dr._Priyanka_Jagota_8c915b88-672e-40bb-ae34-fafa32be3d3a.jpg?v=1781169246&width=300",
    bio: "Dr. Sunita Verma is a renowned Ayurvedic skin and hair care expert with 9 years of clinical experience. She blends herbal formulations with personalised diet plans to address conditions like acne, pigmentation, hair fall, and premature ageing from the root.",
  },
];

export default function AyurvedicExperts() {
  const [activeIdx, setActiveIdx] = useState(0);
  const expert = experts[activeIdx];

  return (
    <section
      className="relative py-12 overflow-hidden"
      style={{ background: "#F5F9F6" }}
    >
      {/* Subtle background tint */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(26,109,58,0.04) 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, rgba(218,165,32,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2
            className="text-2xl md:text-4xl font-semibold tracking-tight"
            style={{
              fontFamily: "'Poppins', system-ui, sans-serif",
              color: "#1A1A1A",
            }}
          >
            Our Team Of Ayurvedic Experts
          </h2>
        </div>

        {/* Main Card */}
        <div
          className="relative flex flex-col md:flex-row items-stretch rounded-2xl overflow-visible mx-auto"
          style={{ maxWidth: "920px" }}
        >
          {/* Left decorative leaf */}
          <img
            src="https://maharishiayurvedaindia.com/cdn/shop/t/146/assets/expert-left.webp?v=70515905051796236911777880795"
            alt="decorative leaf"
            className="hidden md:block absolute pointer-events-none select-none"
            style={{
              left: "-90px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "110px",
              opacity: 0.9,
            }}
          />

          {/* Right decorative spoon */}
          <img
            src="https://maharishiayurvedaindia.com/cdn/shop/t/146/assets/expert-right.webp?v=183443649766015788991777880796"
            alt="decorative spoon"
            className="hidden md:block absolute pointer-events-none select-none"
            style={{
              right: "-90px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "90px",
              opacity: 0.9,
            }}
          />

          {/* Doctor Photo Panel */}
          <div
            className="flex-shrink-0 flex items-end justify-center rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none overflow-hidden"
            style={{
              background: "#EDE8DC",
              width: "100%",
              maxWidth: "300px",
              minHeight: "320px",
            }}
          >
            <img
              src={expert.image}
              alt={expert.name}
              className="w-full object-cover object-top transition-all duration-500"
              style={{ maxHeight: "360px" }}
            />
          </div>

          {/* Doctor Info Panel */}
          <div
            className="flex-1 flex flex-col justify-center px-8 py-8 rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none"
            style={{ background: "#FFFFFF" }}
          >
            <h3
              className="text-xl md:text-2xl font-semibold mb-1 transition-all duration-300"
              style={{
                fontFamily: "'Poppins', system-ui, sans-serif",
                color: "#228B4A",
              }}
            >
              {expert.name}
            </h3>
            <p
              className="text-sm font-semibold mb-4"
              style={{ color: "#1A1A1A" }}
            >
              {expert.title}
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "#555555", fontFamily: "'Poppins', sans-serif" }}
            >
              {expert.bio}
            </p>
          </div>
        </div>

        {/* Dot Navigation */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {experts.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className="transition-all duration-300"
              aria-label={`Expert ${i + 1}`}
              style={{
                width: i === activeIdx ? "28px" : "10px",
                height: "10px",
                borderRadius: i === activeIdx ? "6px" : "50%",
                background: i === activeIdx ? "#B8860B" : "#C9C4BB",
                border: "none",
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
