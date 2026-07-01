import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Book, FileText, Compass, Calendar, Bookmark, Quote, ChevronDown, ChevronUp } from 'lucide-react';
import { ArchiveDocument } from '../types';
import ResearchCitation from './ResearchCitation';

interface ArchiveCardProps {
  document: ArchiveDocument;
  id: string;
  onSelectTag?: (tag: string) => void;
  selectedTags?: string[];
  key?: any;
}

export default function ArchiveCard({ document, id, onSelectTag, selectedTags = [] }: ArchiveCardProps) {
  const [isExcerptExpanded, setIsExcerptExpanded] = useState(false);

  const getMediaIcon = (type: string) => {
    switch (type) {
      case 'Book':
        return <Book className="w-4 h-4 text-gold" />;
      case 'Research Paper':
        return <FileText className="w-4 h-4 text-emerald-400" />;
      case 'Manuscript':
        return <Compass className="w-4 h-4 text-amber-400" />;
      default:
        return <Bookmark className="w-4 h-4 text-blue-400" />;
    }
  };

  return (
    <motion.div
      id={`archive-card-${id}`}
      className="bg-surface border border-border-custom p-6 hover:border-gold/35 transition-all duration-300 flex flex-col justify-between quiet-card"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div>
        {/* Header Metadata */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 mb-3 pb-2.5 border-b border-border-custom/50">
          <div className="flex items-center gap-2">
            <span className="p-1 bg-bg/70 border border-border-custom flex items-center justify-center">
              {getMediaIcon(document.type)}
            </span>
            <span className="text-[10px] font-sans font-medium uppercase tracking-[0.16em] text-text-secondary">
              {document.type}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-text-secondary/80 font-mono">
            <Calendar className="w-3.5 h-3.5 text-bronze" />
            <span>Circa {document.year}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-display text-text-primary mb-1.5 leading-snug">
          {document.title}
        </h3>

        {/* Authors and Source */}
        <p className="text-xs font-sans text-gold/80 mb-3">
          By <strong className="font-semibold text-text-primary/90">{document.author}</strong> - preserved in <span className="italic">{document.source}</span>
        </p>

        {/* Description */}
        <p className="text-xs font-sans text-text-secondary leading-relaxed mb-4">
          {document.description}
        </p>

        {/* Search Tag badges */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {document.tags.map((tag) => {
            const isSelected = selectedTags.includes(tag);
            return (
              <button
                key={tag}
                onClick={() => onSelectTag?.(tag)}
                className={`text-[9px] font-mono uppercase tracking-wider px-2.5 py-1 rounded transition-colors ${
                  isSelected
                    ? 'bg-gold text-bg font-bold border border-gold'
                    : 'bg-bg/70 text-text-secondary border border-border-custom hover:border-gold/20'
                }`}
              >
                #{tag}
              </button>
            );
          })}
        </div>
      </div>

      {/* Excerpt Accordion */}
      <div className="mt-2">
        <button
          onClick={() => setIsExcerptExpanded(!isExcerptExpanded)}
          className="w-full flex items-center justify-between text-xs font-sans tracking-[0.16em] uppercase py-2 px-3 bg-bg/70 hover:bg-surface border border-border-custom hover:border-gold/20 transition-all text-text-secondary/80 hover:text-gold"
        >
          <span>{isExcerptExpanded ? 'Hide Excerpt' : 'Read Excerpt'}</span>
          {isExcerptExpanded ? <ChevronUp className="w-4 h-4 ml-2" /> : <ChevronDown className="w-4 h-4 ml-2" />}
        </button>

        <AnimatePresence>
          {isExcerptExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="pt-4 border-t border-border-custom/50 mt-2 space-y-4">
                {/* Visual quote section */}
                <div className="bg-bg/70 p-4 border-l border-gold/40 relative">
                  <Quote className="absolute right-3 bottom-2 w-10 h-10 text-gold/5 pointer-events-none" />
                  <p className="font-research text-xs italic text-text-primary leading-relaxed">
                    "{document.snippet}"
                  </p>
                </div>

                <ResearchCitation text={document.citation} id={`doc-citation-${id}`} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
