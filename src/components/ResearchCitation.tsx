import { BookOpen } from 'lucide-react';

interface ResearchCitationProps {
  text: string;
  id?: string;
  key?: any;
}

export default function ResearchCitation({ text, id }: ResearchCitationProps) {
  return (
    <div 
      id={id || "research-citation"} 
      className="border-l-2 border-gold/40 pl-4 py-2 my-4 bg-surface/40 hover:bg-surface/60 transition-colors duration-300 rounded-r-md"
    >
      <div className="flex items-center gap-2 text-[11px] font-display uppercase tracking-widest text-gold mb-1">
        <BookOpen className="w-3.5 h-3.5 stroke-[1.5]" />
        <span>Primary Historical Source</span>
      </div>
      <p className="font-research text-xs italic text-text-secondary leading-relaxed">
        "{text}"
      </p>
    </div>
  );
}
