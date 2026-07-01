import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, BookOpen, Quote, Sparkles, X, Milestone } from 'lucide-react';
import { HistoricalFigure } from '../types';
import ResearchCitation from './ResearchCitation';

interface FeaturedPersonCardProps {
  figure: HistoricalFigure;
  id: string;
  key?: any;
}

export default function FeaturedPersonCard({ figure, id }: FeaturedPersonCardProps) {
  const [showFullBio, setShowFullBio] = useState(false);

  return (
    <>
      <motion.div
        id={`featured-figure-${id}`}
        className="group bg-surface border border-border-custom rounded-lg overflow-hidden flex flex-col md:flex-row shadow-2xl hover:border-gold/30 transition-all duration-300"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        {/* Left Side: Portrait Design */}
        <div className="relative w-full md:w-2/5 h-64 md:h-auto min-h-[300px] bg-zinc-950 overflow-hidden flex flex-col justify-end">
          {/* Subtle design guidelines - golden lines overlay */}
          <div className="absolute inset-0 z-10 opacity-30 pointer-events-none border-[12px] border-surface" />
          <div className="absolute inset-y-0 left-12 w-px bg-gold/10 z-10 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-24 h-px bg-gold/10 z-10 pointer-events-none" />

          {/* Real image if loaded, with museum monochrome overlay grading */}
          <img
            src={figure.portraitUrl}
            alt={figure.name}
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100"
          />

          {/* Gradients to black out the text container area */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0F] via-[#0B0D0F]/40 to-transparent z-10" />

          {/* Internal relative overlay details */}
          <div className="relative p-6 z-20">
            <span className="text-[9px] font-sans font-medium uppercase tracking-widest text-gold bg-gold/10 px-2 py-1 rounded inline-block mb-2">
              {figure.era} Pioneer
            </span>
            <p className="text-xs font-mono text-text-secondary">
              Lifespan: {figure.lifespan}
            </p>
            {figure.moolConnection && (
              <p className="text-xs font-mono text-gold/80 flex items-center gap-1 mt-1">
                <Milestone className="w-3.5 h-3.5" />
                <span>Lineage: {figure.moolConnection}</span>
              </p>
            )}
          </div>
        </div>

        {/* Right Side: Information Matrix */}
        <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <h3 className="text-2xl md:text-3xl font-display text-text-primary tracking-tight">
                {figure.name}
              </h3>
              <p className="text-xs text-bronze uppercase tracking-widest font-sans font-semibold">
                {figure.role}
              </p>
            </div>

            {/* Quote aesthetic */}
            <div className="relative mb-6 pl-6 border-l-2 border-gold/30">
              <Quote className="absolute left-1 top-0 w-4 h-4 text-gold/20 -translate-x-full" />
              <p className="text-sm font-sans italic text-text-secondary leading-relaxed">
                {figure.bioSnippet}
              </p>
            </div>

            {/* Achievements List */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-xs font-display uppercase tracking-widest text-text-primary/70">
                <Award className="w-4 h-4 text-gold" />
                <span>Selected Accomplishments</span>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {figure.achievements.map((achievement, index) => (
                  <li 
                    key={index} 
                    className="flex items-start gap-2.5 text-xs text-text-secondary bg-surface/50 p-2.5 rounded border border-border-custom hover:border-gold/10 transition-colors"
                  >
                    <Sparkles className="w-3 h-3 text-gold/80 mt-0.5 shrink-0" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Timeline snippet context */}
            <div className="bg-zinc-950/40 p-3.5 rounded border border-border-custom mb-4 flex items-start gap-2.5">
              <BookOpen className="w-4 h-4 text-bronze mt-0.5 shrink-0" />
              <div>
                <span className="text-[10px] font-sans uppercase tracking-widest text-text-secondary block">Historical Episode Snapshot</span>
                <p className="text-xs font-sans text-text-secondary/95 mt-0.5">{figure.timelineSnippet}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-border-custom">
            <span className="text-[11px] font-mono text-text-secondary/50">
              Document reference checked by archive board
            </span>
            <button
              onClick={() => setShowFullBio(true)}
              className="w-full sm:w-auto text-xs font-display uppercase tracking-widest bg-gold hover:bg-gold-hover text-bg px-5 py-2.5 rounded font-bold transition-all duration-300 shadow-lg hover:shadow-gold/15"
            >
              Examine Detailed Biography
            </button>
          </div>
        </div>
      </motion.div>

      {/* Full Biography Overlay Modal */}
      <AnimatePresence>
        {showFullBio && (
          <motion.div
            id={`modal-overlay-${id}`}
            className="fixed inset-0 bg-[#0B0D0F]/90 backdrop-blur-md flex items-center justify-center z-50 p-4 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              id={`modal-content-${id}`}
              className="bg-surface border border-border-custom p-6 md:p-10 rounded-lg max-w-3xl w-full max-h-[85vh] overflow-y-auto relative shadow-2xl"
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowFullBio(false)}
                className="absolute top-6 right-6 p-1.5 rounded-full bg-zinc-900 border border-border-custom text-text-secondary hover:text-white transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Research Heading */}
              <div className="gold-gradient-border pb-6 mb-6">
                <span className="text-[10px] font-mono tracking-widest text-gold uppercase block mb-1">
                  SCHOLARLY BIOGRAPHIES &amp; RECORDS
                </span>
                <h2 className="text-3xl font-display text-text-primary">
                  {figure.name}
                </h2>
                <p className="text-sm font-sans text-gold/80 italic mt-1">
                  {figure.role} ({figure.lifespan})
                </p>
              </div>

              {/* Research Core Body */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-display uppercase tracking-widest text-text-primary/70 mb-2">
                    Comprehensive Biography Description
                  </h4>
                  <p className="font-research text-base italic text-text-primary/95 leading-relaxed bg-[#0B0D0F]/40 p-5 rounded border border-border-custom">
                    {figure.fullBio}
                  </p>
                </div>

                {/* Personal Anecdote Section */}
                {figure.personalAnecdote && (
                  <div className="border-l-3 border-gold pl-4 py-2">
                    <h4 className="text-xs font-display uppercase tracking-widest text-gold mb-2">
                      Personal Account from History
                    </h4>
                    <p className="font-research text-sm italic text-text-secondary/95 leading-relaxed">
                      "{figure.personalAnecdote}"
                    </p>
                    <p className="text-[10px] font-mono text-gold/60 uppercase tracking-wider mt-2">
                      — Documented Local Testimony
                    </p>
                  </div>
                )}

                {/* Family Story Section */}
                {figure.familyStory && (
                  <div className="border-l-3 border-bronze pl-4 py-2">
                    <h4 className="text-xs font-display uppercase tracking-widest text-bronze mb-2">
                      Family Legacy & Personal Choices
                    </h4>
                    <p className="font-research text-sm italic text-text-secondary/95 leading-relaxed">
                      "{figure.familyStory}"
                    </p>
                    <p className="text-[10px] font-mono text-bronze/60 uppercase tracking-wider mt-2">
                      — Family Records & Oral History
                    </p>
                  </div>
                )}

                {/* Interesting Fact */}
                {figure.interestingFact && (
                  <div className="bg-gold/5 border border-gold/20 rounded p-4">
                    <h4 className="text-xs font-display uppercase tracking-widest text-gold mb-2 flex items-center gap-2">
                      <span className="text-lg">✦</span> Fascinating Detail
                    </h4>
                    <p className="text-sm text-text-secondary/95 leading-relaxed">
                      {figure.interestingFact}
                    </p>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xs font-display uppercase tracking-widest text-text-primary/70 mb-2">
                      Formal Commendations & Deeds
                    </h4>
                    <ul className="space-y-2">
                      {figure.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex gap-2 text-xs text-text-secondary leading-relaxed">
                          <span className="text-gold">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-display uppercase tracking-widest text-text-primary/70 mb-2">
                      Lineage Roots & Registry Citation
                    </h4>
                    <div className="space-y-2.5">
                      {figure.moolConnection && (
                        <div className="flex items-center gap-2 text-xs text-text-secondary bg-zinc-950 p-2.5 rounded border border-border-custom">
                          <Milestone className="w-4 h-4 text-gold shrink-0" />
                          <span>Hereditary Clan Branch: <strong>{figure.moolConnection}</strong></span>
                        </div>
                      )}
                      
                      <div className="bg-zinc-950 p-3 rounded border border-border-custom">
                        <span className="text-[9px] font-mono uppercase tracking-widest text-bronze block mb-1">Archival Citation Source</span>
                        <p className="text-[11px] font-mono text-text-secondary leading-relaxed font-semibold">
                          {figure.citation}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <ResearchCitation text={figure.citation} />
              </div>

              {/* Modal Footer */}
              <div className="mt-8 pt-6 border-t border-border-custom flex justify-end">
                <button
                  onClick={() => setShowFullBio(false)}
                  className="px-6 py-2 bg-zinc-900 border border-border-custom text-xs font-display tracking-widest uppercase hover:bg-zinc-800 transition-colors text-text-secondary rounded"
                >
                  Return to Archive
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
