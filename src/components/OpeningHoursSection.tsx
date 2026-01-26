import { useEffect, useState } from "react";
import { Clock, MapPin } from "lucide-react";

interface DaySchedule {
  day: string;
  hours: string;
  isSaturday?: boolean;
  isSunday?: boolean;
}

const SCHEDULE: DaySchedule[] = [
  { day: "Lunedì", hours: "08:00 - 12:00 / 13:30 - 18:00" },
  { day: "Martedì", hours: "08:00 - 12:00 / 13:30 - 18:00" },
  { day: "Mercoledì", hours: "08:00 - 12:00 / 13:30 - 18:00" },
  { day: "Giovedì", hours: "08:00 - 12:00 / 13:30 - 18:00" },
  { day: "Venerdì", hours: "08:00 - 12:00 / 13:30 - 18:00" },
  { day: "Sabato", hours: "08:00 - 12:00", isSaturday: true },
  { day: "Domenica", hours: "Chiuso", isSunday: true },
];

function getOpenStatus(): { isOpen: boolean; label: string } {
  const now = new Date();
  const day = now.getDay(); // 0=Sunday
  const h = now.getHours();
  const m = now.getMinutes();
  const timeVal = h * 60 + m;

  if (day === 0) return { isOpen: false, label: "Chiuso" };

  const morningOpen = 8 * 60;
  const morningClose = 12 * 60;
  const afternoonOpen = 13 * 60 + 30;
  const afternoonClose = 18 * 60;

  if (day === 6) {
    return timeVal >= morningOpen && timeVal < morningClose
      ? { isOpen: true, label: "Aperto ora" }
      : { isOpen: false, label: "Chiuso" };
  }

  if (
    (timeVal >= morningOpen && timeVal < morningClose) ||
    (timeVal >= afternoonOpen && timeVal < afternoonClose)
  ) {
    return { isOpen: true, label: "Aperto ora" };
  }

  return { isOpen: false, label: "Chiuso" };
}

export default function OpeningHoursSection() {
  const [status, setStatus] = useState(getOpenStatus);

  useEffect(() => {
    const interval = setInterval(() => setStatus(getOpenStatus()), 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="orari" className="py-20 bg-[#1B3A5C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[#F4A300] text-sm font-semibold uppercase tracking-wider font-[Montserrat]">
            Disponibilità
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 font-[Montserrat]">
            Orari di apertura
          </h2>
          <div className="w-16 h-1 bg-[#E63946] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Hours Table */}
          <div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20">
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#F4A300]" />
                  <span className="font-semibold font-[Montserrat]">Orari di apertura</span>
                </div>
                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full ${
                    status.isOpen
                      ? "bg-green-500/20 text-green-300"
                      : "bg-red-500/20 text-red-300"
                  }`}
                >
                  {status.label}
                </span>
              </div>
              <div className="divide-y divide-white/10">
                {SCHEDULE.map((row) => (
                  <div
                    key={row.day}
                    className={`flex items-center justify-between px-6 py-3.5 ${
                      row.isSaturday ? "bg-[#F4A300]/10" : ""
                    } ${row.isSunday ? "bg-white/5" : ""}`}
                  >
                    <span
                      className={`font-medium ${
                        row.isSunday ? "text-white/60" : ""
                      }`}
                    >
                      {row.day}
                    </span>
                    <span
                      className={`text-sm ${
                        row.isSunday ? "text-[#E63946]" : "text-white/80"
                      }`}
                    >
                      {row.hours}
                    </span>
                  </div>
                ))}
              </div>
              <div className="px-6 py-3 border-t border-white/10 text-white/50 text-xs">
                * Pausa pranzo: 12:00 - 13:30
              </div>
            </div>
          </div>

          {/* Map & Address */}
          <div>
            <div className="rounded-2xl overflow-hidden border border-white/20 mb-6">
              <iframe
                title="Pneuservice Coldrerio"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2776.5!2d8.982956!3d45.856843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47842e0a0a0a0a0a%3A0x0!2sVia+Sant%27Apollonia+25%2C+6877+Coldrerio!5e0!3m2!1sit!2sch!4v1"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
            <div className="flex items-start gap-3 text-white/80">
              <MapPin className="w-5 h-5 text-[#F4A300] shrink-0 mt-0.5" />
              <span>Via Sant'Apollonia 25, 6877 Coldrerio, CH</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
