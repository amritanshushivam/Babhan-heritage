import { useState } from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Shield, Building2, PenTool, Award, Landmark, Eye } from 'lucide-react';
import StatisticCard from '../StatisticCard';
import { COMMUNITY_SECTORS } from '../../data';

export default function CommunityView() {
  const [hoveredVigIndex, setHoveredVigIndex] = useState<number | null>(null);

  // High-fidelity custom SVG graph parameters representing historical lineages
  const regionStats = [
    { name: 'Magadh Region', value: 42, color: '#D4AF37' },
    { name: 'Mithila Region', value: 38, color: '#8C6A43' },
    { name: 'Saran Plains', value: 29, color: '#A3A3A3' },
    { name: 'Gorakhpur Plains', value: 18, color: '#525252' }
  ];

  const totalMoolsMapValue = 127; // Sum of values

  return (
    <div id="community-dashboard-plane" className="bg-bg pt-28 pb-20 transition-colors duration-300">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12">
        <div className="border-b border-white/5 pb-6">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-gold block mb-2">
            Socio-Cultural Contributions
          </span>
          <h1 className="text-4xl md:text-5xl font-display text-text-primary tracking-tight font-medium">
            Contributions &amp; Estates
          </h1>
          <p className="text-sm font-sans text-text-secondary max-w-2xl mt-3 leading-relaxed font-light">
            A historical overview of the community's active roles in land management, public education, modern statecraft, and national literature.
          </p>
        </div>
      </div>

      {/* Modern Data Visualizations Block */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Demographic Distribution */}
          <div className="lg:col-span-5 bg-surface border border-border-custom p-6 rounded-lg flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-[#B4B8BC] uppercase block mb-1">
                Regional Distribution
              </span>
              <h3 className="text-xl font-display text-text-primary mb-3">
                Clan Locations by River Valleys
              </h3>
              <p className="text-xs font-sans text-text-secondary leading-relaxed mb-6">
                An approximate distribution of documented mool (clan) territories matching classical village records.
              </p>
            </div>

            {/* Custom Responsive SVG Gauge (Drawn perfectly with crisp layout coordinates) */}
            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center py-4 bg-zinc-950/40 border border-border-custom/50 rounded-lg p-5">
              
              {/* Polar Ring SVG circle */}
              <div className="relative w-36 h-36">
                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                  {/* Outer circle layout */}
                  <circle cx="50" cy="50" r="42" stroke="rgba(255,255,255,0.02)" strokeWidth="6" fill="transparent" />
                  
                  {/* Arc Segment: Magadh */}
                  <circle cx="50" cy="50" r="42" stroke="#D4AF37" strokeWidth="6" 
                    fill="transparent" strokeDasharray="264" strokeDashoffset="153" 
                  />
                  {/* Arc Segment: Mithila */}
                  <circle cx="50" cy="50" r="42" stroke="#8C6A43" strokeWidth="6" 
                    fill="transparent" strokeDasharray="264" strokeDashoffset="242" 
                    className="rotate-[118deg] origin-center"
                  />
                </svg>

                {/* Inner center labels */}
                <div className="absolute inset-0 flex flex-col justify-center items-center">
                  <span className="text-2xl font-display font-medium text-gold">{totalMoolsMapValue}</span>
                  <span className="text-[9px] font-mono uppercase text-text-secondary">Mools Charted</span>
                </div>
              </div>

              {/* Legends with calculated ratios */}
              <div className="space-y-2.5 flex-1 w-full max-w-[160px]">
                {regionStats.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="text-text-secondary font-mono text-[11px]">{item.name}</span>
                    </div>
                    <span className="font-mono text-[11px] text-text-primary font-semibold">
                      {Math.round((item.value / totalMoolsMapValue) * 100)}%
                    </span>
                  </div>
                ))}
              </div>

            </div>

            <div className="mt-4 text-[10px] font-mono text-text-secondary/40 text-center">
              *Proportion mapped based on the primary agrahara charters c. 800 - 1200 CE
            </div>
          </div>

          {/* Education & Literacy Trends */}
          <div className="lg:col-span-7 bg-surface border border-border-custom p-6 rounded-lg flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-text-secondary uppercase block mb-1">
                Education &amp; Literacy
              </span>
              <h3 className="text-xl font-display text-text-primary mb-3">
                Educational Progression &amp; Literacy Trends
              </h3>
              <p className="text-xs font-sans text-[#B4B8BC] leading-relaxed mb-6">
                A historical look at the community's transition from traditional scholarship to modern universities, professional fields, and scientific study.
              </p>
            </div>

            {/* Custom Interactive Column bars */}
            <div className="space-y-4 py-4 p-5 bg-zinc-950/40 border border-border-custom/50 rounded-lg">
              
              {/* Year Era 1 */}
              <div 
                className="space-y-1 cursor-pointer"
                onMouseEnter={() => setHoveredVigIndex(0)}
                onMouseLeave={() => setHoveredVigIndex(null)}
              >
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-[#B4B8BC]">1890s: Traditional Sanskrit Academies</span>
                  <span className="text-gold">14% Literacy Index</span>
                </div>
                <div className="h-2 bg-white/[0.02] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-bronze transition-all duration-500" 
                    style={{ width: hoveredVigIndex === 0 ? '22%' : '14%' }} 
                  />
                </div>
              </div>

              {/* Year Era 2 */}
              <div 
                className="space-y-1 cursor-pointer"
                onMouseEnter={() => setHoveredVigIndex(1)}
                onMouseLeave={() => setHoveredVigIndex(null)}
              >
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-[#B4B8BC]">1930s: Kisan Sabhas &amp; University Foundations</span>
                  <span className="text-gold">42% Index</span>
                </div>
                <div className="h-2 bg-white/[0.02] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gold/70 transition-all duration-500" 
                    style={{ width: hoveredVigIndex === 1 ? '50%' : '42%' }} 
                  />
                </div>
              </div>

              {/* Year Era 3 */}
              <div 
                className="space-y-1 cursor-pointer"
                onMouseEnter={() => setHoveredVigIndex(2)}
                onMouseLeave={() => setHoveredVigIndex(null)}
              >
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-white">1960s: Post-Land Reform (Heavy sciences and administration shift)</span>
                  <span className="text-gold">78% Index</span>
                </div>
                <div className="h-2 bg-white/[0.02] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gold transition-all duration-500" 
                    style={{ width: hoveredVigIndex === 2 ? '85%' : '78%' }} 
                  />
                </div>
              </div>

              {/* Year Era 4 */}
              <div 
                className="space-y-1 cursor-pointer"
                onMouseEnter={() => setHoveredVigIndex(3)}
                onMouseLeave={() => setHoveredVigIndex(null)}
              >
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-[#B4B8BC]">Present: Global academic diaspora &amp; technological sciences</span>
                  <span className="text-gold font-bold">92% Index</span>
                </div>
                <div className="h-2 bg-white/[0.02] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-bronze to-gold transition-all duration-500" 
                    style={{ width: hoveredVigIndex === 3 ? '100%' : '92%' }} 
                  />
                </div>
              </div>

            </div>

            <div className="mt-4 flex items-center gap-2 text-[10px] font-mono text-text-secondary/50 font-light">
              <Eye className="w-3.5 h-3.5 text-gold shrink-0" />
              <span>Hover over each epoch bar to view details.</span>
            </div>
          </div>

        </div>
      </div>

      {/* Contribution sectors dashboard (Education, Military, Politics, Culture) as requested */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Subtitle */}
        <div className="border-b border-white/5 pb-4 mb-10 flex items-center gap-2.5">
          <Award className="w-5 h-5 text-gold stroke-[1.25]" />
          <h2 className="text-2xl font-display text-text-primary">
            Key Areas of Historical Contribution
          </h2>
        </div>

        {/* Dynamic Mapping from data */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {COMMUNITY_SECTORS.map((sector) => (
            <StatisticCard
              key={sector.id}
              id={sector.id}
              title={sector.title}
              metric={sector.percentageMetric}
              metricLabel={sector.metricLabel}
              description={sector.description}
              iconName={sector.iconName}
              historicalMilestones={sector.historicalMilestones}
            />
          ))}
        </div>

      </div>

    </div>
  );
}
