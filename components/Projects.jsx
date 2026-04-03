'use client';

import { useModal } from '@/components/ModalContext';
import { projects } from '@/data/content';
import { motion } from 'framer-motion';

const gradients = [
  'from-amber-900/30 to-amber-800/10',
  'from-blue-900/30 to-blue-800/10',
  'from-emerald-900/30 to-emerald-800/10',
  'from-purple-900/30 to-purple-800/10',
];

export default function Projects() {
  const { openModal } = useModal();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="projects" className="py-24 bg-[#060709] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
            {projects.sectionTitle}
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            {projects.heading}
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">{projects.subheading}</p>
        </motion.div>

        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.listings.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className={`relative bg-gradient-to-br ${gradients[i]} border border-white/10 rounded-2xl p-6 hover:border-amber-500/40 hover:-translate-y-2 transition-all duration-300 flex flex-col will-change-transform`}
            >
              <span className="inline-block bg-amber-500/20 text-amber-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 self-start">
                {item.type}
              </span>
              <p className="text-2xl font-black text-white mb-1">{item.price}</p>
              <p className="text-white/40 text-xs mb-4">{item.size}</p>
              <ul className="space-y-1.5 flex-1">
                {item.highlights.map((h, j) => (
                  <li key={j} className="flex items-center gap-2 text-xs text-white/60">
                    <span className="w-1 h-1 rounded-full bg-amber-400 flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
              <button
                id={`project-cta-${i}`}
                onClick={openModal}
                className="mt-5 w-full border border-amber-500/40 hover:bg-amber-500 hover:border-amber-500 text-amber-400 hover:text-black text-sm font-semibold py-2.5 rounded-lg transition-all duration-200"
              >
                Get Pricing
              </button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <button
            id="projects-main-cta"
            onClick={openModal}
            className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/25"
          >
            {projects.cta}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
