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
    <section id="why-choose-us" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-20 max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.p variants={itemVariants} className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-3">
            {whyChooseUs.sectionTitle}
          </motion.p>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-black text-gray-900 mb-6 uppercase tracking-tight">
            {whyChooseUs.heading}
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-600 text-lg leading-relaxed">
            {whyChooseUs.subheading}
          </motion.p>
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
                className="relative group bg-white shadow-lg border border-gray-100 rounded-2xl p-7 hover:border-amber-500/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden will-change-transform"
              >
                {/* Glow */}
                <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-amber-500/5 group-hover:bg-amber-500/10 transition-colors" />

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center mb-6 border border-gray-100 group-hover:scale-110 group-hover:border-amber-500/30 transition-all duration-300">
                  <Icon className="text-amber-400 w-5 h-5" />
                </div>
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">{r.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {r.description}
                </p>
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
