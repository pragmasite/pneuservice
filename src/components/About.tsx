import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { Check } from "lucide-react";

const About = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="chi-siamo" className="py-24 bg-muted">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm uppercase tracking-widest text-primary">
              {t.about.label}
            </span>
            <h2 className="font-serif text-4xl md:text-5xl my-6">
              {t.about.title1}
              <br />
              <span className="text-accent">{t.about.title2}</span>
            </h2>
            <p className="text-lg text-foreground/90 mb-4">{t.about.p1}</p>
            <p className="text-lg text-foreground/90 mb-8">{t.about.p2}</p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 my-8">
              {[
                { number: "40+", label: t.about.stat1 },
                { number: "1000+", label: t.about.stat2 },
                { number: "8+", label: t.about.stat3 },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="font-serif text-3xl text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {t.about.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="bg-background rounded-lg p-6 shadow-soft hover:shadow-medium transition-shadow"
              >
                <div className="flex items-start gap-3 mb-3">
                  <Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <h3 className="font-serif text-lg">{feature.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
