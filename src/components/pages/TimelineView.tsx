import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, BookOpen, Sparkles, ChevronDown, ChevronUp, Milestone } from 'lucide-react';
import ResearchCitation from '../ResearchCitation';
import { TIMELINE_EVENTS } from '../../data';

export default function TimelineView() {
  const [selectedEra, setSelectedEra] = useState<'All' | 'Ancient' | 'Medieval' | 'Colonial' | 'Modern'>('All');
  const [expandedEventId, setExpandedEventId] = useState<string | null>('event-ancient-origins'); // Default open first item

  const filteredEvents = useMemo(() => {
    return TIMELINE_EVENTS.filter((evt) => {
      return selectedEra === 'All' || evt.era === selectedEra;
    });
  }, [selectedEra]);

  const toggleEventExpand = (id: string) => {
    if (expandedEventId === id) {
      setExpandedEventId(null);
    } else {
      setExpandedEventId(id);
    }
  };

  return (
    <div id="interactive-timeline-plane" className="bg-bg pt-28 pb-20 transition-colors duration-300">
      
      {/* 1. Page Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12">
        <div className="border-b border-white/5 pb-6">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-gold block mb-2">
            Chronology of Events
          </span>
          <h1 className="text-4xl md:text-5xl font-display text-text-primary tracking-tight font-medium">
            Historical Timeline
          </h1>
          <p className="text-sm font-sans text-text-secondary max-w-2xl mt-3 leading-relaxed font-light">
            A chronological journey through the community's history, spanning centuries of developments, literary achievements, agricultural tenures, and social reforms.
          </p>
        </div>
      </div>

      {/* 2. Era Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-16 flex justify-center">
        <div className="flex flex-wrap gap-2 bg-surface/30 p-1.5 rounded-full border border-border-custom">
          {['All', 'Ancient', 'Medieval', 'Colonial', 'Modern'].map((era) => (
            <button
              key={era}
              onClick={() => setSelectedEra(era as any)}
              className={`px-4 py-1.5 rounded-full text-xs font-display tracking-widest uppercase transition-all duration-350 select-none ${
                selectedEra === era
                  ? 'bg-gold text-bg font-bold shadow-lg shadow-gold/25'
                  : 'text-text-secondary hover:text-white hover:bg-white/5'
              }`}
            >
              {era} Era
            </button>
          ))}
        </div>
      </div>

      {/* 3. Core Vertical Thread */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 relative">
        
        {/* The center solid cord line */}
        <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-px bg-white/10 -translate-x-1/2" />
        
        {/* Dynamic Items mapping */}
        <div className="space-y-12">
          {filteredEvents.map((event, index) => {
            const isExpanded = expandedEventId === event.id;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={event.id}
                className={`relative flex flex-col md:flex-row md:justify-between items-start md:items-center ${
                  isEven ? '' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5 }}
              >
                {/* 1. Bullet checkpoint node on line */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full border-2 border-gold bg-bg -translate-x-1/2 z-20 outline-4 outline-bg" />

                {/* 2. Responsive Side Card content */}
                <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                  
                  {/* Years Bubble */}
                  <div className={`flex items-center gap-2 mb-2 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                    <span className="text-xs font-mono text-gold bg-gold/10 border border-gold/20 px-2.5 py-0.5 rounded font-bold">
                      {event.year}
                    </span>
                    <span className="text-[10px] font-mono tracking-wider uppercase text-text-secondary">
                      {event.era} Era
                    </span>
                  </div>

                  {/* Title and Short Description */}
                  <h3 className="text-xl font-display text-text-primary mb-2">
                    {event.title}
                  </h3>
                  <p className="text-xs font-sans text-text-secondary leading-relaxed mb-4">
                    {event.shortDescription}
                  </p>

                  {/* Accordion Toggle */}
                  <button
                    onClick={() => toggleEventExpand(event.id)}
                    className={`inline-flex items-center gap-1.5 text-[11px] font-display uppercase tracking-widest py-1.5 px-3 rounded bg-surface border border-border-custom hover:border-gold/30 hover:text-gold transition-colors select-none ${
                      isEven ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    <span>{isExpanded ? 'Collapse Details' : 'Read Narrative'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  {/* Open details Accordion */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden mt-3"
                      >
                        <div className={`p-4 bg-surface border border-gold/10 rounded-lg text-left space-y-4 ${
                          isEven ? 'md:text-left' : ''
                        }`}>
                          
                          {/* Long description text */}
                          <div>
                            <span className="text-[9px] font-mono uppercase tracking-widest text-gold block mb-1">
                              Expanded Historical Context
                            </span>
                            <p className="font-sans text-xs text-text-primary/95 leading-relaxed bg-[#0B0D0F]/40 p-3 rounded border border-border-custom">
                              {event.detailedDescription}
                            </p>
                          </div>

                          {/* Historical Significance block */}
                          <div className="space-y-1">
                            <span className="text-[9px] font-mono uppercase tracking-widest text-bronze block">
                              Socio-Cultural Significance
                            </span>
                            <p className="text-xs font-sans text-text-secondary">
                              {event.significance}
                            </p>
                          </div>

                          {/* Sourced documentation link */}
                          <div className="pt-2 border-t border-border-custom/50">
                            <ResearchCitation text={event.citation} id={`timeline-cite-${event.id}`} />
                          </div>

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>

                {/* 3. Empty counterpart space (for deskop left-right grid symmetry) */}
                <div className="hidden md:block w-[45%]" />

              </motion.div>
            );
          })}
        </div>

      </div>

    </div>
  );
}
