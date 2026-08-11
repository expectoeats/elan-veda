"use client";

import { useState, useEffect, useCallback } from "react";

const slides = [
  {
    image: "https://www.patanjaliayurved.net/assets/home_slider/1785144020healthandwellnessbannernew1900x600.webp",
    alt: "Health & Wellness",
  },
  {
    image: "https://www.baidyanathayurved.com/cdn/shop/files/Desktop-copy-2.jpg?v=1780385196&width=1920",
    alt: "Ayurvedic Products",
  },
];

export default function HeroBanner() {
  const [active, setActive] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (idx: number) => {
      if (isTransitioning || idx === active) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setActive(idx);
        setIsTransitioning(false);
      }, 400);
    },
    [active, isTransitioning]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((active + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [active, goTo]);

  return (
    <section className="relative w-full overflow-hidden bg-gray-100" style={{ aspectRatio: "1900/600" }}>
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-500"
          style={{ opacity: i === active ? 1 : 0, zIndex: i === active ? 1 : 0 }}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover object-center"
            draggable={false}
          />
        </div>
      ))}

      {/* Prev / Next arrows */}
      <button
        onClick={() => goTo((active - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center shadow hover:bg-white transition-colors"
        aria-label="Previous slide"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M11 4L6 9l5 5" stroke="#1A6D3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        onClick={() => goTo((active + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center shadow hover:bg-white transition-colors"
        aria-label="Next slide"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M7 4l5 5-5 5" stroke="#1A6D3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === active ? 24 : 8,
              height: 8,
              background: i === active ? "#1A6D3A" : "rgba(255,255,255,0.7)",
            }}
          />
        ))}
      </div>
    </section>
  );
}
