"use client";

import { GraduationCap, Leaf, HeartHandshake } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Pillar = {
  number: string;
  title: string;
  body: string;
  icon: LucideIcon;
};

const PILLARS: Pillar[] = [
  {
    number: "01",
    title: "FORMULATED BY EXPERTS",
    body: "PhDs & Ayurvedacharyas with 50+ years of combined experience craft every single formulation.",
    icon: GraduationCap,
  },
  {
    number: "02",
    title: "100% PURE INGREDIENTS",
    body: "Himalayan Shilajit, Thar Desert Aloe Vera, Andaman Noni - sourced from where they grow best.",
    icon: Leaf,
  },
  {
    number: "03",
    title: "HOLISTIC CARE",
    body: "Free diet plans, doctor consultation, and lifestyle guidance with every purchase.",
    icon: HeartHandshake,
  },
];

export default function TrustSection() {
  return (
    <section className="bg-brand py-14">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="font-heading text-[28px] font-bold text-canvas">
          The VedaPure Standard
        </h2>
        <p className="mt-1 text-[14px] text-canvas/70">
          Why 2M+ Indians trust our scientific process
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {PILLARS.map(({ number, title, body, icon: Icon }) => (
            <article
              key={number}
              className="rounded-card border border-canvas/15 bg-brand-light p-6"
            >
              <div className="flex items-center justify-between">
                <span className="font-heading text-[13px] font-bold tracking-widest text-accent">
                  {number} / {title}
                </span>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-canvas/10">
                  <Icon size={22} className="text-accent" />
                </span>
              </div>
              <p className="mt-4 text-[14px] leading-relaxed text-canvas/85">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
