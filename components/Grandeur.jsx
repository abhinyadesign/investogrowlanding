'use client';

import Image from 'next/image';
import { useModal } from '@/components/ModalContext';
import { grandeur } from '@/data/content';
import { motion } from 'framer-motion';

export default function Grandeur() {
  const { openModal } = useModal();

  return (
    <section id="grandeur" className="py-24 bg-[#060709] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
            {grandeur.sectionTitle}
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 uppercase tracking-tight">
            {grandeur.heading}
          </h2>
          <p className="text-white/60 max-w-3xl mx-auto text-lg leading-relaxed">
            {grandeur.subheading}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
          {/* Images Section */}
          <div className="space-y-6 relative">
            <motion.div 
              className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-amber-500/10 border border-white/10"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <Image 
                src={grandeur.images[0].src} 
                alt={grandeur.images[0].alt} 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-700" 
              />
            </motion.div>
            <motion.div 
              className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-amber-500/10 border border-white/10 w-[85%] ml-auto -mt-24 z-10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image 
                src={grandeur.images[1].src} 
                alt={grandeur.images[1].alt} 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-700" 
              />
            </motion.div>
          </div>

          {/* Text/Features Section */}
          <motion.div 
            className="space-y-10"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            {grandeur.features.map((feature, i) => (
              <div key={i} className="group cursor-default">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                  {feature.title}
                </h3>
                <div className="w-12 h-1 bg-amber-500/30 mb-4 group-hover:w-24 group-hover:bg-amber-400 transition-all duration-500" />
                <p className="text-white/60 leading-relaxed group-hover:text-white/80 transition-colors">
                  {feature.description}
                </p>
              </div>
            ))}
            
            <div className="pt-6">
              <button
                onClick={openModal}
                className="border border-white/20 hover:border-amber-400 text-white hover:text-amber-400 bg-white/5 hover:bg-amber-400/5 font-semibold px-8 py-4 rounded-xl transition-all duration-200"
              >
                {grandeur.cta}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
