import { motion } from 'motion/react';
import { MapPin, Layers, Map } from 'lucide-react';
import { RegionData } from '../types';

interface RegionCardProps {
  region: RegionData;
  id: string;
  onSelectMoolsByRegion?: (regionName: string) => void;
  key?: any;
}

export default function RegionCard({ region, id, onSelectMoolsByRegion }: RegionCardProps) {
  return (
    <motion.div
      id={`region-card-${id}`}
      className="group bg-surface border border-border-custom p-6 flex flex-col justify-between hover:border-gold/35 transition-all duration-300 relative overflow-hidden quiet-card"
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-bronze/25 opacity-0 group-hover:opacity-100 transition-opacity" />

      <div>
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-2 text-gold">
            <Map className="w-5 h-5 stroke-[1.5]" />
            <span className="text-xs font-mono tracking-[0.12em] uppercase">Region Note</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-text-secondary bg-bg/70 border border-border-custom px-2 py-0.5 font-mono">
            <Layers className="w-3.5 h-3.5 text-gold" />
            <span>{region.moolCount} mools</span>
          </div>
        </div>

        <h3 className="text-2xl font-display text-text-primary mb-1">
          {region.name}
        </h3>
        <p className="text-xs font-mono text-bronze/90 tracking-wide mb-4">
          Older reference: {region.historicalName}
        </p>

        <p className="text-sm font-sans text-text-secondary leading-relaxed mb-6">
          {region.description}
        </p>

        <div className="space-y-2.5">
          <span className="text-[10px] font-sans uppercase tracking-[0.16em] text-text-primary/70 block">
            Places Mentioned
          </span>
          <div className="flex flex-wrap gap-2">
            {region.keySites.map((site, index) => (
              <div
                key={index}
                className="flex items-center gap-1 text-xs text-text-secondary bg-bg/70 px-2.5 py-1.5 border border-border-custom"
              >
                <MapPin className="w-3 h-3 text-gold/70" />
                <span>{site}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {onSelectMoolsByRegion && (
        <div className="mt-6 pt-4 border-t border-border-custom">
          <button
            onClick={() => onSelectMoolsByRegion(region.name)}
            className="text-xs font-sans uppercase tracking-[0.14em] text-text-secondary group-hover:text-gold transition-colors flex items-center gap-2 font-semibold"
          >
            <span>See mools from {region.name}</span>
            <span className="transition-transform group-hover:translate-x-1.5">-&gt;</span>
          </button>
        </div>
      )}
    </motion.div>
  );
}
