'use client';

import * as Icons from 'lucide-react';
import { useModal } from '@/components/ModalContext';
import { whyChooseUs } from '@/data/content';
import { motion } from 'framer-motion';

export default function WhyChooseUs() {
  const { openModal } = useModal();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="usp" className="py-24 bg-[#0a0b0f] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
            {whyChooseUs.sectionTitle}
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">{whyChooseUs.heading}</h2>
          <p className="text-white/50 max-w-2xl mx-auto">{whyChooseUs.subheading}</p>
        </motion.div>

        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {whyChooseUs.reasons.map((r, i) => {
            const Icon = Icons[r.icon] || Icons.CheckCircle;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className="relative group bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-7 hover:border-amber-500/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden will-change-transform"
              >
                {/* Glow */}
                <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-amber-500/5 group-hover:bg-amber-500/10 transition-colors" />

                <div className="w-12 h-12 rounded-xl bg-amber-500/15 flex items-center justify-center mb-5 group-hover:bg-amber-500/25 transition-colors">
                  <Icon className="text-amber-400 w-5 h-5" />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{r.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{r.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <button
            id="about-cta-btn"
            onClick={openModal}
            className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/25"
          >
            {whyChooseUs.cta}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
