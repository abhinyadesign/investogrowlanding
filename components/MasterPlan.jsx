'use client';

import Image from 'next/image';
import { useModal } from '@/components/ModalContext';
import { masterPlan } from '@/data/content';
import { motion } from 'framer-motion';

export default function MasterPlan() {
  const { openModal } = useModal();

  return (
    <section id="masterplan" className="py-24 bg-gray-50 border-t border-gray-200 overflow-hidden">
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
            <p className="text-amber-500 text-sm font-semibold uppercase tracking-widest">
              {masterPlan.sectionTitle}
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
              {masterPlan.heading}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {masterPlan.subheading}
            </p>
            
            <div className="pt-6 space-y-4">
              <h4 className="text-gray-900 font-bold mb-2">Zone Indicators</h4>
              {masterPlan.legends.map((legend, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className={`w-3 h-3 rounded-full ${legend.color} shadow-sm`} />
                  <span className="text-gray-700 text-sm font-medium">{legend.label}</span>
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
            className="lg:col-span-8 relative aspect-[4/3] sm:aspect-[16/10] rounded-3xl overflow-hidden border border-gray-200 bg-white shadow-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            {/* Soft inner glow overlay removed for light theme clarity */}
            
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
