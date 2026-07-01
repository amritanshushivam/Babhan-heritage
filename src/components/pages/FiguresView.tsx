import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Compass, Search, Eye } from 'lucide-react';
import FeaturedPersonCard from '../FeaturedPersonCard';
import { HISTORICAL_FIGURES } from '../../data';

export default function FiguresView() {
  const [activeEraFilter, setActiveEraFilter] = useState<'All' | 'Ancient' | 'Medieval' | 'Colonial' | 'Modern'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFigures = useMemo(() => {
    return HISTORICAL_FIGURES.filter((figure) => {
      const matchesEra = activeEraFilter === 'All' || figure.era === activeEraFilter;
      const matchesSearch = 
        figure.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        figure.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        figure.bioSnippet.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (figure.moolConnection && figure.moolConnection.toLowerCase().includes(searchQuery.toLowerCase()));
      
      return matchesEra && matchesSearch;
    });
  }, [activeEraFilter, searchQuery]);

  return (
    <div id="historical-figures-directory" className="bg-bg pt-28 pb-20 transition-colors duration-300">
      
      {/* Immersive Section Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12">
        <div className="border-b border-white/5 pb-6">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-gold block mb-2">
            BIOGRAPHICAL COLLECTION
          </span>
          <h1 className="text-4xl md:text-5xl font-display text-text-primary tracking-tight font-medium">
            Historical Figures &amp; Scholars
          </h1>
          <p className="text-sm font-sans text-text-secondary max-w-2xl mt-3 leading-relaxed font-light">
            Review detailed scholarly biographies, records of social agrarian struggles (Kisan Sabhas), educational statecraft initiatives, and poetic achievements of regional pioneers.
          </p>
        </div>
      </div>

      {/* Advanced Filter Toolbar */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-10 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Era Filters */}
        <div className="flex flex-wrap items-center gap-2 bg-surface/40 p-1.5 rounded-lg border border-border-custom">
          {['All', 'Ancient', 'Medieval', 'Colonial', 'Modern'].map((era) => (
            <button
              key={era}
              onClick={() => setActiveEraFilter(era as any)}
              className={`text-xs font-display uppercase tracking-wider px-4 py-2 rounded-md transition-all ${
                activeEraFilter === era
                  ? 'bg-gold text-bg font-bold font-semibold'
                  : 'text-[#B4B8BC] hover:text-white hover:bg-white/5'
              }`}
            >
              {era} Era
            </button>
          ))}
        </div>

        {/* Text Filter */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gold" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search biography by name, role, or gotra..."
            className="w-full bg-zinc-950/80 border border-border-custom pl-10 pr-4 py-2 rounded text-xs text-text-primary placeholder:text-text-secondary/50 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/30 transition-colors"
          />
        </div>

      </div>

      {/* Main dossiers list */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
        {filteredFigures.length > 0 ? (
          filteredFigures.map((fig) => (
            <FeaturedPersonCard 
              key={fig.id} 
              figure={fig} 
              id={fig.id} 
            />
          ))
        ) : (
          <div className="bg-surface border border-border-custom hover:border-gold/20 p-16 rounded-lg text-center max-w-2xl mx-auto space-y-4">
            <Award className="w-8 h-8 text-gold mx-auto stroke-[1.25]" />
            <h3 className="text-lg font-display text-text-primary">No Biographies Match Filter Parameters</h3>
            <p className="text-xs font-sans text-text-secondary">
              We continue expanding our biographical recordings for classical eras. Try seeking Colonial or Modern pioneers.
            </p>
            <button
              onClick={() => {
                setActiveEraFilter('All');
                setSearchQuery('');
              }}
              className="px-5 py-2 text-xs font-mono bg-gold text-bg rounded uppercase font-bold"
            >
              Reset Search Filter
            </button>
          </div>
        )}
      </div>

    </div>
  );
}
