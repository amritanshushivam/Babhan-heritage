import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, MapPin, Landmark, Users, ArrowUpRight, Plus, Check, Filter } from 'lucide-react';
import SearchBar from '../SearchBar';
import ResearchCitation from '../ResearchCitation';
import { MOOLS_DATA, REGIONS_DATA } from '../../data';

export default function MoolsView() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedOriginVillage, setSelectedOriginVillage] = useState('All');
  const [showFiltersMobile, setShowFiltersMobile] = useState(false);

  // Derive unique origin villages for filtering options
  const originVillages = useMemo(() => {
    const list = MOOLS_DATA.map(mool => mool.originVillage.split(' (')[0].trim());
    return ['All', ...Array.from(new Set(list))];
  }, []);

  // Filtered Clans dataset
  const filteredMools = useMemo(() => {
    return MOOLS_DATA.filter((mool) => {
      // 1. Text search
      const query = searchQuery.toLowerCase();
      const matchesSearch = 
        mool.moolName.toLowerCase().includes(query) ||
        mool.purushName.toLowerCase().includes(query) ||
        mool.originVillage.toLowerCase().includes(query) ||
        mool.region.toLowerCase().includes(query) ||
        mool.description.toLowerCase().includes(query) ||
        mool.keyFamilies.some(fam => fam.toLowerCase().includes(query));

      // 2. Region selection
      const matchesRegion = selectedRegion === 'All' || mool.region.includes(selectedRegion);

      // 3. Origin village selection
      const matchesVillage = selectedOriginVillage === 'All' || mool.originVillage.includes(selectedOriginVillage);

      return matchesSearch && matchesRegion && matchesVillage;
    });
  }, [searchQuery, selectedRegion, selectedOriginVillage]);

  return (
    <div id="mools-registry-plane" className="bg-bg pt-28 pb-20 transition-colors duration-300">
      
      {/* 1. Section Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12">
        <div className="border-b border-white/5 pb-6">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-gold block mb-2">
            Genealogical Records
          </span>
          <h1 className="text-4xl md:text-5xl font-display text-text-primary tracking-tight font-medium">
            Gotras, Mools &amp; Lineages
          </h1>
          <p className="text-sm font-sans text-text-secondary max-w-2xl mt-3 leading-relaxed font-light">
            This directory details gotras, ancestral lineages (Mools), legendary founders (Adipurush), and historical estates across traditional territories.
          </p>
        </div>
      </div>

      {/* 2. Search & Filters Toolbar */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-10">
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Query lineage name, founding ancestor, village, or manor estate..."
          categories={['Magadh', 'Mithila', 'Saran', 'Gorakhpur']}
          activeCategory={selectedRegion}
          onCategoryChange={setSelectedRegion}
          suggestions={['Eksaria', 'Kinwar', 'Donwar', 'Sursand Raj', 'Bettiah Raj']}
          onSuggestionClick={setSearchQuery}
        />
      </div>

      {/* 3. Main Data Matrix Space */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row gap-8">
        
        {/* Sidebar Controls (Desktop) */}
        <aside className="w-full lg:w-3/12 space-y-6">
          
          {/* Mobile Filters Toggle trigger */}
          <button
            onClick={() => setShowFiltersMobile(!showFiltersMobile)}
            className="w-full lg:hidden py-3 px-4 bg-surface border border-border-custom hover:border-gold/30 rounded text-xs font-display tracking-widest text-[#F8F6F2] hover:text-gold flex items-center justify-between transition-all"
          >
            <span className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              SEARCH FILTERS
            </span>
            <span>{showFiltersMobile ? 'HIDE' : 'EXPAND'}</span>
          </button>

          <div className={`space-y-6 ${showFiltersMobile ? 'block' : 'hidden lg:block'}`}>
            
            {/* Filter Group: Territorial Region */}
            <div className="bg-surface border border-border-custom p-5 rounded-md space-y-4">
              <div className="flex items-center gap-2 pb-2.5 border-b border-white/5">
                <Landmark className="w-4 h-4 text-gold stroke-[1.5]" />
                <h4 className="text-xs font-display uppercase tracking-widest text-text-primary">
                  Historical Region
                </h4>
              </div>
              <div className="space-y-1.5">
                {['All', 'Magadh', 'Mithila', 'Saran', 'Gorakhpur'].map((region) => (
                  <button
                    key={region}
                    onClick={() => setSelectedRegion(region)}
                    className={`flex items-center justify-between w-full p-2.5 rounded text-left text-xs transition-colors ${
                      selectedRegion === region
                        ? 'bg-gold/10 border-l-2 border-gold text-gold font-bold'
                        : 'bg-zinc-950/40 text-text-secondary border-l-2 border-transparent hover:bg-surface hover:text-[#F8F6F2]'
                    }`}
                  >
                    <span>{region === 'All' ? 'All Territories' : `${region} Plain`}</span>
                    {selectedRegion === region && <Check className="w-3.5 h-3.5" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Filter Group: Ancestral Village */}
            <div className="bg-surface border border-border-custom p-5 rounded-md space-y-4">
              <div className="flex items-center gap-2 pb-2.5 border-b border-white/5">
                <MapPin className="w-4 h-4 text-gold stroke-[1.5]" />
                <h4 className="text-xs font-display uppercase tracking-widest text-text-primary">
                  Ancestral Villages
                </h4>
              </div>
              <div className="relative">
                <select
                  value={selectedOriginVillage}
                  onChange={(e) => setSelectedOriginVillage(e.target.value)}
                  className="w-full bg-zinc-950/80 border border-border-custom p-2.5 text-xs text-text-secondary rounded focus:border-gold focus:outline-none"
                >
                  <option value="All">All Villages ({originVillages.length - 1} total)</option>
                  {originVillages.filter(v => v !== 'All').map((village) => (
                    <option key={village} value={village}>
                      {village}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Reference sources sidebar card */}
            <div className="bg-gradient-to-br from-surface to-bg border border-border-custom p-5 rounded-md">
              <span className="text-[9px] font-mono uppercase tracking-widest text-bronze block mb-1">
                Archival Reference
              </span>
              <p className="text-[11px] font-sans text-text-secondary leading-relaxed">
                Lineage data is curated from regional gazetteers, traditional gotra records, and Swami Sahajanand Saraswati's 1938 classic "Bhumihar Brahmin Parichay."
              </p>
            </div>

          </div>
        </aside>

        {/* Core database grid (strictly NO tables, beautiful card styling as requested) */}
        <div className="flex-1">
          <div className="flex justify-between items-baseline mb-6">
            <p className="text-xs font-mono text-text-secondary/70">
              Found <strong className="text-text-primary">{filteredMools.length}</strong> matching lineages in database
            </p>
            {searchQuery || selectedRegion !== 'All' || selectedOriginVillage !== 'All' ? (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedRegion('All');
                  setSelectedOriginVillage('All');
                }}
                className="text-xs font-mono text-gold/80 hover:text-gold hover:underline"
              >
                Clear parameters
              </button>
            ) : null}
          </div>

          <AnimatePresence mode="popLayout">
            {filteredMools.length > 0 ? (
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                layout
              >
                {filteredMools.map((mool, index) => (
                  <motion.div
                    key={mool.id}
                    layoutId={`mool-card-${mool.id}`}
                    className="group bg-surface border border-border-custom rounded-lg p-6 hover:border-gold/30 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div>
                      {/* Name and region banner */}
                      <div className="flex justify-between items-start gap-4 mb-3 border-b border-white/5 pb-2.5">
                        <h3 className="text-2xl font-display text-text-primary group-hover:text-gold transition-colors">
                          {mool.moolName} Clan
                        </h3>
                        <span className="text-[10px] font-mono text-gold bg-gold/10 px-2 py-0.5 rounded uppercase tracking-wide">
                          {mool.region}
                        </span>
                      </div>

                      {/* Lineage facts */}
                      <div className="space-y-1.5 mb-4">
                        <div className="flex items-center gap-2 text-xs text-text-secondary">
                          <Users className="w-4 h-4 text-bronze shrink-0" />
                          <span>Founding Ancestor (Adipurush): <strong className="text-text-primary/95">{mool.purushName}</strong></span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-text-secondary">
                          <MapPin className="w-4 h-4 text-bronze shrink-0" />
                          <span>Ancestral Village: <span className="italic">{mool.originVillage}</span></span>
                        </div>
                      </div>

                      {/* Description narrative */}
                      <p className="text-xs font-sans text-text-secondary/90 leading-relaxed mb-4">
                        {mool.description}
                      </p>

                      {/* Associated Landlord Mansions */}
                      <div className="space-y-1.5 mb-6">
                        <span className="text-[9px] font-mono text-text-secondary/60 uppercase tracking-widest block">
                          Associated Historical Estates
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {mool.keyFamilies.map((fam, idx) => (
                            <span 
                              key={idx} 
                              className="text-[11px] font-sans bg-zinc-950 text-text-secondary border border-border-custom/80 px-2 py-1 rounded"
                            >
                              {fam}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Sourced book cite inside card directly */}
                    <div className="border-t border-border-custom/50 pt-4">
                      {mool.historicalCitations.map((cite, i) => (
                        <ResearchCitation key={i} text={cite} id={`cite-sub-${mool.id}-${i}`} />
                      ))}
                    </div>

                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                className="bg-surface border border-border-custom rounded-lg p-12 text-center space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <p className="text-sm font-sans text-text-secondary/70">
                  No registered lineages fit those parameters. Try searching "Eksaria" or clearing historical regions.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedRegion('All');
                    setSelectedOriginVillage('All');
                  }}
                  className="px-5 py-2 bg-gold text-bg text-xs font-display font-bold uppercase tracking-wider rounded"
                >
                  Clear search filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>

    </div>
  );
}
