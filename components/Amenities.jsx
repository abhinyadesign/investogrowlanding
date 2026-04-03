'use client';

import * as Icons from 'lucide-react';
import { useModal } from '@/components/ModalContext';
import { amenities } from '@/data/content';
import { motion } from 'framer-motion';

export default function Amenities() {
  const { openModal } = useModal();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  return (
    <section id="amenities" className="py-24 bg-[#060709] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
            {amenities.sectionTitle}
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            {amenities.heading}
          </h2>
          <p className="text-white/50 max-w-lg mx-auto">{amenities.subheading}</p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {amenities.items.map((item, i) => {
            const Icon = Icons[item.icon] || Icons.Star;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className="flex flex-col items-center gap-3 p-5 bg-white/3 border border-white/8 rounded-2xl hover:border-amber-500/30 hover:bg-amber-500/5 hover:-translate-y-1 hover:scale-105 transition-all duration-300 text-center group cursor-pointer will-change-transform"
              >
                <div className="w-11 h-11 rounded-xl bg-amber-500/15 flex items-center justify-center group-hover:bg-amber-500/25 transition-colors">
                  <Icon className="text-amber-400 w-5 h-5" />
                </div>
                <span className="text-white/70 text-xs font-medium leading-tight">
                  {item.label}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <button
            id="amenities-cta-btn"
            onClick={openModal}
            className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/25"
          >
            {amenities.cta}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
