import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Pages
import HomeView from './components/pages/HomeView';
import OriginsView from './components/pages/OriginsView';
import MoolsView from './components/pages/MoolsView';
import FiguresView from './components/pages/FiguresView';
import TimelineView from './components/pages/TimelineView';
import ArchiveView from './components/pages/ArchiveView';
import CommunityView from './components/pages/CommunityView';

type TabType = 'home' | 'origins' | 'mools' | 'figures' | 'timeline' | 'archive' | 'community';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('heritage-archive-theme');
    if (saved === 'light' || saved === 'dark') {
      return saved;
    }
    return 'dark'; // classic museum theme defaults to dark
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('heritage-archive-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const renderActiveView = () => {
    switch (activeTab) {
      case 'home':
        return <HomeView setActiveTab={(tab) => setActiveTab(tab as TabType)} />;
      case 'origins':
        return <OriginsView />;
      case 'mools':
        return <MoolsView />;
      case 'figures':
        return <FiguresView />;
      case 'timeline':
        return <TimelineView />;
      case 'archive':
        return <ArchiveView />;
      case 'community':
        return <CommunityView />;
      default:
        return <HomeView setActiveTab={(tab) => setActiveTab(tab as TabType)} />;
    }
  };

  return (
    <div id="heritage-archival-vault" className="min-h-screen bg-bg flex flex-col justify-between selection:bg-gold/30 selection:text-white">
      
      {/* Premium background mesh lines to solidify the digital physical-museum mood */}
      <div className="absolute inset-0 museum-grid-pattern pointer-events-none z-0" />
      
      {/* 1. Global Navigation Bar */}
      <Navigation 
        activeTab={activeTab} 
        setActiveTab={(tab) => setActiveTab(tab as TabType)} 
        onSearchClick={() => {
          setActiveTab('archive');
          window.scrollTo({ top: 400, behavior: 'smooth' });
        }}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* 2. Main Scholar Body and content */}
      <main className="flex-grow relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {renderActiveView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 3. Global Footer bar */}
      <Footer setActiveTab={(tab) => setActiveTab(tab as TabType)} />
      
    </div>
  );
}
