import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const FacebookIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className || "w-4 h-4"}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);
const InstagramIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className || "w-4 h-4"}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);
const TwitterIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className || "w-4 h-4"}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);
const YoutubeIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className || "w-4 h-4"}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export default function Footer() {
  const paymentIcons = [
    {
      name: "GPay",
      url: "https://www.logo.wine/a/logo/Google_Pay/Google_Pay-Icon-Logo.wine.svg",
      alt: "Google Pay",
    },
    {
      name: "PhonePe",
      url: "https://www.logo.wine/a/logo/PhonePe/PhonePe-Icon-Logo.wine.svg",
      alt: "PhonePe",
    },
    {
      name: "Paytm",
      url: "https://www.logo.wine/a/logo/Paytm/Paytm-Icon-Logo.wine.svg",
      alt: "Paytm",
    },
    {
      name: "Visa",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/200px-Visa_Inc._logo.svg.png",
      alt: "Visa",
    },
    {
      name: "Mastercard",
      url: "https://www.logo.wine/a/logo/Mastercard/Mastercard-Icon-Logo.wine.svg",
      alt: "Mastercard",
    },
    {
      name: "RuPay",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/RuPay-Logo.svg/200px-RuPay-Logo.svg.png",
      alt: "RuPay",
    },
    {
      name: "Maestro",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Maestro_2016.svg/200px-Maestro_2016.svg.png",
      alt: "Maestro",
    },
    {
      name: "Amazon Pay",
      url: "https://www.logo.wine/a/logo/Amazon_Pay/Amazon_Pay-Logo.wine.svg",
      alt: "Amazon Pay",
    },
  ];

  return (
    <footer className="bg-white border-t-4 border-[#1A6D3A]/20 shadow-[0_-4px_24px_rgba(0,0,0,0.04)]">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-sm text-gray-800 mb-4 pb-2 border-b border-gray-100">
              Download the App for Free
            </h3>
            <p className="text-xs text-text-muted mb-4 leading-relaxed">
              Get exclusive app-only deals, faster checkout, and track your orders seamlessly.
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              <a
                href="#"
                className="flex items-center gap-2 bg-[#1A1A1A] text-white rounded-lg px-3 py-2 hover:scale-105 transition-transform"
              >
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                <div className="leading-tight">
                  <div className="text-[8px] opacity-80">Download on the</div>
                  <div className="text-xs font-bold">App Store</div>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 bg-[#1A1A1A] text-white rounded-lg px-3 py-2 hover:scale-105 transition-transform"
              >
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                  <path fill="#FFD700" d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92z" />
                  <path fill="#FF3D00" d="M16.81 8.495l-3.017 3.018 3.017 3.017 3.521-2.026a1 1 0 000-1.982L16.81 8.495z" />
                  <path fill="#4CAF50" d="M3.609 1.814l10.182 10.186 3.018-3.018L5.21 1.494a1 1 0 00-1.601.32z" />
                  <path fill="#00BCD4" d="M16.81 14.53L13.792 12l-10.183 10.186a1 1 0 001.602.32L16.81 14.53z" />
                </svg>
                <div className="leading-tight">
                  <div className="text-[8px] opacity-80">GET IT ON</div>
                  <div className="text-xs font-bold">Google Play</div>
                </div>
              </a>
            </div>

            <div>
              <h4 className="text-xs font-bold text-text-dark mb-2">Follow us</h4>
              <div className="flex gap-2">
                {[
                  { icon: FacebookIcon, color: "#1877F2", label: "Facebook" },
                  { icon: InstagramIcon, color: "#E4405F", label: "Instagram" },
                  { icon: TwitterIcon, color: "#1DA1F2", label: "Twitter" },
                  { icon: YoutubeIcon, color: "#FF0000", label: "YouTube" },
                ].map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href="#"
                      className="w-8 h-8 rounded-full border border-canvas-deep flex items-center justify-center hover:scale-110 transition-all hover:shadow-md"
                      style={{ color: s.color }}
                      aria-label={s.label}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-full overflow-hidden border border-[#EEF3EE] bg-white shadow-sm shrink-0">
                <img src="/logo.jpg" alt="Elan Veda logo" className="w-full h-full object-cover" />
              </div>
              <div className="leading-tight">
                <div className="font-semibold text-base tracking-wide" style={{ color: "#1A6D3A" }}>
                  ELAN VEDA
                </div>
                <div className="text-[10px] font-medium tracking-[0.15em] uppercase mt-0.5" style={{ color: "#DAA520" }}>
                  Pure Ayurveda
                </div>
              </div>
            </div>

            <p className="text-xs text-text-muted leading-relaxed mb-5">
              India&apos;s most trusted Ayurvedic wellness brand bringing 5000+ years of ancient wisdom
              together with modern clinical research. 100% authentic, pure, and potent formulations
              for your everyday health, beauty &amp; wellness needs.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#1A6D3A" }} />
                <div className="text-xs text-text-body leading-relaxed">
                  <span className="font-bold">Address:</span>
                  <br />
                  Sector 21, Gurugram, Haryana 122016, India
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" style={{ color: "#1A6D3A" }} />
                <a href="tel:+919999999999" className="text-xs text-text-body hover:underline font-medium">
                  +91 99999 99999
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" style={{ color: "#1A6D3A" }} />
                <a href="mailto:care@elanveda.com" className="text-xs text-text-body hover:underline font-medium">
                  care@elanveda.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-sm text-gray-800 mb-4 pb-2 border-b border-gray-100">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {[
                "About Us",
                "Products",
                "Ayurvedic",
                "Skincare",
                "New Arrivals",
                "Best Sellers",
                "Offers & Deals",
                "Blog & Articles",
                "Doctor Consult",
                "Contact Us",
                "FAQs",
                "Track Order",
              ].map((l) => (
                <a
                  key={l}
                  href="#"
                  className="text-xs text-text-muted hover:text-[#1A6D3A] font-medium transition-colors py-0.5"
                >
                  • {l}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-sm text-gray-800 mb-4 pb-2 border-b border-gray-100">
              Customer Care
            </h3>
            <div className="bg-canvas-tint rounded-xl p-4 mb-5 border border-canvas-deep">
              <div className="text-center mb-3">
                <div className="text-xs text-text-muted mb-1">Call us on</div>
                <div className="font-bold text-lg tracking-tight" style={{ color: "#1A6D3A" }}>
                  1800-123-4567
                </div>
                <div className="text-[10px] text-text-light font-medium mt-1">
                  Toll-Free · 9AM — 9PM IST · All Days
                </div>
              </div>
              <div className="w-full h-px bg-canvas-deep my-3" />
              <div className="text-center">
                <div className="text-xs text-text-muted mb-1">Email us at</div>
                <a
                  href="mailto:help@elanveda.com"
                  className="font-medium text-sm hover:underline"
                  style={{ color: "#1A6D3A" }}
                >
                  help@elanveda.com
                </a>
              </div>
            </div>

            <h4 className="text-xs font-bold text-text-dark mb-3">
              We accept payments securely via
            </h4>
            <div className="grid grid-cols-4 gap-2">
              {paymentIcons.map((p) => (
                <div
                  key={p.name}
                  className="aspect-[4/3] bg-white rounded-md border border-canvas-deep shadow-sm flex items-center justify-center p-1.5 hover:shadow-md transition-shadow group"
                  title={p.alt}
                >
                  <img
                    src={p.url}
                    alt={p.alt}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                    onError={(e) => {
                      const t = e.target as HTMLImageElement;
                      t.style.display = "none";
                      const parent = t.parentElement!;
                      parent.innerHTML = `<span style="font-size:9px;font-weight:800;color:#1A6D3A;text-align:center;line-height:1">${p.name}</span>`;
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-canvas-deep my-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-text-muted">
          <p>
            © {new Date().getFullYear()} <span className="font-semibold" style={{ color: "#1A6D3A" }}>ELAN VEDA</span> · All Rights Reserved
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              "Shipping Policy",
              "Return & Exchange",
              "Terms & Conditions",
              "Privacy Policy",
              "Refund Policy",
              "FAQ",
            ].map((l) => (
              <a key={l} href="#" className="hover:text-[#1A6D3A] font-medium transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
