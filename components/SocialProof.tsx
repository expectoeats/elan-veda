"use client";

import { Play, BadgeCheck, Star, Newspaper } from "lucide-react";

type Testimonial = {
  name: string;
  city: string;
  quote: string;
  product: string;
  rating: number;
  tint: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Rajesh Kumar",
    city: "Jaipur",
    quote: "My HbA1c dropped from 8.2 to 6.9 in 4 months with Dia Free Juice.",
    product: "Dia Free Karela Jamun Juice",
    rating: 5,
    tint: "#E8F5E9",
  },
  {
    name: "Priya Sharma",
    city: "Mumbai",
    quote: "Energy levels through the roof. Shilajit resin is now part of my daily routine.",
    product: "Himalayan Shilajit Resin",
    rating: 5,
    tint: "#FFF8E1",
  },
  {
    name: "Amit Verma",
    city: "Delhi",
    quote: "Gym recovery improved massively in 6 weeks. Genuinely surprised it's Ayurvedic.",
    product: "Testo Boost Capsules",
    rating: 4,
    tint: "#FFF3E0",
  },
];

const MEDIA = ["Economic Times", "Vogue", "Forbes India", "Mint"];

export default function SocialProof() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
      <h2 className="font-heading text-[28px] font-bold text-ink">
        Real People, Real Stories
      </h2>
      <p className="mt-1 text-[14px] text-muted">2M+ Happy Consumers across India</p>

      <div className="mt-6 grid gap-5 md:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <article
            key={t.name}
            className="flex flex-col rounded-card border border-surface-border bg-surface p-5 shadow-card transition-shadow hover:shadow-card-hover"
          >
            <div
              className="relative flex h-[150px] items-center justify-center rounded-[12px]"
              style={{ backgroundColor: t.tint }}
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand shadow-cta">
                <Play size={22} className="ml-0.5 fill-canvas text-canvas" />
              </span>
              <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-surface px-2.5 py-1 text-[10px] font-bold text-badge-green-text shadow-card">
                <BadgeCheck size={12} className="fill-badge-green-bg" />
                VERIFIED BUYER
              </span>
            </div>

            <div className="mt-3 flex items-center gap-0.5">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={14} className="fill-accent text-accent" />
              ))}
            </div>
            <p className="mt-2 text-[14px] font-medium leading-relaxed text-ink">
              &ldquo;{t.quote}&rdquo;
            </p>
            <p className="mt-3 text-[12px] font-bold text-ink">
              {t.name}, {t.city}
            </p>
            <p className="text-[11px] text-muted">Purchased: {t.product}</p>
          </article>
        ))}
      </div>

      <div className="mt-8 rounded-card border border-surface-border bg-surface px-6 py-5 shadow-card">
        <p className="text-center text-[11px] font-bold tracking-widest text-muted">
          AS FEATURED IN
        </p>
        <div className="mt-3 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {MEDIA.map((m) => (
            <span
              key={m}
              className="flex items-center gap-2 font-heading text-[17px] font-extrabold tracking-tight text-muted"
            >
              <Newspaper size={16} className="text-accent" />
              {m}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
