"use client";

import { Search, ShoppingCart, User, Heart, Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = ["Home", "Products", "Ayurvedic", "Skincare", "About", "Contact"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount] = useState(0);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Main bar */}
        <div className="flex items-center justify-between h-16 md:h-[68px] gap-4 md:gap-6">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 shrink-0 group">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
              style={{ background: "#1A6D3A" }}
            >
              <svg viewBox="0 0 40 40" className="w-5 h-5">
                <text x="6" y="27" fill="#DAA520" fontSize="20" fontWeight="bold" fontFamily="serif">
                  ॐ
                </text>
              </svg>
            </div>
            <div className="leading-none">
              <div
                className="text-base font-bold tracking-wide"
                style={{ color: "#1A6D3A" }}
              >
                ELAN VEDA
              </div>
              <div
                className="text-[9px] font-medium tracking-[0.18em] uppercase mt-0.5"
                style={{ color: "#DAA520" }}
              >
                Pure Ayurveda
              </div>
            </div>
          </a>

          {/* Search bar — center */}
          <div className="hidden md:flex flex-1 max-w-md relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full text-sm text-gray-700 placeholder-gray-400 border border-gray-200 rounded-md pl-4 pr-10 py-2.5 outline-none focus:border-[#1A6D3A] transition-colors bg-gray-50 focus:bg-white"
            />
            <button
              className="absolute right-0 top-0 h-full px-3.5 flex items-center justify-center rounded-r-md border border-l-0 border-gray-200 bg-[#1A6D3A] hover:bg-[#155a30] transition-colors"
              aria-label="Search"
            >
              <Search className="w-4 h-4 text-white" />
            </button>
          </div>

          {/* Icons — right */}
          <div className="flex items-center gap-1 md:gap-2 shrink-0">
            {/* Store locator */}
            <button
              className="hidden md:flex items-center justify-center w-9 h-9 rounded-full text-gray-500 hover:text-[#1A6D3A] hover:bg-gray-50 transition-colors"
              aria-label="Store locator"
            >
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
            </button>

            {/* Orders */}
            <button
              className="hidden md:flex items-center justify-center w-9 h-9 rounded-full text-gray-500 hover:text-[#1A6D3A] hover:bg-gray-50 transition-colors"
              aria-label="Orders"
            >
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path strokeLinecap="round" d="M7 8h10M7 12h10M7 16h6" />
              </svg>
            </button>

            {/* Account */}
            <button
              className="hidden md:flex items-center justify-center w-9 h-9 rounded-full text-gray-500 hover:text-[#1A6D3A] hover:bg-gray-50 transition-colors"
              aria-label="Account"
            >
              <User className="w-5 h-5" />
            </button>

            {/* Wishlist */}
            <button
              className="flex items-center justify-center w-9 h-9 rounded-full text-gray-500 hover:text-[#1A6D3A] hover:bg-gray-50 transition-colors"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" />
            </button>

            {/* Cart */}
            <button
              className="relative flex items-center justify-center w-9 h-9 rounded-full text-gray-500 hover:text-[#1A6D3A] hover:bg-gray-50 transition-colors"
              aria-label="Cart"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-[#C0392B] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden flex items-center justify-center w-9 h-9 rounded-full text-gray-500 hover:bg-gray-50 ml-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Nav links — below on desktop */}
        <nav className="hidden lg:flex items-center gap-7 pb-0 h-10 border-t border-gray-100">
          {navItems.map((item, i) => (
            <a
              key={item}
              href="#"
              className="text-[13px] font-medium transition-colors hover:text-[#1A6D3A] whitespace-nowrap"
              style={{ color: i === 0 ? "#1A6D3A" : "#374151" }}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 py-4">
          {/* Mobile search */}
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full text-sm text-gray-700 placeholder-gray-400 border border-gray-200 rounded-md pl-4 pr-10 py-2.5 outline-none focus:border-[#1A6D3A] bg-gray-50"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
          <nav className="flex flex-col">
            {navItems.map((item, i) => (
              <a
                key={item}
                href="#"
                className="py-2.5 px-1 text-sm font-medium border-b border-gray-50 transition-colors hover:text-[#1A6D3A]"
                style={{ color: i === 0 ? "#1A6D3A" : "#374151" }}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
