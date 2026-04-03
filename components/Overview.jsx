'use client';

import { CheckCircle2 } from 'lucide-react';
import { useModal } from '@/components/ModalContext';
import { overview } from '@/data/content';
import { motion } from 'framer-motion';

export default function Overview() {
  const { openModal } = useModal();

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, y: 0,
      transition: { duration: 0.8, staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="overview" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Content */}
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div>
              <p className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-3">
                {overview.sectionTitle}
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
                {overview.heading}
              </h2>
            </div>
            
            <div className="prose prose-lg prose-amber">
              {overview.body.split('\n\n').map((para, i) => (
                <p key={i} className="text-gray-600 leading-relaxed mb-4 text-sm md:text-base pr-4">
                  {para}
                </p>
              ))}
            </div>

            <ul className="space-y-4 mt-8 mb-10">
              {overview.bullets.map((b, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 text-sm md:text-base text-gray-700"
                >
                  <CheckCircle2 className="text-amber-500 w-5 h-5 mt-0.5 flex-shrink-0" />
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
            className="grid grid-cols-2 gap-4 lg:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {overview.stats.map((stat, i) => (
              <motion.div
                key={i}
                className="bg-white shadow-lg border border-gray-100 rounded-2xl p-6 hover:border-amber-500/30 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 will-change-transform"
              >
                <p className="text-3xl md:text-4xl lg:text-5xl font-black text-amber-500 mb-2">
                  {stat.value}
                </p>
                <p className="text-sm md:text-base text-gray-500 font-medium uppercase tracking-wide">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
