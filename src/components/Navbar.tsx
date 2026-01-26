import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";

const LOGO_URL =
  "https://bin.staticlocal.ch/localplace-logo/16/169ef88c6175a53f47c02c17847db0b1de63398d/Pneu%20Service%202016%20_2_.jpg";

const NAV_LINKS = [
  { label: "Servizi", href: "#servizi" },
  { label: "Chi Siamo", href: "#chi-siamo" },
  { label: "Galleria", href: "#galleria" },
  { label: "Orari", href: "#orari" },
  { label: "Contatto", href: "#contatto" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md"
          : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 shrink-0">
            <img
              src={LOGO_URL}
              alt="Pneuservice Logo"
              className="h-10 w-auto rounded"
            />
            <span className="text-xl font-bold text-[#1B3A5C] font-[Montserrat]">
              Pneuservice
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#1A1A2E] hover:text-[#E63946] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Phone CTA */}
          <a
            href="tel:+41916462577"
            className="hidden md:inline-flex items-center gap-2 bg-[#1B3A5C] text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-[#152e4a] transition-colors"
          >
            <Phone className="w-4 h-4" />
            +41 91 646 25 77
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-[#1B3A5C]"
            aria-label="Menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#DEE2E6] shadow-lg">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-base font-medium text-[#1A1A2E] hover:text-[#E63946] py-3 px-3 rounded-lg hover:bg-[#F8F9FA] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+41916462577"
              className="flex items-center justify-center gap-2 bg-[#1B3A5C] text-white font-semibold px-5 py-3 rounded-lg mt-2 hover:bg-[#152e4a] transition-colors"
            >
              <Phone className="w-4 h-4" />
              +41 91 646 25 77
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
