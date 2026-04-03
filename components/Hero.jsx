'use client';

import Image from 'next/image';
import { ChevronDown, MapPin } from 'lucide-react';
import { useModal } from '@/components/ModalContext';
import { hero, siteConfig } from '@/data/content';
import { motion } from 'framer-motion';

export default function Hero() {
  const { openModal } = useModal();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="hero" className="relative h-[80vh] min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image */}
      <motion.div 
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0 z-0"
      >
        <Image
          src={hero.image}
          alt="GYGY Mentis – Premium Commercial Property Sector 140 Noida"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark blur overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[3px]" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8 w-full mt-10">
        <motion.div 
          className="max-w-2xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* RERA Badge / Eyebrow wrapper */}
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-block bg-amber-500/20 border border-amber-500/40 text-amber-400 font-bold px-3 py-1 rounded-full text-xs tracking-wide">
              {hero.eyebrow}
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-3">
            {hero.heading}
          </motion.h1>

          <motion.p variants={itemVariants} className="text-white/70 text-base sm:text-lg mb-6 max-w-xl leading-relaxed">
            {hero.subheading}
          </motion.p>

          {/* Highlights List */}
          <motion.div variants={itemVariants} className="space-y-2.5 mb-6">
            {hero.highlights.map((h, i) => (
              <div key={i} className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center border border-amber-500/30 group-hover:bg-amber-500/20 transition-colors">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                </div>
                <span className="text-base sm:text-lg text-white font-medium group-hover:text-amber-300 transition-colors">
                  {h}
                </span>
              </div>
            ))}
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex items-center gap-2 text-white/50 text-sm mb-6 bg-white/5 border border-white/10 w-fit px-3 py-1.5 rounded-lg">
             <MapPin size={16} className="text-amber-400" /> 
             {hero.location}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-6">
            <button
              id="hero-enquire-btn"
              onClick={openModal}
              className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-3 rounded-xl text-base transition-all duration-200 hover:shadow-2xl hover:shadow-amber-500/30 hover:-translate-y-0.5"
            >
              {hero.cta}
            </button>
            <button
              id="hero-brochure-btn"
              onClick={openModal}
              className="border border-white/30 hover:border-amber-400 hover:bg-amber-400/5 text-white hover:text-amber-400 font-semibold px-6 py-3 rounded-xl text-base transition-all duration-200"
            >
              {hero.ctaSecondary}
            </button>
          </motion.div>

          <motion.div variants={itemVariants} className="text-white/40 text-xs">
            {hero.reraLabel}
          </motion.div>

        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 animate-bounce"
      >
        <span className="text-white/30 text-[10px] tracking-widest uppercase">Scroll</span>
        <ChevronDown size={14} className="text-white/30" />
      </motion.div>
    </section>
  );
}
