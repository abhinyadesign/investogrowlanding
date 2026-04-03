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
    <section id="location" className="py-24 bg-[#0a0b0f] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
            {location.sectionTitle}
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            {location.heading}
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">{location.subheading}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Advantages */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {location.advantages.map((adv, i) => {
              const Icon = Icons[adv.icon] || Icons.MapPin;
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex items-start gap-4 p-5 bg-white/3 border border-white/8 rounded-2xl hover:border-amber-500/30 hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 will-change-transform"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-500/15 flex items-center justify-center flex-shrink-0">
                    <Icon className="text-amber-400 w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{adv.label}</p>
                    <p className="text-white/40 text-xs mt-0.5">{adv.sub}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Map */}
          <motion.div 
            className="rounded-2xl overflow-hidden border border-white/10 aspect-video w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <iframe
              src={location.mapEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="GYGY Mentis Location – Sector 140, Noida"
            />
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
