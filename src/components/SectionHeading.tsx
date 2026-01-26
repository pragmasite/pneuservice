interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ label, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center mb-12">
      {label && (
        <span className="text-[#E63946] text-sm font-semibold uppercase tracking-wider font-[Montserrat]">
          {label}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-[#1B3A5C] mt-2 font-[Montserrat]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[#6C757D] mt-3 max-w-2xl mx-auto text-base sm:text-lg">
          {subtitle}
        </p>
      )}
      <div className="w-16 h-1 bg-[#E63946] mx-auto mt-4 rounded-full" />
    </div>
  );
}
