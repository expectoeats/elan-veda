"use client";

import { useEffect, useState } from "react";

export default function ClientShell() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 480);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <button
        className={`back-to-top${showTop ? " visible" : ""}`}
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 4l6 6-1.5 1.5L10 7l-4.5 4.5L4 10l6-6z" fill="currentColor" />
        </svg>
      </button>
      <div className="toast-container" id="toast-container" />
    </>
  );
}
