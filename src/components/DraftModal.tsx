import { useState } from "react";
import { FileText } from "lucide-react";

export default function DraftModal() {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center animate-in fade-in zoom-in-95 duration-300">
        <div className="w-14 h-14 rounded-full bg-[#F4A300]/10 text-[#F4A300] flex items-center justify-center mx-auto mb-5">
          <FileText className="w-7 h-7" />
        </div>
        <h2 className="text-2xl font-bold text-[#1B3A5C] mb-3 font-[Montserrat]">
          Anteprima Bozza
        </h2>
        <p className="text-[#6C757D] mb-6 leading-relaxed">
          Questo sito web è attualmente in fase di sviluppo. I contenuti e il design
          potrebbero subire modifiche.
        </p>
        <button
          onClick={() => setOpen(false)}
          className="inline-flex items-center justify-center bg-[#1B3A5C] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#152e4a] transition-colors"
        >
          Ho capito
        </button>
      </div>
    </div>
  );
}
