import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-serif text-2xl mb-2">Pneuservice</h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
              {t.footer.tagline}
            </p>
            <p className="text-sm text-primary-foreground/60">
              {t.footer.description}
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-serif text-lg mb-4">{t.footer.navigation}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#chi-siamo"
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a
                  href="#servizi"
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a
                  href="#galleria"
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a
                  href="#orari"
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  {t.nav.hours}
                </a>
              </li>
              <li>
                <a
                  href="#contatti"
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-serif text-lg mb-4">{t.footer.about}</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:+41916462577"
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  +41 91 646 25 77
                </a>
              </li>
              <li>
                <a
                  href="mailto:pneuservice@bluewin.ch"
                  className="text-primary-foreground/80 hover:text-white transition-colors break-all"
                >
                  pneuservice@bluewin.ch
                </a>
              </li>
              <li className="text-primary-foreground/80">
                Via Sant'Apollonia 25
                <br />
                6877 Coldrerio, CH
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60">
            <p>
              © {currentYear} Pneuservice. {t.footer.copyright}
            </p>
            <div className="mt-4 md:mt-0 flex gap-4 text-xs">
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
