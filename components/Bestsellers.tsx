"use client";

import {
  Star,
  ShoppingCart,
  Mountain,
  Droplets,
  Dumbbell,
  HeartPulse,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Product = {
  badge: string;
  name: string;
  benefit: string;
  rating: string;
  reviews: string;
  price: number;
  mrp: number;
  save: string;
  icon: LucideIcon;
  tint: string;
};

const PRODUCTS: Product[] = [
  {
    badge: "BESTSELLER",
    name: "Himalayan Shilajit Resin - 20g",
    benefit: "Boosts strength, stamina & vitality",
    rating: "4.9",
    reviews: "1,240",
    price: 599,
    mrp: 799,
    save: "Save 25%",
    icon: Mountain,
    tint: "#FFF8E1",
  },
  {
    badge: "CLINICALLY TESTED",
    name: "Dia Free Juice - Karela Jamun 1L",
    benefit: "Helps control spikes & boosts energy",
    rating: "4.8",
    reviews: "986",
    price: 449,
    mrp: 599,
    save: "Save 25%",
    icon: Droplets,
    tint: "#E8F5E9",
  },
  {
    badge: "BESTSELLER",
    name: "Ayurvedic Testo Boost Capsules",
    benefit: "Supports muscle gain & gym recovery",
    rating: "4.7",
    reviews: "742",
    price: 699,
    mrp: 999,
    save: "Save 30%",
    icon: Dumbbell,
    tint: "#FFF3E0",
  },
  {
    badge: "CLINICALLY TESTED",
    name: "Arjuna Heart Care Juice - 1L",
    benefit: "Maintains healthy BP & cholesterol",
    rating: "4.8",
    reviews: "1,058",
    price: 499,
    mrp: 649,
    save: "Save 23%",
    icon: HeartPulse,
    tint: "#FFEBEE",
  },
];

export default function Bestsellers() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="font-heading text-[28px] font-bold text-ink">Our Bestsellers</h2>
          <p className="mt-1 text-[14px] text-muted">
            Loved by 2M+ consumers across India
          </p>
        </div>
        <button className="hidden text-[14px] font-bold text-brand underline decoration-accent underline-offset-4 hover:text-accent sm:block">
          View All Products
        </button>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
        {PRODUCTS.map((p) => {
          const Icon = p.icon;
          return (
            <article
              key={p.name}
              className="flex flex-col rounded-card border border-surface-border bg-surface p-4 shadow-card transition-shadow hover:shadow-card-hover"
            >
              <span className="text-[10px] font-bold tracking-wide text-badge-green-text">
                {p.badge}
              </span>

              <div
                className="mt-3 flex aspect-square items-center justify-center rounded-[12px] shadow-card"
                style={{ backgroundColor: p.tint }}
              >
                <Icon size={56} strokeWidth={1.6} className="text-brand" />
              </div>

              <h3 className="mt-3 text-[16px] font-semibold leading-[1.3] text-ink">
                {p.name}
              </h3>
              <p className="mt-1 text-[12px] text-muted">{p.benefit}</p>

              <div className="mt-2 flex items-center gap-1 text-[12px] font-semibold text-ink">
                <Star size={14} className="fill-accent text-accent" />
                {p.rating}
                <span className="font-normal text-muted">({p.reviews} Reviews)</span>
              </div>

              <div className="mt-2 flex flex-wrap items-center gap-2">
                <span className="text-[18px] font-bold text-ink">₹{p.price}</span>
                <span className="text-[14px] text-muted line-through">₹{p.mrp}</span>
                <span className="rounded-md bg-badge-red-bg px-1.5 py-0.5 text-[10px] font-bold text-badge-red-text">
                  {p.save}
                </span>
              </div>

              <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-[12px] border border-brand py-2.5 text-[13px] font-bold text-brand transition-colors hover:bg-brand hover:text-canvas">
                <ShoppingCart size={15} />
                ADD TO CART
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}
