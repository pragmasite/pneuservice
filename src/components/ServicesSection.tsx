import {
  CircleDot,
  Archive,
  Wrench,
  Navigation,
  Droplets,
  Sparkles,
  ShoppingCart,
  Gauge,
  Shield,
  Snowflake,
  Car,
  Bike,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const TIRE_SERVICES: Service[] = [
  {
    icon: <CircleDot className="w-8 h-8" />,
    title: "Cambio Pneumatici",
    description:
      "Per auto, SUV, furgoni, moto e scooter, fino a 24 pollici",
  },
  {
    icon: <Archive className="w-8 h-8" />,
    title: "Deposito Pneumatici",
    description:
      "Stoccaggio sicuro per i vostri pneumatici stagionali",
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Riparazione Pneumatici",
    description:
      "Riparazioni professionali per prolungare la vita dei vostri pneumatici",
  },
  {
    icon: <Snowflake className="w-8 h-8" />,
    title: "Gomme Invernali",
    description:
      "Ampia selezione di pneumatici invernali per ogni esigenza",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Gomme Stradali",
    description:
      "Pneumatici estivi e all-season delle migliori marche",
  },
  {
    icon: <Snowflake className="w-8 h-8" />,
    title: "Catene da Neve",
    description: "Vendita e consulenza per catene da neve",
  },
];

const WHEEL_SERVICES: Service[] = [
  {
    icon: <CircleDot className="w-8 h-8" />,
    title: "Equilibratura",
    description:
      "Bilanciamento preciso per una guida fluida",
  },
  {
    icon: <Navigation className="w-8 h-8" />,
    title: "Convergenza",
    description:
      "Allineamento ruote professionale",
  },
  {
    icon: <Droplets className="w-8 h-8" />,
    title: "Lavaggio Ruote",
    description:
      "Pulizia completa con macchina dedicata",
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Lavaggio Cerchi",
    description:
      "Pulizia e cura dei vostri cerchi",
  },
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    title: "Vendita Cerchi",
    description:
      "Cerchi in acciaio e lega per pneumatici invernali",
  },
  {
    icon: <Gauge className="w-8 h-8" />,
    title: "Test Valvole",
    description:
      "Controllo sensori e pressione pneumatici",
  },
];

const EXTRA_SERVICES: Service[] = [
  {
    icon: <Car className="w-8 h-8" />,
    title: "Veicoli di Cortesia",
    description: "Scooter e auto a disposizione",
  },
  {
    icon: <Bike className="w-8 h-8" />,
    title: "Catene da Neve",
    description: "Vendita e noleggio catene da neve",
  },
];

function ServiceCard({ icon, title, description }: Service) {
  return (
    <div className="bg-white rounded-xl p-6 border border-[#DEE2E6] hover:shadow-lg hover:border-[#1B3A5C]/20 transition-all duration-300 group">
      <div className="w-14 h-14 rounded-full bg-[#1B3A5C]/10 text-[#1B3A5C] flex items-center justify-center mb-4 group-hover:bg-[#1B3A5C] group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-[#1B3A5C] mb-2 font-[Montserrat]">
        {title}
      </h3>
      <p className="text-[#6C757D] text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function ServiceSubHeading({ title }: { title: string }) {
  return (
    <div className="text-center mb-8 mt-12 first:mt-0">
      <h3 className="text-xl sm:text-2xl font-bold text-[#E63946] font-[Montserrat]">
        {title}
      </h3>
      <div className="w-12 h-0.5 bg-[#E63946] mx-auto mt-3 rounded-full" />
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section id="servizi" className="py-20 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="I nostri servizi"
          title="Servizi professionali"
          subtitle="Offriamo una gamma completa di servizi per pneumatici e cerchi per auto, SUV, furgoni, moto e scooter."
        />

        <ServiceSubHeading title="Servizi Pneumatici" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TIRE_SERVICES.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>

        <ServiceSubHeading title="Servizi Ruote" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHEEL_SERVICES.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>

        <ServiceSubHeading title="Servizi Aggiuntivi" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXTRA_SERVICES.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
