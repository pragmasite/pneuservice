import { Phone, Mail, MapPin } from "lucide-react";

const LOGO_URL =
  "https://bin.staticlocal.ch/localplace-logo/16/169ef88c6175a53f47c02c17847db0b1de63398d/Pneu%20Service%202016%20_2_.jpg";

const NAV_LINKS = [
  { label: "Chi Siamo", href: "#chi-siamo" },
  { label: "Servizi", href: "#servizi" },
  { label: "Galleria", href: "#galleria" },
  { label: "Orari", href: "#orari" },
  { label: "Contatto", href: "#contatto" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0f2744] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={LOGO_URL}
                alt="Pneuservice Logo"
                className="h-10 w-auto rounded"
              />
              <span className="text-xl font-bold font-[Montserrat]">
                Pneu Service
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Specialisti pneumatici dal 1983.
            </p>
            <p className="text-white/60 text-sm leading-relaxed">
              Al vostro servizio con affidabilità e professionalità.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-base mb-4 font-[Montserrat]">
              Navigazione
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-[#F4A300] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-base mb-4 font-[Montserrat]">
              Contatto
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+41916462577"
                  className="flex items-center gap-2 text-white/60 hover:text-[#F4A300] transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 text-[#F4A300]" />
                  +41 91 646 25 77
                </a>
              </li>
              <li>
                <a
                  href="mailto:pneuservice@bluewin.ch"
                  className="flex items-center gap-2 text-white/60 hover:text-[#F4A300] transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 text-[#F4A300]" />
                  pneuservice@bluewin.ch
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=45.856843,8.982956"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-white/60 hover:text-[#F4A300] transition-colors text-sm"
                >
                  <MapPin className="w-4 h-4 text-[#F4A300] shrink-0 mt-0.5" />
                  <span>
                    Via Sant'Apollonia 25
                    <br />
                    6877 Coldrerio, CH
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-bold text-base mb-4 font-[Montserrat]">
              Orari di apertura
            </h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li className="flex justify-between">
                <span>Lunedì - Venerdì</span>
                <span>08:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sabato</span>
                <span>08:00 - 12:00</span>
              </li>
              <li className="flex justify-between">
                <span>Domenica</span>
                <span className="text-[#E63946]">Chiuso</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 text-center text-white/40 text-sm">
          &copy; {year} Pneuservice. Tutti i diritti riservati.
        </div>
      </div>
    </footer>
  );
}
