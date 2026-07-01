import { motion } from 'motion/react';
import { BookOpen, MapPin, Award, ArrowRight } from 'lucide-react';
import HeroSection from '../HeroSection';
import HistoricalCard from '../HistoricalCard';
import RegionCard from '../RegionCard';
import CommunityTestimonials from '../CommunityTestimonials';
import DidYouKnow from '../DidYouKnow';
import { HISTORICAL_FIGURES, REGIONS_DATA, TIMELINE_EVENTS } from '../../data';

interface HomeViewProps {
  setActiveTab: (tab: string) => void;
  setSelectedFigureId?: (id: string) => void;
}

export default function HomeView({ setActiveTab, setSelectedFigureId }: HomeViewProps) {
  // Highlight first 3 historic figures
  const featuredFigures = HISTORICAL_FIGURES.slice(0, 3);
  
  // Highlight some regions
  const featuredRegions = REGIONS_DATA.slice(0, 3);

  // Latest timeline points
  const featuredEvents = TIMELINE_EVENTS.slice(3, 5);

  return (
    <div id="home-view-container" className="bg-bg transition-colors duration-300">
      
      {/* 1. Hero Section */}
      <HeroSection onExploreClick={setActiveTab} />

      {/* 2. Institutional Manifesto Callout */}
      <section className="border-y border-border-custom bg-surface/35 py-16 relative paper-grain">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-4 space-y-2">
              <span className="text-[10px] font-mono tracking-widest text-gold uppercase block">Historical Context</span>
              <h2 className="text-3xl font-display text-text-primary tracking-tight leading-none">
                Core Philosophy & Preservation
              </h2>
            </div>

            <div className="lg:col-span-8">
              <p className="font-research text-base italic text-text-primary/95 leading-relaxed">
                "This collection is compiled from translated copper plates, historical land grants, family genealogies, and regional research. Our goal is to present a reliable historical reference on the lineage, culture, and achievements of Bhumihar Brahmins, free from sensationalism or bias."
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs text-text-secondary font-mono">
                <span>- Professor V. N. Sharma, Historical Advisory Committee</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Featured Personalities */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-baseline gap-4 mb-12 border-b border-border-custom pb-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.18em] text-gold">Archival Highlight</span>
            <h2 className="text-3xl md:text-4xl font-display text-text-primary mt-1">Eminent Pioneers & Thinkers</h2>
          </div>
          <button
            onClick={() => {
              setActiveTab('figures');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xs font-sans uppercase tracking-[0.16em] text-text-secondary hover:text-gold transition-colors flex items-center gap-2 font-semibold group"
          >
            <span>Examine All Biographies</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredFigures.map((fig) => (
            <HistoricalCard
              key={fig.id}
              id={fig.id}
              name={fig.name}
              lifespan={fig.lifespan}
              role={fig.role}
              era={fig.era}
              bioSnippet={fig.bioSnippet}
              citation={fig.citation}
              achievements={fig.achievements}
              onSelect={() => {
                setActiveTab('figures');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          ))}
        </div>
      </section>

      {/* 4. Settlements Mapping (Featured Regions) */}
      <section className="py-20 bg-surface/35 border-y border-border-custom paper-grain">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-baseline gap-4 mb-12 border-b border-border-custom pb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.18em] text-text-secondary">Regional Scope</span>
              <h2 className="text-3xl md:text-4xl font-display text-text-primary mt-1">Ancestral Settlement Regions</h2>
            </div>
            <button
              onClick={() => {
                setActiveTab('origins');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs font-sans uppercase tracking-[0.16em] text-text-secondary hover:text-gold transition-colors flex items-center gap-2 font-semibold group"
            >
              <span>Examine Origins Page</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRegions.map((region) => (
              <RegionCard
                key={region.id}
                id={region.id}
                region={region}
                onSelectMoolsByRegion={(regionName) => {
                  setActiveTab('mools');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Timeline Preview Section */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-4 space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.18em] text-gold">Historical Milestones</span>
              <h2 className="text-3xl md:text-4xl font-display text-text-primary mt-1">Brief History</h2>
              <p className="text-sm font-sans text-text-secondary mt-3 leading-relaxed">
                Tracing the socio-political movements of Eastern India, from traditional Vedic settlements to the agrarian reforms of the twentieth century.
              </p>
            </div>

            <button
              onClick={() => {
                setActiveTab('timeline');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-5 py-2.5 bg-surface border border-border-custom hover:border-gold hover:bg-gold/5 text-xs font-sans uppercase tracking-[0.16em] text-text-primary hover:text-gold transition-all duration-300 block text-center"
            >
              Traverse Full Interactive Timeline
            </button>
          </div>

          <div className="lg:col-span-8 space-y-6 relative border-l border-border-custom pl-6 md:pl-10">
            {featuredEvents.map((evt, idx) => (
              <div key={evt.id} className="relative space-y-2">
                <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-gold -translate-x-[31px] md:-translate-x-[47px]" />
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-gold bg-gold/10 px-2 py-0.5 rounded border border-gold/15">
                    {evt.year}
                  </span>
                  <span className="text-xs tracking-widest uppercase text-text-secondary">
                    {evt.era} Series
                  </span>
                </div>
                <h3 className="text-xl font-display text-text-primary">
                  {evt.title}
                </h3>
                <p className="text-sm font-sans text-text-secondary leading-relaxed">
                  {evt.shortDescription}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Community Testimonials */}
      <CommunityTestimonials />

      {/* 7. Did You Know */}
      <section className="py-20 bg-surface/35 border-y border-border-custom paper-grain">
        <DidYouKnow />
      </section>

    </div>
  );
}
