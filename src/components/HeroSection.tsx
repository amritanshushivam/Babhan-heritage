import { motion } from 'motion/react';
import { ArrowRight, BookOpen, Notebook } from 'lucide-react';
import historicalMap from '../assets/images/historical_map_bihar_1780920423087.png';

interface HeroSectionProps {
  id?: string;
  onExploreClick: (tab: string) => void;
}

export default function HeroSection({ id, onExploreClick }: HeroSectionProps) {
  // Static update date feels much more natural for a historical archive than a live ticking UTC clock.
  const lastUpdated = "June 2026";

  return (
    <div
      id={id || "hero-museum-landing"}
      className="relative min-h-[94vh] bg-bg flex flex-col justify-center overflow-hidden pt-24 transition-colors duration-300"
    >
      <div className="absolute inset-0 museum-grid-pattern pointer-events-none" />
      <div
        className="absolute inset-y-0 right-0 hidden lg:block w-[52%] opacity-[0.18] mix-blend-luminosity"
        style={{
          backgroundImage: `linear-gradient(90deg, var(--color-bg-val), rgba(17,16,14,0.2)), url(${historicalMap})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center right'
        }}
      />
      <div className="absolute inset-0 paper-grain pointer-events-none opacity-70" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full flex flex-col justify-between py-10 md:py-16">
        
        {/* Archival Status */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border-custom pb-4 mb-10 md:mb-14">
          <div className="flex items-center gap-2.5">
            <Notebook className="w-4 h-4 text-bronze" />
            <span className="text-[10px] font-mono tracking-[0.18em] text-text-secondary uppercase">
              Bhumihar Historical Records &bull; Last Updated: {lastUpdated}
            </span>
          </div>
          <div>
            <span className="text-[10px] font-mono tracking-[0.18em] text-gold uppercase bg-gold/8 px-2.5 py-1 border border-gold/20">
              ESTABLISHED 2026
            </span>
          </div>
        </div>

        {/* Hero Title and Summary */}
        <div className="max-w-4xl space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="text-xs font-mono uppercase tracking-[0.22em] text-gold font-semibold block mb-2">
              Historical Reference & Genealogies
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-6xl md:text-7xl font-display text-text-primary font-medium leading-[1.05]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Preserving the Historical Legacy of <span className="text-gold font-serif italic">Bhumihar Brahmins</span>
          </motion.h1>

          <motion.p
            className="text-sm md:text-lg font-sans text-text-secondary leading-relaxed max-w-2xl font-light"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Over generations, Bhumihar families have shaped Bihar's destiny—from peasant rebellions to literary renaissance, from educational institutions to freedom struggles. This archive brings together the forgotten stories, the unsung contributions, and the living heritage of our community.
          </motion.p>

          {/* Action triggers */}
          <motion.div
            className="flex flex-wrap items-center gap-3 pt-6"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button
              onClick={() => onExploreClick('mools')}
              className="inline-flex items-center gap-2 px-5 py-3 bg-gold hover:bg-gold-hover text-bg font-sans font-semibold text-xs uppercase tracking-[0.16em] transition-all duration-300 cursor-pointer"
            >
              Explore Gotras &amp; Mools
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onExploreClick('archive')}
              className="inline-flex items-center gap-2 px-5 py-3 bg-surface/45 hover:bg-surface border border-border-custom hover:border-gold/35 font-sans font-semibold text-text-primary hover:text-gold text-xs uppercase tracking-[0.16em] transition-all duration-300 cursor-pointer"
            >
              <BookOpen className="w-4 h-4" />
              Browse Library Archives
            </button>
          </motion.div>
        </div>

        {/* Simple fact overview tickers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 mt-14 md:mt-20 border-t border-border-custom pt-8">
          
          <div className="space-y-1">
            <span className="text-2xl md:text-3xl font-display font-medium text-gold">140+</span>
            <span className="text-[10px] font-mono uppercase tracking-wider text-text-secondary block">
              Documented Mools (Clans)
            </span>
            <p className="text-[11px] font-sans text-text-secondary/55 leading-snug">
              Traced to authentic historical villages.
            </p>
          </div>

          <div className="space-y-1">
            <span className="text-2xl md:text-3xl font-display font-medium text-text-primary">6 Eras</span>
            <span className="text-[10px] font-mono uppercase tracking-wider text-text-secondary block">
              Historical Timeline
            </span>
            <p className="text-[11px] font-sans text-text-secondary/55 leading-snug">
              Tracing community history through generations.
            </p>
          </div>

          <div className="space-y-1">
            <span className="text-2xl md:text-3xl font-display font-medium text-gold">500+</span>
            <span className="text-[10px] font-mono uppercase tracking-wider text-text-secondary block">
              Archived Works
            </span>
            <p className="text-[11px] font-sans text-text-secondary/55 leading-snug">
              Including gazetteers, newsletters, and historical tracts.
            </p>
          </div>

          <div className="space-y-1">
            <span className="text-2xl md:text-3xl font-display font-medium text-text-primary">4 Areas</span>
            <span className="text-[10px] font-mono tracking-wider text-text-secondary block">
              Key Contributions
            </span>
            <p className="text-[11px] font-sans text-text-secondary/60 leading-snug">
              Education, Defense, Statecraft, &amp; Literature.
            </p>
          </div>

        </div>

      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gold/20" />
    </div>
  );
}
