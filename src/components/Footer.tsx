import React, { useState } from 'react';
import { Landmark, ArrowUp, Send, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  id?: string;
  setActiveTab: (tab: string) => void;
}

export default function Footer({ id, setActiveTab }: FooterProps) {
  const [emailValue, setEmailValue] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailValue) return;
    setIsSubscribed(true);
    setTimeout(() => {
      setIsSubscribed(false);
      setEmailValue('');
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id={id || "archives-institutional-footer"}
      className="bg-bg border-t border-border-custom relative z-10 transition-colors duration-300"
    >
      {/* Upper part: Institutional Links & Newsletter */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        
        {/* Column 1: Archival Manifesto */}
        <div className="space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 bg-gold/10 border border-gold/30">
              <Landmark className="w-5 h-5 text-gold" />
            </div>
            <span className="font-display font-bold tracking-tight text-text-primary uppercase text-base">
              Babhan Bhumihar
            </span>
          </div>
          <p className="font-sans text-xs text-text-secondary leading-relaxed">
            This archive is a labor of love—dedicated to preserving the real stories of real people who shaped our history. From freedom fighters to poets, from philanthropists to peasant leaders, every life recorded here carries the pulse of our heritage.
          </p>
          <p className="text-[10px] font-mono text-gold/80 italic">
            "Built by community members, for communities yet to know their roots."
          </p>
        </div>

        {/* Column 2: Archive Sections */}
        <div>
          <h4 className="text-[11px] font-mono uppercase tracking-[0.18em] text-gold mb-4">
            Archive Sections
          </h4>
          <ul className="space-y-2.5 text-xs text-text-secondary">
            <li>
              <button 
                onClick={() => { setActiveTab('origins'); scrollToTop(); }} 
                className="hover:text-gold transition-colors focus:outline-none select-none cursor-pointer"
              >
                Origins &amp; Settlements
              </button>
            </li>
            <li>
              <button 
                onClick={() => { setActiveTab('mools'); scrollToTop(); }} 
                className="hover:text-gold transition-colors focus:outline-none select-none cursor-pointer"
              >
                Mools &amp; Gotras
              </button>
            </li>
            <li>
              <button 
                onClick={() => { setActiveTab('figures'); scrollToTop(); }} 
                className="hover:text-gold transition-colors focus:outline-none select-none cursor-pointer"
              >
                Biographies
              </button>
            </li>
            <li>
              <button 
                onClick={() => { setActiveTab('timeline'); scrollToTop(); }} 
                className="hover:text-gold transition-colors focus:outline-none select-none cursor-pointer"
              >
                Historical Timeline
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Academic Resources */}
        <div>
          <h4 className="text-[11px] font-mono uppercase tracking-[0.18em] text-text-secondary mb-4">
            RESOURCES &amp; TEXTS
          </h4>
          <ul className="space-y-2.5 text-xs text-text-secondary">
            <li>
              <button 
                onClick={() => { setActiveTab('archive'); scrollToTop(); }} 
                className="hover:text-gold transition-colors focus:outline-none select-none cursor-pointer"
              >
                Archive Library
              </button>
            </li>
            <li>
              <button 
                onClick={() => { setActiveTab('community'); scrollToTop(); }} 
                className="hover:text-gold transition-colors focus:outline-none select-none cursor-pointer"
              >
                Historical Milestones
              </button>
            </li>
            <li>
              <a 
                href="#bibliography" 
                onClick={() => { setActiveTab('archive'); scrollToTop(); }}
                className="hover:text-gold transition-colors select-none cursor-pointer"
              >
                Published Bibliography
              </a>
            </li>
            <li>
              <span className="text-text-secondary/40 line-through cursor-not-allowed select-none">
                Historical Society Library
              </span>
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter Sign up */}
        <div>
          <h4 className="text-[11px] font-mono uppercase tracking-[0.18em] text-gold mb-4">
            SUBSCRIBE TO JOURNAL
          </h4>
          <p className="font-sans text-xs text-text-secondary leading-relaxed mb-4">
            Sign up to receive periodic transcripts, newly charted Mools, and editorial bulletins from the board.
          </p>
          <form onSubmit={handleSubscribe} className="space-y-2.5 relative">
            <div className="flex">
              <input
                type="email"
                placeholder="archivist@heritage.org"
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
                disabled={isSubscribed}
                className="flex-1 px-3 py-2 bg-surface border border-border-custom hover:border-gold/20 focus:border-gold focus:outline-none text-xs text-text-primary"
              />
              <button
                type="submit"
                disabled={isSubscribed}
                className="bg-gold hover:bg-gold-hover text-bg px-3 transition-colors flex items-center justify-center"
                aria-label="Submit email for newsletter subscription"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
            
            {/* Custom confirmation banner */}
            {isSubscribed && (
              <div className="flex items-center gap-2 text-[10px] text-emerald-400 font-mono bg-emerald-950/20 p-2 border border-emerald-900/40 animate-fade-in absolute left-0 right-0 top-full mt-2">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>Subscribed! Access transcripts shortly.</span>
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Lower part: Legal Disclaimers & Top trigger */}
      <div className="border-t border-border-custom bg-surface/50 py-8 relative transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-center sm:text-left space-y-1">
            <p className="text-[11px] font-mono text-text-secondary">
              (c) {new Date().getFullYear()} Babhan Bhumihar Heritage Archive & Technical Trust. Public Non-profit Entity.
            </p>
            <p className="text-[10px] font-sans text-text-secondary/80 leading-normal max-w-2xl">
              All photographic profiles, lineage transcripts, maps, and texts are indexed for historical preservation under Fair Use guidelines. No administrative affiliation with individual political divisions.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 border border-border-custom hover:border-gold bg-surface text-text-secondary hover:text-text-primary transition-all flex items-center gap-2 text-xs font-mono select-none"
            aria-label="Back to top"
          >
            <span>TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
