'use client';

import Image from 'next/image';
import { useModal } from '@/components/ModalContext';
import { masterPlan } from '@/data/content';
import { motion } from 'framer-motion';

export default function MasterPlan() {
  const { openModal } = useModal();

  return (
    <section id="masterplan" className="py-24 bg-[#0a0b0f] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Block */}
          <motion.div 
            className="lg:col-span-4 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest">
              {masterPlan.sectionTitle}
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
              {masterPlan.heading}
            </h2>
            <p className="text-white/60 leading-relaxed">
              {masterPlan.subheading}
            </p>
            
            <div className="pt-6 space-y-4">
              <h4 className="text-white font-semibold mb-2">Zone Indicators</h4>
              {masterPlan.legends.map((legend, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className={`w-3 h-3 rounded-full ${legend.color} shadow-[0_0_10px_rgba(255,255,255,0.1)]`} />
                  <span className="text-white/80 text-sm font-medium">{legend.label}</span>
                </div>
              ))}
            </div>

            <button
              onClick={openModal}
              className="mt-8 bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-lg w-full sm:w-auto"
            >
              {masterPlan.cta}
            </button>
          </motion.div>

          {/* Right Image Block */}
          <motion.div 
            className="lg:col-span-8 relative aspect-[4/3] sm:aspect-[16/10] rounded-3xl overflow-hidden border border-white/10 bg-white/5"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            {/* Soft inner glow overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.6)_100%)] z-10 pointer-events-none" />
            
            <Image 
              src={masterPlan.image}
              alt="GYGY Mentis Master Plan Blueprint"
              fill
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-cover object-center scale-105"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
