import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  designation: string;
  source?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    quote: "The All India Kisan Sabha under Swami Sahajanand Saraswati formed the vanguard of Bihar's agrarian awakening. Their struggle for Bakasht lands redefined tenant rights and shook the foundations of landlordism, leaving an indelible mark on modern India's socio-economic landscape.",
    author: "Dr. Rajendra Prasad",
    designation: "First President of India & Freedom Fighter",
    source: "Speeches and Writings (1950s)"
  },
  {
    id: 'test-2',
    quote: "Bhumihars or Babhans represent a highly intellectual, agrarian-administrative community of Eastern India. From founding key education centers like Patna University to leading pioneer industrial projects, their contribution to national reconstruction is immense.",
    author: "Sir Herbert Risley",
    designation: "Anthropologist & Census Commissioner of India",
    source: "The People of India (1908)"
  },
  {
    id: 'test-3',
    quote: "The philanthropic legacy of Sir Ganesh Dutt is unparalleled in Bihar's academic history. By dedicating his entire wealth to public education and PMCH, he championed a culture of learning and public service that continues to inspire generations.",
    author: "Dr. K. P. Jayaswal",
    designation: "Eminent Historian & Research Scholar",
    source: "Journal of the Bihar Research Society"
  }
];

export default function CommunityTestimonials() {
  return (
    <section id="community-testimonials-section" className="py-20 max-w-7xl mx-auto px-4 md:px-8">
      <div className="border-b border-border-custom pb-6 mb-12">
        <div className="flex items-center gap-2.5 mb-3">
          <Quote className="w-5 h-5 text-gold animate-pulse" />
          <span className="text-xs font-mono uppercase tracking-[0.18em] text-gold">Scholarly Reflections</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-display text-text-primary">
          Testimonials &amp; Historical Perspectives
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ y: -4 }}
            className="p-8 border border-border-custom bg-gradient-to-br from-surface/50 to-surface/20 hover:border-gold/40 transition-all duration-300 flex flex-col justify-between relative"
          >
            <div>
              <Quote className="w-6 h-6 text-gold/20 mb-4" />
              <p className="text-sm font-research italic text-text-primary/90 leading-relaxed mb-6">
                "{t.quote}"
              </p>
            </div>
            <div className="border-t border-border-custom/50 pt-4 mt-auto">
              <span className="block text-xs font-mono text-gold uppercase tracking-[0.12em] font-semibold">
                {t.author}
              </span>
              <span className="block text-[11px] text-text-secondary mt-1 font-sans">
                {t.designation}
              </span>
              {t.source && (
                <span className="block text-[10px] text-text-secondary/60 mt-1 font-sans italic">
                  Source: {t.source}
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
