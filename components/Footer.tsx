"use client";

import {
  Leaf,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  CreditCard,
  Wallet,
  Banknote,
  Truck,
} from "lucide-react";

const COLUMNS: { title: string; links: string[] }[] = [
  {
    title: "Shop Categories",
    links: [
      "Sugar Management",
      "Gym & Fitness",
      "Energy & Stamina",
      "Heart Health",
      "Liver Health",
      "Skin & Hair Care",
      "Women's Health",
    ],
  },
  {
    title: "Science & Quality",
    links: [
      "Our Ingredients",
      "Clinical Studies",
      "Lab Test Reports",
      "Sourcing Story",
      "Academy of Ayurveda",
    ],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Press & Media", "Store Locator", "Blog"],
  },
  {
    title: "Help & FAQs",
    links: [
      "Track Your Order",
      "Shipping & Returns",
      "Free Doctor Consultation",
      "Contact Support",
      "FAQs",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-brand text-canvas">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-canvas/10">
                <Leaf size={20} className="fill-accent text-accent" />
              </span>
              <span className="font-heading text-[22px] font-extrabold tracking-tight">
                VEDAPURE
              </span>
            </a>
            <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-canvas/70">
              Modern Ayurveda for real results. Scientifically tested formulations
              trusted by 2M+ consumers across India.
            </p>
            <div className="mt-5 flex gap-3">
              {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-canvas/10 transition-colors hover:bg-accent hover:text-brand"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="font-heading text-[13px] font-bold tracking-wide text-accent">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[13px] text-canvas/75 transition-colors hover:text-accent"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-canvas/15 pt-6 sm:flex-row">
          <p className="text-[12px] text-canvas/60">
            © {new Date().getFullYear()} VedaPure Wellness Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold text-canvas/75">
            <span className="flex items-center gap-1.5 rounded-md bg-canvas/10 px-2.5 py-1.5">
              <Wallet size={13} className="text-accent" /> UPI
            </span>
            <span className="flex items-center gap-1.5 rounded-md bg-canvas/10 px-2.5 py-1.5">
              <CreditCard size={13} className="text-accent" /> Visa
            </span>
            <span className="flex items-center gap-1.5 rounded-md bg-canvas/10 px-2.5 py-1.5">
              <Banknote size={13} className="text-accent" /> Mastercard
            </span>
            <span className="flex items-center gap-1.5 rounded-md bg-canvas/10 px-2.5 py-1.5">
              <Truck size={13} className="text-accent" /> COD Available
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
