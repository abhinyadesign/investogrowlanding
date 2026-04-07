'use client';

import { motion } from 'framer-motion';
import { hero } from '@/data/content';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  const stats = hero.stats;

  return (
    <section id="hero" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>

      {/* Background Image */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img
          src="/images/commercial_office_noida.png"
          alt="GYGY Mentis Noida"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
        />
        {/* Multi-layer gradient overlay for depth */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(105deg, rgba(12,16,21,0.97) 0%, rgba(12,16,21,0.82) 45%, rgba(12,16,21,0.25) 100%)',
          zIndex: 1,
        }} />
        {/* Subtle vignette at bottom */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '30%',
          background: 'linear-gradient(to top, rgba(12,16,21,0.6) 0%, transparent 100%)',
          zIndex: 2,
        }} />
      </div>

      <div style={{
        position: 'relative', zIndex: 3,
        maxWidth: 1400, margin: '0 auto',
        padding: 'clamp(100px, 13vh, 160px) 40px clamp(64px, 8vh, 110px)',
        width: '100%',
      }}>
        <div style={{ maxWidth: 740 }}>

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 24 }}
          >
            <span className="pulse-dot" style={{ flexShrink: 0 }} />
            <span style={{
              fontSize: 11, fontWeight: 700, letterSpacing: '0.2em',
              textTransform: 'uppercase', color: 'var(--accent)',
            }}>
              {hero.eyebrow}
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="heading-premium"
            style={{
              fontSize: 'clamp(40px, 3.5vw, 88px)',
              lineHeight: 1.04,
              marginBottom: 28,
              color: '#fff',
              textTransform: 'uppercase',
              letterSpacing: '-0.03em',
            }}
          >
            {hero.headingPart1}
            <br />
            <span style={{ color: 'var(--accent)' }}>
              {hero.headingPart2}
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            style={{
              fontSize: 'clamp(15px, 1.1vw, 18px)',
              color: 'rgba(255,255,255,0.68)',
              lineHeight: 1.65,
              marginBottom: 40,
              maxWidth: 560,
            }}
            dangerouslySetInnerHTML={{ __html: hero.subheading.replace(/\*\*(.*?)\*\*/g, '<strong style="color:rgba(255,255,255,0.95);font-weight:700">$1</strong>') }}
          />

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginBottom: 56 }}
          >
            <motion.button
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="shimmer-btn"
              onClick={() => document.getElementById('enquire')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                color: 'var(--bg-dark)',
                padding: '16px 34px', borderRadius: 'var(--radius-full)', fontWeight: 800,
                fontSize: 13, border: 'none', cursor: 'pointer',
                display: 'inline-flex', alignItems: 'center', gap: 10,
                letterSpacing: '0.06em', textTransform: 'uppercase',
                boxShadow: '0 8px 30px rgba(212,175,55,0.4)',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              {hero.ctaPrimary} <ArrowRight size={16} />
            </motion.button>

            <motion.button
              whileHover={{ y: -3, background: 'rgba(255,255,255,0.12)' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                background: 'rgba(255,255,255,0.06)',
                color: 'rgba(255,255,255,0.9)',
                padding: '16px 34px', borderRadius: 'var(--radius-full)', fontWeight: 700,
                fontSize: 13, border: '1px solid rgba(255,255,255,0.15)', cursor: 'pointer',
                display: 'inline-flex', alignItems: 'center', gap: 10,
                backdropFilter: 'blur(12px)',
                letterSpacing: '0.06em', textTransform: 'uppercase',
                transition: 'all 0.3s ease',
              }}
            >
              {hero.ctaSecondary}
            </motion.button>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.55 }}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 0,
              borderTop: '1px solid rgba(255,255,255,0.1)',
              paddingTop: 32,
            }}
          >
            {stats.map((s, i) => (
              <div key={i} style={{
                paddingRight: 32,
                paddingLeft: i !== 0 ? 32 : 0,
                borderLeft: i !== 0 ? '1px solid rgba(255,255,255,0.1)' : 'none',
              }}>
                <div
                  className="shimmer-num"
                  style={{ fontSize: 'clamp(22px, 2.8vw, 32px)', fontWeight: 800, marginBottom: 4 }}
                >
                  {s.value}
                </div>
                <div style={{
                  fontSize: 10,
                  color: 'rgba(255,255,255,0.45)',
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  fontWeight: 600,
                }}>
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        style={{
          position: 'absolute', bottom: 36, right: 40, zIndex: 4,
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
          cursor: 'pointer',
        }}
        onClick={() => document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} style={{ color: 'rgba(255,255,255,0.35)' }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
