import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

const IMAGES = [
  {
    src: "https://images.services.local.ch/AtrkzA1l8suJvW9tVzNMcAMd0hrRAOSYgWfnBvgYgKQ/s:200:150/q:75/f:webp/rt:fill-down/aHR0cHM6Ly9iaW4uc3RhdGljbG9jYWwuY2gvaW5mby1pbWFnZS1hZC83MC83MDY3OTZiYTExM2I4MTMxMWJkMjVlZTA0ZjZlN2M0YWY3NDlmNGExL2RhdGEuanBn",
    alt: "Officina Pneuservice - Esterno",
  },
  {
    src: "https://images.services.local.ch/QEaescFNJs47J3Fi1tt2ZD1yYAMay0yrTiqIdvULEtc/s:200:150/q:75/f:webp/rt:fill-down/aHR0cHM6Ly9iaW4uc3RhdGljbG9jYWwuY2gvaW5mby1pbWFnZS1hZC9mMS9mMWEwODJkNjNlYTg3M2Y3M2Y5YmExNzkzNTg0NjllMjBjYTdjZTNhL2RhdGEuanBn",
    alt: "Officina Pneuservice - Interno",
  },
  {
    src: "https://images.services.local.ch/Wp5KDlEPgv2ammBPaNIk02KmWzaGi__4hMpKMQ1a75s/s:200:150/q:75/f:webp/rt:fill-down/aHR0cHM6Ly9iaW4uc3RhdGljbG9jYWwuY2gvaW5mby1pbWFnZS1hZC81YS81YTMwZmJjODJhOTE5YTkwNGI3NzQ3OWY5ODRiZTMzY2Q0MDEwZTcyL2RhdGEuanBn",
    alt: "Officina Pneuservice - Lavoro",
  },
  {
    src: "https://images.services.local.ch/Dss_uG9nnAToCS8NgVlPeRxwE8LD5SpqZo7j3ndEGWw/s:200:150/q:75/f:webp/rt:fill-down/aHR0cHM6Ly9iaW4uc3RhdGljbG9jYWwuY2gvaW5mby1pbWFnZS1hZC8yNS8yNWQxMTM0OWNjMGM0MDk5Nzk4N2UzZDlkM2VhZDRlNGI4MzBlMWU2L2RhdGEuanBn",
    alt: "Officina Pneuservice - Attrezzatura",
  },
  {
    src: "https://images.services.local.ch/jfbTs5wk-3OEgnnyoyeVqQOU5TIeieBMHDxtqi1HR3M/s:200:150/q:75/f:webp/rt:fill-down/aHR0cHM6Ly9iaW4uc3RhdGljbG9jYWwuY2gvaW5mby1pbWFnZS1hZC9lNi9lNjRkOTc1NzY4YzNjYmY5MGYwN2Q4MGU4MzIzMWU3MDY1YTFjYzBlL2RhdGEuanBn",
    alt: "Officina Pneuservice - Team",
  },
];

export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () =>
    setLightboxIndex((i) => (i !== null ? (i - 1 + IMAGES.length) % IMAGES.length : null));
  const next = () =>
    setLightboxIndex((i) => (i !== null ? (i + 1) % IMAGES.length : null));

  return (
    <section id="galleria" className="py-20 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="La nostra officina"
          title="Galleria"
          subtitle="Scoprite la nostra officina e le nostre attrezzature professionali."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {IMAGES.map((img, i) => (
            <button
              key={i}
              onClick={() => openLightbox(i)}
              className="overflow-hidden rounded-xl aspect-[4/3] group cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            className="absolute top-4 right-4 text-white/80 hover:text-white"
            aria-label="Chiudi"
          >
            <X className="w-8 h-8" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-4 text-white/80 hover:text-white"
            aria-label="Precedente"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <img
            src={IMAGES[lightboxIndex].src}
            alt={IMAGES[lightboxIndex].alt}
            className="max-w-full max-h-[80vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-4 text-white/80 hover:text-white"
            aria-label="Successivo"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
        </div>
      )}
    </section>
  );
}
