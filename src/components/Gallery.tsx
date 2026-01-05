import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    { src: "/images/img-2.jpg", alt: "Magazzino pneumatici" },
    { src: "/images/img-3.jpg", alt: "Deposito gomme" },
    { src: "/images/img-4.jpg", alt: "Equilibratura ruota" },
    { src: "/images/img-5.jpg", alt: "Servizio riparazione" },
  ];

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="galleria" className="py-24 bg-muted">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">
            {t.gallery.label}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl my-4">
            {t.gallery.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.gallery.description}
          </p>
        </motion.div>

        {/* Gallery - Slider for 4 images */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          className="space-y-6"
        >
          {/* Main Image */}
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-background">
            <motion.img
              key={selectedImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-6 left-6"
            >
              <p className="text-white font-serif text-2xl">
                {images[selectedImage].alt}
              </p>
              <p className="text-white/70 text-sm mt-1">
                {selectedImage + 1} / {images.length}
              </p>
            </motion.div>

            {/* Slider Controls */}
            <div className="absolute right-6 bottom-6 flex gap-2">
              <button
                onClick={prevImage}
                className="rounded-full bg-white/20 hover:bg-white/30 p-2 transition-colors text-white"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextImage}
                className="rounded-full bg-white/20 hover:bg-white/30 p-2 transition-colors text-white"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-4 gap-4">
            {images.map((image, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ delay: 0.2 + i * 0.05 }}
                onClick={() => setSelectedImage(i)}
                className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                  selectedImage === i
                    ? "border-accent scale-105"
                    : "border-transparent hover:border-primary/30"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
