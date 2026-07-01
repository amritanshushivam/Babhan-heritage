import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Landmark, Search, Award, Compass, BookOpen, Clock, Users2, LandmarkIcon, Sun, Moon } from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  id?: string;
  onSearchClick?: () => void;
  theme?: 'dark' | 'light';
  toggleTheme?: () => void;
}

export default function Navigation({ activeTab, setActiveTab, id, onSearchClick, theme, toggleTheme }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: Landmark },
    { id: 'origins', label: 'Origins', icon: Compass },
    { id: 'mools', label: 'Mools & Gotras', icon: LandmarkIcon },
    { id: 'figures', label: 'Biographies', icon: Award },
    { id: 'timeline', label: 'Timeline', icon: Clock },
    { id: 'archive', label: 'Library', icon: BookOpen },
    { id: 'community', label: 'Contributions', icon: Users2 }
  ];

  return (
    <nav
      id={id || "main-navigation"}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-bg/90 backdrop-blur-md border-border-custom py-3' 
          : 'bg-bg/35 backdrop-blur-[2px] border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        
        {/* Brand Lockup */}
        <button
          onClick={() => {
            setActiveTab('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="p-2 bg-surface/80 border border-gold/25 group-hover:border-gold transition-colors">
            <Landmark className="w-5 h-5 text-gold" />
          </div>
          <div className="text-left">
            <span className="font-display text-base md:text-lg text-text-primary block group-hover:text-gold transition-colors leading-none font-semibold">
              BABHAN BHUMIHAR
            </span>
            <span className="text-[10px] font-mono tracking-[0.18em] text-text-secondary uppercase">
              HERITAGE ARCHIVE & TRUST
            </span>
          </div>
        </button>

        {/* Desktop Anchor Tabs */}
        <div className="hidden lg:flex items-center gap-1 bg-surface/55 p-1 border border-border-custom backdrop-blur-sm quiet-card">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`relative px-3.5 py-2 text-[11px] font-sans uppercase tracking-[0.13em] font-semibold transition-all duration-300 select-none ${
                  isActive 
                    ? 'text-bg bg-gold' 
                    : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Global Search Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          {toggleTheme && (
            <button
              onClick={toggleTheme}
              className="p-2 border border-border-custom bg-surface hover:border-gold/35 hover:bg-gold/5 text-text-secondary hover:text-gold transition-all duration-300 relative group"
              title={theme === 'dark' ? "Switch to Parchment (Light) Theme" : "Switch to Midnight (Dark) Theme"}
              aria-label="Toggle color theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 stroke-[1.5]" />
              ) : (
                <Moon className="w-4 h-4 stroke-[1.5]" />
              )}
            </button>
          )}

          {onSearchClick && (
            <button
              onClick={onSearchClick}
              className="p-2 border border-border-custom bg-surface hover:border-gold/35 hover:bg-gold/5 text-text-secondary hover:text-gold transition-all duration-300"
              aria-label="Toggle general library search"
            >
              <Search className="w-4 h-4 stroke-[1.5]" />
            </button>
          )}

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 border border-border-custom bg-surface hover:bg-gold/5 text-text-secondary hover:text-text-primary transition-colors"
            aria-label="Toggle navigation map"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 top-[65px] bg-bg/95 backdrop-blur-md z-45 lg:hidden border-t border-border-custom flex flex-col justify-between transition-colors duration-300"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-6 space-y-3">
              <span className="text-[10px] font-mono tracking-widest text-gold uppercase block mb-4 border-b border-gold/10 pb-2">
                Archive Sections
              </span>
              <div className="grid grid-cols-1 gap-2">
                {navItems.map((item) => {
                  const isActive = activeTab === item.id;
                  const IconComponent = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveTab(item.id);
                        setIsMobileMenuOpen(false);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className={`flex items-center gap-3.5 w-full p-3.5 rounded text-left transition-all ${
                        isActive
                          ? 'bg-gold/10 border-l-4 border-gold text-gold font-semibold font-display'
                          : 'bg-surface/50 text-text-secondary hover:text-text-primary hover:bg-surface border-l-4 border-transparent'
                      }`}
                    >
                      <IconComponent className={`w-4 h-4 ${isActive ? 'text-gold' : 'text-text-secondary/70'}`} />
                      <span className="text-xs font-display tracking-widest uppercase font-semibold">
                        {item.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mobile Footer Area */}
            <div className="p-6 bg-surface border-t border-border-custom/50 text-center space-y-2">
              <p className="text-[11px] font-mono text-text-secondary">
                Bhumihar Historical Archive
              </p>
              <p className="text-[9px] font-sans text-text-secondary/50">
                Preserving family gotra histories, local narratives, and literature.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
