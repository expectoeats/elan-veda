"use client";

import { useEffect, useState } from "react";
import { Leaf, Search, Smartphone, User, ShoppingCart } from "lucide-react";

const KEYWORDS = ["'Gym'", "'Energy'", "'Blood Sugar'", "'Hormonal Health'"];

export default function Header() {
  const [keywordIndex, setKeywordIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setKeywordIndex((i) => (i + 1) % KEYWORDS.length),
      2200
    );
    return () => clearInterval(id);
  }, []);

  return (
    <header className="sticky top-0 z-50 h-[76px] border-b border-surface-border bg-canvas/80 backdrop-blur-[10px]">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-4 px-4 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand">
            <Leaf size={20} className="fill-accent text-accent" />
          </span>
          <span className="font-heading text-[22px] font-extrabold tracking-tight text-brand">
            VEDAPURE
          </span>
        </a>

        <div className="hidden flex-1 justify-center md:flex">
          <div className="flex h-[44px] w-full max-w-[420px] items-center gap-2.5 rounded-full border border-search-border bg-surface px-4 shadow-card">
            <Search size={17} className="shrink-0 text-muted" />
            <span className="truncate text-[13px] text-muted">
              Search for{" "}
              <span key={keywordIndex} className="font-semibold text-brand">
                {KEYWORDS[keywordIndex]}
              </span>
              ...
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 lg:gap-4">
          <button className="hidden items-center gap-1.5 rounded-lg border border-surface-border bg-surface px-3 py-2 text-[12px] font-semibold text-brand shadow-card transition-shadow hover:shadow-card-hover lg:flex">
            <Smartphone size={15} className="text-accent" />
            App Download
          </button>
          <button className="flex items-center gap-1.5 text-[13px] font-semibold text-ink hover:text-brand">
            <User size={19} />
            <span className="hidden sm:inline">Account</span>
          </button>
          <button className="relative flex items-center gap-1.5 text-[13px] font-semibold text-ink hover:text-brand">
            <ShoppingCart size={19} />
            <span className="hidden sm:inline">Cart</span>
            <span className="absolute -right-2 -top-2 flex h-[17px] w-[17px] items-center justify-center rounded-full bg-accent text-[10px] font-bold text-white">
              0
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
