import { Award, Users, Wrench, Car } from "lucide-react";
import SectionHeading from "./SectionHeading";

const ABOUT_IMAGE =
  "https://images.services.local.ch/Dss_uG9nnAToCS8NgVlPeRxwE8LD5SpqZo7j3ndEGWw/s:200:150/q:75/f:webp/rt:fill-down/aHR0cHM6Ly9iaW4uc3RhdGljbG9jYWwuY2gvaW5mby1pbWFnZS1hZC8yNS8yNWQxMTM0OWNjMGM0MDk5Nzk4N2UzZDlkM2VhZDRlNGI4MzBlMWU2L2RhdGEuanBn";

const STATS = [
  { value: "40+", label: "Anni di esperienza" },
  { value: "1000+", label: "Clienti soddisfatti" },
  { value: "100%", label: "Soddisfazione garantita" },
];

const HIGHLIGHTS = [
  { icon: <Award className="w-6 h-6" />, title: "Esperienza", desc: "Oltre 40 anni nel settore" },
  { icon: <Users className="w-6 h-6" />, title: "Professionalità", desc: "Team qualificato e motivato" },
  { icon: <Wrench className="w-6 h-6" />, title: "Servizio completo", desc: "Tutto per i vostri pneumatici" },
  { icon: <Car className="w-6 h-6" />, title: "Auto di cortesia", desc: "Veicoli a vostra disposizione" },
];

export default function AboutSection() {
  return (
    <section id="chi-siamo" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Chi siamo"
          title="La vostra officina di fiducia"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div>
            <p className="text-[#1A1A2E] leading-relaxed mb-4">
              Dal 1983 siamo al vostro servizio con affidabilità e professionalità che ci hanno
              conquistato la vostra fiducia. Siamo lieti che ci abbiate trovato.
            </p>
            <p className="text-[#6C757D] leading-relaxed mb-4">
              Offriamo una gamma completa di servizi, diverse stazioni di controllo, un deposito
              pneumatici e molto altro. In breve: ci occupiamo di tutti i servizi relativi ai pneumatici.
            </p>
            <p className="text-[#6C757D] leading-relaxed mb-8">
              Il nostro team di personale motivato con molti anni di esperienza è a vostra
              disposizione. Siamo completamente a vostra disposizione per consigli e
              consulenze.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="text-center p-4 bg-[#F8F9FA] rounded-xl border border-[#DEE2E6]"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#F4A300] font-[Montserrat]">
                    {s.value}
                  </div>
                  <div className="text-xs sm:text-sm text-[#6C757D] mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="order-first lg:order-last">
            <img
              src={ABOUT_IMAGE}
              alt="Pneuservice officina"
              className="w-full h-auto rounded-2xl shadow-lg object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {HIGHLIGHTS.map((h) => (
            <div
              key={h.title}
              className="text-center p-6 bg-[#F8F9FA] rounded-xl border border-[#DEE2E6]"
            >
              <div className="w-12 h-12 rounded-full bg-[#1B3A5C]/10 text-[#1B3A5C] flex items-center justify-center mx-auto mb-3">
                {h.icon}
              </div>
              <h4 className="font-bold text-[#1B3A5C] font-[Montserrat] mb-1">
                {h.title}
              </h4>
              <p className="text-sm text-[#6C757D]">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
