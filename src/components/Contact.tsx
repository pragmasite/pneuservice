import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Contact = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Phone,
      label: t.contact.phone,
      value: "+41 91 646 25 77",
      href: "tel:+41916462577",
    },
    {
      icon: Mail,
      label: t.contact.email,
      value: "pneuservice@bluewin.ch",
      href: "mailto:pneuservice@bluewin.ch",
    },
    {
      icon: MapPin,
      label: t.contact.address,
      value: "Via Sant'Apollonia 25, 6877 Coldrerio, CH",
      href: "https://maps.google.com/?q=Via+Sant'Apollonia+25,+6877+Coldrerio,+CH",
    },
  ];

  return (
    <section id="contatti" className="py-24 bg-muted">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">
            {t.contact.label}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl my-4">
            {t.contact.title1}
            <br />
            <span className="text-accent">{t.contact.title2}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.contact.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={i}
                  href={info.href}
                  target={info.label === t.contact.address ? "_blank" : undefined}
                  rel={info.label === t.contact.address ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-background rounded-lg p-6 shadow-soft hover:shadow-medium transition-all hover:-translate-y-1 group"
                >
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-accent/10 group-hover:text-accent transition-colors mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-lg mb-2">{info.label}</h3>
                  <p className="text-sm text-muted-foreground break-all">
                    {info.value}
                  </p>
                </motion.a>
              );
            })}
          </div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            className="rounded-lg overflow-hidden shadow-medium h-96"
          >
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              title="Pneuservice location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2737.8516742831004!2d8.982956!3d45.856843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479169a2e5e5e5e5%3A0x5e5e5e5e5e5e5e5e!2sVia%20Sant'Apollonia%2025%2C%206877%20Coldrerio%2C%20Switzerland!5e0!3m2!1sit!2sIT!4v1234567890"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
