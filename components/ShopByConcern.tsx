"use client";

import {
  Droplets,
  Dumbbell,
  BatteryCharging,
  HeartPulse,
  Activity,
  ShoppingBasket,
  Sparkles,
  Flower2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Concern = {
  label: string;
  icon: LucideIcon;
  bg: string;
  fg: string;
};

const CONCERNS: Concern[] = [
  { label: "Sugar Management", icon: Droplets, bg: "#E8F5E9", fg: "#128807" },
  { label: "Gym & Fitness", icon: Dumbbell, bg: "#FFF3E0", fg: "#B26A00" },
  { label: "Energy & Stamina", icon: BatteryCharging, bg: "#FFF8E1", fg: "#D48C11" },
  { label: "Heart Health", icon: HeartPulse, bg: "#FFEBEE", fg: "#D32F2F" },
  { label: "Liver Health", icon: Activity, bg: "#E0F2F1", fg: "#00695C" },
  { label: "Daily Ayurveda & Grocery", icon: ShoppingBasket, bg: "#F1F8E9", fg: "#558B2F" },
  { label: "Skin & Hair Care", icon: Sparkles, bg: "#FCE4EC", fg: "#AD1457" },
  { label: "Women's Health", icon: Flower2, bg: "#F3E5F5", fg: "#7B1FA2" },
];

export default function ShopByConcern() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
      <h2 className="font-heading text-[28px] font-bold text-ink">
        Select Your Health Concern
      </h2>
      <p className="mt-1 text-[14px] text-muted">
        Targeted Ayurvedic formulations backed by modern science
      </p>

      <div className="no-scrollbar mt-6 grid grid-flow-col gap-4 overflow-x-auto pb-2 lg:grid-cols-8 lg:grid-flow-row">
        {CONCERNS.map(({ label, icon: Icon, bg, fg }) => (
          <button
            key={label}
            className="group flex w-[104px] shrink-0 flex-col items-center gap-2.5 lg:w-auto"
          >
            <span
              className="flex h-[84px] w-[84px] items-center justify-center rounded-full border-2 border-transparent shadow-card transition-all group-hover:border-brand group-hover:shadow-card-hover"
              style={{ backgroundColor: bg }}
            >
              <Icon size={32} strokeWidth={2.2} style={{ color: fg }} />
            </span>
            <span className="text-center text-[12px] font-semibold leading-tight text-ink group-hover:text-brand">
              {label}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
