import { motion } from 'motion/react';
import { Lightbulb } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Fact {
  id: string;
  title: string;
  description: string;
  category: 'Culture' | 'Achievement' | 'Legacy' | 'Curiosity';
}

const facts: Fact[] = [
  {
    id: 'fact-1',
    title: 'The Bakhasht Revolt\'s Secret Weapon',
    description: 'Swami Sahajanand\'s peasant army didn\'t have guns or swords—they had unity. In the Bakhasht movement of 1937-39, thousands of farmers refused to pay rent in perfect coordination. British officials were baffled: How do you arrest an entire philosophy?',
    category: 'Achievement'
  },
  {
    id: 'fact-2',
    title: 'When a Poet Made a King Weep',
    description: 'During a state function, Ramdhari Singh "Dinkar" recited Rashmirathi in Maharaja\'s court. The story goes that the Maharaja wept openly, realizing he had been living a life of vanity while a wandering poet carried the true wealth of human souls.',
    category: 'Curiosity'
  },
  {
    id: 'fact-3',
    title: 'The Zamindari System That Changed India',
    description: 'Dr. Sri Krishna Sinha didn\'t just abolish the Zamindari system in Bihar—he did it first in independent India. Feudal lords who resisted were court-martialed by a government minister. His bold move became the blueprint for land reform across the nation.',
    category: 'Achievement'
  },
  {
    id: 'fact-4',
    title: 'From Monastery to Military Airfield',
    description: 'Maharaja Gopal Saran Narain Singh converted his palace grounds into a landing strip for WWI aircraft. When a German bullet grazed his wing, he laughed it off and flew the damaged plane back home like a trophy. His pilot didn\'t.',
    category: 'Curiosity'
  },
  {
    id: 'fact-5',
    title: 'A Million-Dollar Donation, One Rupee at a Time',
    description: 'Sir Ganesh Dutt was so committed to not keeping wealth that his staff had to ambush him with tax notices. He\'d donate every rupee faster than auditors could track. Medical students studying at PMCH today still benefit from his endowment—90+ years later.',
    category: 'Legacy'
  },
  {
    id: 'fact-6',
    title: 'The Language of Justice',
    description: 'Swami Sahajanand believed the peasant\'s local dialect (Hindi, Bhojpuri) was the only true language of revolution. While English-speaking revolutionaries debated in cities, his vernacular speeches mobilized entire districts. Sometimes, the most radical act is speaking the people\'s words.',
    category: 'Culture'
  },
  {
    id: 'fact-7',
    title: 'BHU\'s Hidden Sponsor',
    description: 'Banaras Hindu University was built partly thanks to the Tekari Raj\'s massive land donation. Few students today know that an aviator Maharaja from Bihar contributed to their alma mater\'s foundation.',
    category: 'Legacy'
  },
  {
    id: 'fact-8',
    title: 'A Chief Minister\'s Strange Virtue',
    description: 'Sri Krishna Sinha never accepted a car, never lived in the official residence, and walked the streets of Patna like a commoner. Opposition politicians couldn\'t attack what they couldn\'t find—he was always accessible, always humble.',
    category: 'Culture'
  }
];

export default function DidYouKnow() {
  const [featured, setFeatured] = useState<Fact>(facts[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (index + 1) % facts.length;
      setIndex(nextIndex);
      setFeatured(facts[nextIndex]);
    }, 10000); // Rotate every 10 seconds

    return () => clearInterval(interval);
  }, [index]);

  const categoryColors: Record<string, string> = {
    Culture: 'bg-bronze/15 text-bronze border-bronze/30',
    Achievement: 'bg-gold/15 text-gold border-gold/30',
    Legacy: 'bg-emerald-600/15 text-emerald-500 border-emerald-600/30',
    Curiosity: 'bg-sky-500/15 text-sky-400 border-sky-500/30'
  };

  return (
    <section className="py-16 md:py-20 max-w-7xl mx-auto px-4 md:px-8">
      <div className="border-b border-border-custom pb-6 mb-12">
        <div className="flex items-center gap-2.5 mb-3">
          <Lightbulb className="w-5 h-5 text-gold" />
          <span className="text-xs font-mono uppercase tracking-[0.18em] text-gold">Interesting Tidbits</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-display text-text-primary">
          Did You Know?
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Featured Fact */}
        <motion.div
          key={featured.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 p-8 border border-border-custom bg-gradient-to-br from-surface/50 to-surface/20 group hover:border-gold/40 transition-all duration-300"
        >
          <div className={`inline-block px-3 py-1.5 rounded-sm border text-xs font-mono tracking-wider uppercase font-semibold mb-4 ${categoryColors[featured.category]}`}>
            {featured.category}
          </div>
          <h3 className="text-2xl md:text-3xl font-display text-text-primary mb-4">
            {featured.title}
          </h3>
          <p className="text-base font-sans text-text-secondary leading-relaxed">
            {featured.description}
          </p>
        </motion.div>

        {/* Fact Queue / Navigation */}
        <div className="space-y-3">
          <p className="text-xs font-mono text-gold uppercase tracking-widest mb-6">Other Facts ({facts.length})</p>
          {facts.map((fact, idx) => (
            <motion.button
              key={fact.id}
              onClick={() => {
                setFeatured(fact);
                setIndex(idx);
              }}
              whileHover={{ x: 4 }}
              className={`w-full text-left p-3 border transition-all duration-200 ${
                featured.id === fact.id
                  ? 'bg-gold/15 border-gold text-gold'
                  : 'border-border-custom text-text-secondary hover:border-gold/40 hover:text-text-primary'
              }`}
            >
              <p className="text-xs font-semibold line-clamp-2">
                {fact.title}
              </p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
