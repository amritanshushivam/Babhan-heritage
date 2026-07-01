import { motion } from 'motion/react';
import { Calendar, Award, ShieldAlert } from 'lucide-react';
import ResearchCitation from './ResearchCitation';

interface HistoricalCardProps {
  id: string;
  name: string;
  lifespan: string;
  role: string;
  era: 'Ancient' | 'Medieval' | 'Colonial' | 'Modern';
  bioSnippet: string;
  achievements?: string[];
  citation: string;
  personalAnecdote?: string;
  onSelect?: () => void;
  key?: any;
}

export default function HistoricalCard({
  id,
  name,
  lifespan,
  role,
  era,
  bioSnippet,
  achievements,
  citation,
  personalAnecdote,
  onSelect
}: HistoricalCardProps) {
  const getEraBadgeColor = (eraName: string) => {
    switch (eraName) {
      case 'Ancient': return 'bg-amber-950/40 text-amber-300 border-amber-900/50';
      case 'Medieval': return 'bg-rose-950/40 text-rose-300 border-rose-900/50';
      case 'Colonial': return 'bg-blue-950/40 text-blue-300 border-blue-900/50';
      case 'Modern': return 'bg-emerald-950/40 text-emerald-300 border-emerald-900/50';
      default: return 'bg-zinc-950 text-zinc-300 border-zinc-800';
    }
  };

  return (
    <motion.div
      id={`historical-card-${id}`}
      className="group relative flex flex-col justify-between h-full p-6 bg-surface border border-border-custom hover:border-gold/35 transition-all duration-300 overflow-hidden quiet-card"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {/* Visual background texture inside */}
      <div className="absolute inset-x-0 top-0 h-px bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div>
        {/* Card Header */}
        <div className="flex justify-between items-start gap-4 mb-4">
          <span className={`px-2.5 py-0.5 text-[10px] font-sans uppercase tracking-[0.16em] border ${getEraBadgeColor(era)}`}>
            {era} Era
          </span>
          <div className="flex items-center gap-1.5 text-xs text-text-secondary/80 font-mono">
            <Calendar className="w-3.5 h-3.5 text-bronze" />
            <span>{lifespan}</span>
          </div>
        </div>

        {/* Title & Role */}
        <h3 id={`title-${id}`} className="text-xl font-display text-text-primary group-hover:text-gold transition-colors duration-300 mb-1">
          {name}
        </h3>
        <p id={`role-${id}`} className="text-xs font-sans text-gold/80 italic mb-4 font-medium tracking-wide">
          {role}
        </p>

        {/* Short description */}
        <p className="text-sm font-sans text-text-secondary/90 leading-relaxed mb-4">
          {bioSnippet}
        </p>

        {/* Personal Anecdote - adds human touch */}
        {personalAnecdote && (
          <div className="mb-4 p-3 bg-gold/5 border-l-2 border-gold/40 rounded-sm">
            <p className="text-xs font-serif italic text-text-primary/85 leading-relaxed">
              "{personalAnecdote}"
            </p>
            <span className="text-[9px] text-gold/70 font-mono uppercase tracking-wider mt-2 block">
              — Local Account
            </span>
          </div>
        )}

        {/* Sub-accomplishments list if provided */}
        {achievements && achievements.length > 0 && (
          <div className="space-y-2 mb-4">
            <span className="text-[11px] font-display uppercase tracking-wider text-text-primary/70 flex items-center gap-1">
              <Award className="w-3 h-3 text-bronze" />
              Key Historic Footprint
            </span>
            <ul className="list-none pl-0 space-y-1 text-xs text-text-secondary">
              {achievements.slice(0, 2).map((achievement, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-gold mt-1">•</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div>
        {/* Scholar Citation Callout */}
        <ResearchCitation text={citation} id={`citation-helper-${id}`} />

        {/* Interaction Bottom bar */}
        {onSelect && (
          <button
            id={`btn-select-${id}`}
            onClick={onSelect}
            className="w-full mt-2 py-2 px-4 text-xs font-sans tracking-[0.16em] uppercase text-text-primary group-hover:text-gold bg-white/[0.02] border border-border-custom group-hover:border-gold/30 hover:bg-gold/5 transition-all duration-300"
          >
            DOCUMENTARY RECORDS
          </button>
        )}
      </div>
    </motion.div>
  );
}
