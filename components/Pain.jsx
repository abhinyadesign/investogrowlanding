'use client';

import { motion } from 'framer-motion';
import { pain } from '@/data/content';
import { ArrowRight } from 'lucide-react';
import { useModal } from '@/components/ModalContext';

export default function Pain() {
  const { openModal } = useModal();
  return (
    <section id="problem" style={{ background: 'var(--bg-base)' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 40px' }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="label-premium" style={{ marginBottom: 20 }}>
            <span style={{ width: 20, height: 2, borderRadius: 2, background: 'var(--accent)', flexShrink: 0 }} />
            {pain.tag || 'The Problem'}
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="heading-premium"
            style={{ fontSize: 'clamp(30px, 4vw, 54px)', marginBottom: 64, maxWidth: 900 }}
          >
            {pain.heading}
          </motion.h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 2,
          background: 'var(--border-subtle)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
        }}>
          {pain.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: 'var(--bg-surface)',
                padding: '48px 40px',
                position: 'relative',
                overflow: 'hidden',
                transition: 'background 0.3s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg-secondary)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg-surface)'; }}
            >
              {/* Ghost number */}
              <div style={{
                position: 'absolute', top: 20, right: 24,
                fontSize: 80, fontWeight: 900,
                color: 'var(--accent)',
                opacity: 0.06,
                lineHeight: 1,
                fontStyle: 'italic',
                userSelect: 'none',
                pointerEvents: 'none',
              }}>
                {item.num}
              </div>

              {/* Serial indicator */}
              <div style={{
                fontSize: 11, fontWeight: 700, color: 'var(--accent)',
                letterSpacing: '2px', textTransform: 'uppercase', marginBottom: 20,
              }}>
                0{i + 1}
              </div>

              <p
                style={{
                  fontSize: 17, color: 'var(--text-secondary)', lineHeight: 1.75,
                  position: 'relative', zIndex: 1, letterSpacing: '-0.1px',
                  maxWidth: 360,
                }}
                dangerouslySetInnerHTML={{ __html: item.text.replace(/\*\*(.*?)\*\*/g, '<strong style="color:var(--text-primary);font-weight:700">$1</strong>') }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}
          style={{ display: 'flex', justifyContent: 'center', marginTop: 56 }}
        >
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
            Discuss Your Requirements <ArrowRight size={16} />
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}
