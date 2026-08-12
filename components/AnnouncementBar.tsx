"use client";

import { Zap, MapPin, ChevronDown } from "lucide-react";

export default function AnnouncementBar() {
  return (
    <div className="h-[38px] bg-brand text-canvas text-[12px] font-semibold">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 lg:px-8">
        <p className="flex items-center gap-1.5 truncate">
          <Zap size={13} className="shrink-0 fill-accent text-accent" />
          <span className="truncate">
            Free Delivery on orders above ₹499 | Get extra 10% OFF on Prepaid Orders
          </span>
        </p>
        <button className="hidden items-center gap-1.5 sm:flex hover:text-accent-light transition-colors">
          <MapPin size={13} className="shrink-0" />
          <span>
            Deliver to: <strong>110001, Delhi</strong>
          </span>
          <span className="underline decoration-accent underline-offset-2">Change</span>
          <ChevronDown size={12} />
        </button>
      </div>
    </div>
  );
}
