import { Phone, Mail, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function ContactSection() {
  return (
    <section id="contatto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Contatto"
          title="Contattateci oggi stesso"
          subtitle="Il nostro team di collaboratori motivati e con pluriennale esperienza è a vostra completa disposizione per consulenze."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Phone */}
          <a
            href="tel:+41916462577"
            className="flex flex-col items-center p-8 bg-[#F8F9FA] rounded-2xl border border-[#DEE2E6] hover:shadow-lg hover:border-[#1B3A5C]/20 transition-all group"
          >
            <div className="w-14 h-14 rounded-full bg-[#1B3A5C]/10 text-[#1B3A5C] flex items-center justify-center mb-4 group-hover:bg-[#1B3A5C] group-hover:text-white transition-colors">
              <Phone className="w-6 h-6" />
            </div>
            <span className="text-sm text-[#6C757D] mb-1">Telefono</span>
            <span className="text-lg font-bold text-[#1B3A5C] font-[Montserrat]">
              +41 91 646 25 77
            </span>
          </a>

          {/* Email */}
          <a
            href="mailto:pneuservice@bluewin.ch"
            className="flex flex-col items-center p-8 bg-[#F8F9FA] rounded-2xl border border-[#DEE2E6] hover:shadow-lg hover:border-[#1B3A5C]/20 transition-all group"
          >
            <div className="w-14 h-14 rounded-full bg-[#1B3A5C]/10 text-[#1B3A5C] flex items-center justify-center mb-4 group-hover:bg-[#1B3A5C] group-hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </div>
            <span className="text-sm text-[#6C757D] mb-1">Email</span>
            <span className="text-lg font-bold text-[#1B3A5C] font-[Montserrat]">
              pneuservice@bluewin.ch
            </span>
          </a>

          {/* Address */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=45.856843,8.982956"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-8 bg-[#F8F9FA] rounded-2xl border border-[#DEE2E6] hover:shadow-lg hover:border-[#1B3A5C]/20 transition-all group"
          >
            <div className="w-14 h-14 rounded-full bg-[#1B3A5C]/10 text-[#1B3A5C] flex items-center justify-center mb-4 group-hover:bg-[#1B3A5C] group-hover:text-white transition-colors">
              <MapPin className="w-6 h-6" />
            </div>
            <span className="text-sm text-[#6C757D] mb-1">Indirizzo</span>
            <span className="text-lg font-bold text-[#1B3A5C] font-[Montserrat] text-center">
              Via Sant'Apollonia 25
            </span>
            <span className="text-sm text-[#6C757D]">6877 Coldrerio, Svizzera</span>
          </a>
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <a
            href="tel:+41916462577"
            className="inline-flex items-center gap-2 bg-[#E63946] text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-[#d32f3d] transition-colors shadow-lg"
          >
            <Phone className="w-5 h-5" />
            Chiama ora
          </a>
        </div>
      </div>
    </section>
  );
}
