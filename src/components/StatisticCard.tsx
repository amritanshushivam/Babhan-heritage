import { motion } from 'motion/react';
import { Shield, GraduationCap, Building2, PenTool, BarChart3, Users } from 'lucide-react';

interface StatisticCardProps {
  id: string;
  title: string;
  metric: string | number;
  metricLabel: string;
  description: string;
  iconName: string;
  historicalMilestones: string[];
  key?: any;
}

export default function StatisticCard({
  id,
  title,
  metric,
  metricLabel,
  description,
  iconName,
  historicalMilestones
}: StatisticCardProps) {
  const renderIcon = (name: string) => {
    const classes = "w-6 h-6 text-gold stroke-[1.25]";
    switch (name) {
      case 'GraduationCap': return <GraduationCap className={classes} />;
      case 'Shield': return <Shield className={classes} />;
      case 'Building2': return <Building2 className={classes} />;
      case 'PenTool': return <PenTool className={classes} />;
      case 'Users': return <Users className={classes} />;
      default: return <BarChart3 className={classes} />;
    }
  };

  return (
    <motion.div
      id={`stat-card-${id}`}
      className="bg-surface border border-border-custom rounded-lg p-6 hover:border-gold/20 transition-all duration-300 flex flex-col justify-between"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div>
        {/* Header Icon + Label */}
        <div className="flex items-center justify-between mb-4">
          <div className="p-2.5 rounded-lg bg-zinc-950 border border-border-custom flex items-center justify-center">
            {renderIcon(iconName)}
          </div>
          <span className="text-[10px] font-mono tracking-widest text-[#B4B8BC] uppercase">
            RECORD OVERVIEW
          </span>
        </div>

        {/* Title */}
        <h4 className="text-lg font-display text-text-primary mb-3">
          {title}
        </h4>

        {/* Graphic Metrics Block */}
        <div className="relative py-4 p-4 rounded bg-zinc-950/40 border border-border-custom/50 mb-4 overflow-hidden flex items-baseline gap-2 group-hover:border-gold/10">
          <span className="text-3xl md:text-4xl font-display font-semibold text-gold tracking-tight">
            {typeof metric === 'number' ? `${metric}%` : metric}
          </span>
          <span className="text-xs font-sans text-[#B4B8BC] font-medium uppercase tracking-wider">
            {metricLabel}
          </span>
          {/* Subtle filled background bar matching the percentage */}
          {typeof metric === 'number' && (
            <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-bronze/40 to-gold/70" style={{ width: `${metric}%` }} />
          )}
        </div>

        {/* Informative Paragraph */}
        <p className="text-xs font-sans text-[#B4B8BC] leading-relaxed mb-6">
          {description}
        </p>
      </div>

      {/* Historical Milestones */}
      <div className="border-t border-border-custom/50 pt-4 space-y-2">
        <span className="text-[9px] font-display uppercase tracking-widest text-text-primary/60 block">
          Key Institutional Records
        </span>
        <ul className="space-y-1.5 text-[11px] text-[#B4B8BC]">
          {historicalMilestones.slice(0, 3).map((milestone, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-gold shrink-0">•</span>
              <span className="leading-snug">{milestone}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
