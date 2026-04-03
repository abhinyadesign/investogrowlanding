'use client';

import { Star } from 'lucide-react';
import { useModal } from '@/components/ModalContext';
import { testimonials } from '@/data/content';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const { openModal } = useModal();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="testimonials" className="py-24 bg-gray-50 border-t border-gray-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.p variants={itemVariants} className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-3">
            {testimonials.sectionTitle}
          </motion.p>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            {testimonials.heading}
          </motion.h2>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {testimonials.items.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="bg-white shadow-md border border-gray-100 rounded-2xl p-7 flex flex-col hover:shadow-xl hover:border-amber-500/25 hover:-translate-y-2 transition-all duration-300 will-change-transform"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: item.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-amber-500 fill-amber-500" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 italic leading-relaxed mb-6 flex-grow">
                &ldquo;{item.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 mt-auto pt-5 border-t border-gray-100">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-bold text-sm flex-shrink-0 border border-gray-200">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold text-sm">{item.name}</h4>
                  <p className="text-gray-500 text-xs">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <button
            id="testimonials-cta-btn"
            onClick={openModal}
            className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/25"
          >
            {testimonials.cta}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
