'use client';

import * as Icons from 'lucide-react';
import { useModal } from '@/components/ModalContext';
import { location } from '@/data/content';
import { motion } from 'framer-motion';

export default function Location() {
  const { openModal } = useModal();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="location" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left: Highlights */}
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div>
              <p className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-3">
                {location.sectionTitle}
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-4">
                {location.heading}
              </h2>
              <p className="text-gray-600 leading-relaxed max-w-lg">
                {location.subheading}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {location.advantages.map((adv, i) => {
                const Icon = Icons[adv.icon] || Icons.MapPin;
                return (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="flex items-start gap-4 p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:border-amber-500/30 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-md transition-all duration-300 will-change-transform"
                  >
                    <div className="w-10 h-10 rounded-xl bg-amber-500/15 flex items-center justify-center flex-shrink-0">
                      <Icon className="text-amber-500 w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-bold text-sm mb-1">{adv.label}</h4>
                      <p className="text-gray-500 text-xs">{adv.sub}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Map Embed */}
          <motion.div 
            className="w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden relative border border-gray-200 shadow-xl bg-gray-50"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <iframe
              src={location.mapEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 transition-all duration-700"
              title="Location Map"
            />
            
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white/95 to-white/0 p-6 pt-24 pointer-events-none text-gray-900 border-t border-gray-200/50">
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <button
            id="location-cta-btn"
            onClick={openModal}
            className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/25"
          >
            {location.cta}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
