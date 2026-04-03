'use client';

import { CheckCircle2 } from 'lucide-react';
import { useModal } from '@/components/ModalContext';
import { overview } from '@/data/content';
import { motion } from 'framer-motion';

export default function Overview() {
  const { openModal } = useModal();

  return (
    <section id="overview" className="py-24 bg-[#0a0b0f] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3"
        >
          {overview.sectionTitle}
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
              {overview.heading}
            </h2>
            {overview.body.split('\n\n').map((para, i) => (
              <p key={i} className="text-white/60 leading-relaxed mb-4 text-sm md:text-base pr-4">
                {para}
              </p>
            ))}

            <ul className="space-y-4 mt-8 mb-10">
              {overview.bullets.map((b, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 text-sm md:text-base text-white/80"
                >
                  <CheckCircle2 className="text-amber-400 w-5 h-5 mt-0.5 flex-shrink-0" />
                  {b}
                </motion.li>
              ))}
            </ul>

            <button
              id="overview-cta-btn"
              onClick={openModal}
              className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/25"
            >
              {overview.cta}
            </button>
          </motion.div>

          {/* Right: Stats */}
          <motion.div 
            className="grid grid-cols-2 gap-4 lg:mt-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {overview.stats.map((stat, i) => (
              <motion.div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-amber-500/30 hover:-translate-y-1 transition-all duration-300 will-change-transform"
              >
                <p className="text-3xl md:text-4xl lg:text-5xl font-black text-amber-400 mb-2">
                  {stat.value}
                </p>
                <p className="text-white/60 text-sm font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
