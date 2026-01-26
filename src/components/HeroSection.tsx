import { Phone, ChevronDown } from "lucide-react";

const HERO_BG =
  "https://images.services.local.ch/AtrkzA1l8suJvW9tVzNMcAMd0hrRAOSYgWfnBvgYgKQ/s:200:150/q:75/f:webp/rt:fill-down/aHR0cHM6Ly9iaW4uc3RhdGljbG9jYWwuY2gvaW5mby1pbWFnZS1hZC83MC83MDY3OTZiYTExM2I4MTMxMWJkMjVlZTA0ZjZlN2M0YWY3NDlmNGExL2RhdGEuanBn";

export default function HeroSection() {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1B3A5C]/85 via-[#1B3A5C]/75 to-[#1B3A5C]/90" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
        <span className="inline-block bg-[#F4A300] text-[#1B3A5C] text-sm font-bold px-4 py-1.5 rounded-full mb-6 font-[Montserrat]">
          Oltre 40 anni di esperienza
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 font-[Montserrat]">
          Il vostro partner{" "}
          <span className="text-[#F4A300]">di fiducia per i pneumatici</span>
        </h1>
        <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
          Affidabilità e professionalità dal 1983. Offriamo una gamma completa di servizi
          per pneumatici a Coldrerio.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+41916462577"
            className="inline-flex items-center gap-2 bg-[#F4A300] text-[#1B3A5C] font-bold px-8 py-4 rounded-lg text-lg hover:bg-[#e09600] transition-colors shadow-lg"
          >
            <Phone className="w-5 h-5" />
            +41 91 646 25 77
          </a>
          <a
            href="#servizi"
            className="inline-flex items-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-lg text-lg hover:bg-white/10 transition-colors"
          >
            I nostri servizi
          </a>
        </div>
        <div className="mt-8 text-white/70 text-sm flex items-center justify-center gap-1.5">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          Coldrerio, Svizzera
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
}
