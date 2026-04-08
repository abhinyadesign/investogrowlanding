'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { opportunity } from '@/data/content';
import { Sparkles, ArrowRight } from 'lucide-react';
import { useModal } from '@/components/ModalContext';

const IMAGES = Array.from({ length: 10 }, (_, i) => `/images/${i + 1}g.jpg`);

export default function Opportunity() {
  const { openModal } = useModal();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);
  return (
    <section id="opportunity" style={{ background: 'var(--bg-secondary)' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 40px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'clamp(40px, 6vw, 80px)',
          alignItems: 'center',
        }}>

          <motion.div
            initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="label-premium">
              <Sparkles size={13} style={{ color: 'var(--accent)' }} />
              {opportunity.label || 'The Opportunity'}
            </div>

            <h2 className="heading-premium" style={{
              fontSize: 'clamp(28px, 4vw, 52px)',
              marginBottom: 28,
              lineHeight: 1.1,
            }}>
              {opportunity.heading}
            </h2>

            <p
              style={{
                fontSize: 17, color: 'var(--text-secondary)', lineHeight: 1.8,
                marginBottom: 32, maxWidth: 580,
              }}
              dangerouslySetInnerHTML={{ __html: opportunity.desc.replace(/\*\*(.*?)\*\*/g, '<strong style="color:var(--text-primary);font-weight:700">$1</strong>') }}
            />
            <motion.button
              onClick={openModal}
              whileHover={{ y: -2, background: 'rgba(212,175,55,1)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                background: 'var(--bg-dark)', color: 'var(--accent)',
                border: '1px solid var(--accent)', padding: '16px 36px',
                borderRadius: 'var(--radius-full)', fontWeight: 800,
                fontSize: 13, gap: 10, display: 'inline-flex', alignItems: 'center',
                letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--bg-dark)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(212,175,55,0.3)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.background = 'var(--bg-dark)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              Request Investment Details <ArrowRight size={16} />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'relative',
              height: 'clamp(320px, 50vh, 520px)',
              overflow: 'hidden',
              borderRadius: 'var(--radius-xl)',
              boxShadow: 'var(--shadow-xl)',
            }}
          >
            {IMAGES.map((src, i) => (
              <motion.img
                key={src}
                src={src}
                alt={`Premium Real Estate Opportunity ${i + 1}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: i === currentIndex ? 1 : 0 }}
                transition={{ duration: 1.2 }}
                style={{ 
                  position: 'absolute', inset: 0, 
                  width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                  zIndex: i === currentIndex ? 1 : 0
                }}
              />
            ))}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(45deg, rgba(12,16,21,0.18) 0%, transparent 60%)',
              zIndex: 2,
            }} />
            <div style={{
              position: 'absolute', bottom: 0, left: 0,
              width: '100%', height: 4,
              background: 'linear-gradient(90deg, var(--accent), var(--accent-light), var(--accent))',
              zIndex: 2,
            }} />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
