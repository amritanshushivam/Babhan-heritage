import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, FolderOpen, Heart, Info, Check, Filter } from 'lucide-react';
import ArchiveCard from '../ArchiveCard';
import { ARCHIVE_DOCUMENTS } from '../../data';

export default function ArchiveView() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDocType, setSelectedDocType] = useState<string>('All');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Collect all unique tags for rapid filter keys
  const availableTags = useMemo(() => {
    const tagsSet = new Set<string>();
    ARCHIVE_DOCUMENTS.forEach((doc) => {
      doc.tags.forEach((t) => tagsSet.add(t));
    });
    return Array.from(tagsSet);
  }, []);

  const documentTypes = ['All', 'Book', 'Research Paper', 'Manuscript', 'Historical Record'];

  // Handle clicking or removing tag selection
  const handleToggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const filteredDocs = useMemo(() => {
    return ARCHIVE_DOCUMENTS.filter((doc) => {
      // 1. Filter by keyword search query
      const query = searchQuery.toLowerCase();
      const matchesSearch = 
        doc.title.toLowerCase().includes(query) ||
        doc.author.toLowerCase().includes(query) ||
        doc.description.toLowerCase().includes(query) ||
        doc.snippet.toLowerCase().includes(query) ||
        doc.source.toLowerCase().includes(query) ||
        doc.tags.some(tag => tag.toLowerCase().includes(query));

      // 2. Filter by document medium category
      const matchesType = selectedDocType === 'All' || doc.type === selectedDocType;

      // 3. Filter by selected tags intersection
      const matchesTags = 
        selectedTags.length === 0 || 
        selectedTags.every((t) => doc.tags.includes(t));

      return matchesSearch && matchesType && matchesTags;
    });
  }, [searchQuery, selectedDocType, selectedTags]);

  return (
    <div id="digital-library-plane" className="bg-bg pt-28 pb-20 transition-colors duration-300">
      
      {/* 1. Page Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12">
        <div className="border-b border-white/5 pb-6">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-gold block mb-2">
            Archival Library
          </span>
          <h1 className="text-4xl md:text-5xl font-display text-text-primary tracking-tight font-medium">
            Literature &amp; Historical Archives
          </h1>
          <p className="text-sm font-sans text-text-secondary max-w-2xl mt-3 leading-relaxed font-light">
            Browse our historical literature collection containing books, research papers, regional manuscripts, and key historical records.
          </p>
        </div>
      </div>

      {/* 2. Interactive Search & Tag filter toolbar */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-10 space-y-6">
        
        {/* Advanced search line */}
        <div className="bg-surface border border-border-custom p-4 md:p-6 rounded-lg shadow-xl">
          <div className="flex flex-col md:flex-row gap-4">
            
            {/* Textbook Input */}
            <div className="flex-1">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search catalog by title, author, or keyword..."
                className="w-full bg-zinc-950 border border-border-custom hover:border-gold/20 focus:border-gold focus:outline-none px-4 py-2.5 rounded text-xs text-text-primary font-sans placeholder:text-text-secondary/50 transition-colors"
              />
            </div>

            {/* MediaType Dropdown picker */}
            <div className="w-full md:w-56">
              <select
                value={selectedDocType}
                onChange={(e) => setSelectedDocType(e.target.value)}
                className="w-full bg-zinc-950 border border-border-custom p-2.5 rounded text-xs text-text-primary focus:border-gold focus:outline-none cursor-pointer"
              >
                <option value="All">All Formats</option>
                {documentTypes.filter(t => t !== 'All').map((type) => (
                  <option key={type} value={type}>
                    {type}s Only
                  </option>
                ))}
              </select>
            </div>

          </div>

          {/* Quick tags index */}
          <div className="mt-4 pt-4 border-t border-white/5 flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-text-secondary/60">
              Narrow by index tags:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {availableTags.map((tag) => {
                const isActive = selectedTags.includes(tag);
                return (
                  <button
                    key={tag}
                    onClick={() => handleToggleTag(tag)}
                    className={`text-[9px] font-mono uppercase tracking-wider px-2.5 py-1 rounded transition-colors flex items-center gap-1 ${
                      isActive
                        ? 'bg-gold text-bg font-bold border border-gold shadow-lg shadow-gold/15'
                        : 'bg-zinc-950 text-text-secondary border border-border-custom hover:border-gold/20'
                    }`}
                  >
                    <span>#{tag}</span>
                    {isActive && <Check className="w-2.5 h-2.5 stroke-[3.5]" />}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

      </div>

      {/* 3. Main Catalog Card Display */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Dynamic status count bar */}
        <div className="flex justify-between items-baseline mb-6 border-b border-white/5 pb-2">
          <p className="text-xs font-mono text-text-secondary">
            Displaying: <strong className="text-text-primary">{filteredDocs.length}</strong> volumes found
          </p>
          {(searchQuery || selectedDocType !== 'All' || selectedTags.length > 0) && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedDocType('All');
                setSelectedTags([]);
              }}
              className="text-xs font-mono text-gold/80 hover:text-gold hover:underline"
            >
              Reset active filters
            </button>
          )}
        </div>

        {/* List mapping */}
        <AnimatePresence mode="popLayout">
          {filteredDocs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredDocs.map((doc, index) => (
                <ArchiveCard
                  key={doc.id}
                  id={doc.id}
                  document={doc}
                  selectedTags={selectedTags}
                  onSelectTag={handleToggleTag}
                />
              ))}
            </div>
          ) : (
            <div className="bg-surface border border-border-custom p-16 rounded-lg text-center max-w-2xl mx-auto space-y-4">
              <FolderOpen className="w-8 h-8 text-gold mx-auto stroke-[1.25]" />
              <h3 className="text-base font-display text-text-primary">No Documents Found</h3>
              <p className="text-xs font-sans text-text-secondary/70">
                We couldn't find any documents matching your current filters. Please try adapting your search query or tags.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedDocType('All');
                  setSelectedTags([]);
                }}
                className="px-5 py-2 text-xs font-mono bg-gold text-bg rounded uppercase font-bold"
              >
                Restore Full Catalog
              </button>
            </div>
          )}
        </AnimatePresence>

      </div>

    </div>
  );
}
