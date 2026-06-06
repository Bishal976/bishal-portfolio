interface SectionLabelProps {
  number: string;
  label: string;
}

export default function SectionLabel({ number, label }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="text-xs font-mono text-[#6C63FF] tracking-[0.2em]">{number}</span>
      <div className="h-px w-8 bg-[#6C63FF] opacity-60" />
      <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#6B6B7B]">{label}</span>
    </div>
  );
}
