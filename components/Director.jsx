'use client';

import { motion } from 'framer-motion';
import { director } from '@/data/content';
import { Quote } from 'lucide-react';

export default function Director() {
  const data = director;

  return (
    <section id="director" style={{ background: 'var(--bg-base)' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 40px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'clamp(40px, 6vw, 80px)',
          alignItems: 'center',
        }}>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative' }}
          >
            <div style={{
              position: 'relative', zIndex: 1,
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-xl)',
            }}>
              <img
                src="/images/nitinji.png"
                alt="Director"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
              {/* Bottom meta strip */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                background: 'linear-gradient(to top, rgba(12,16,21,0.85) 0%, transparent 100%)',
                padding: '40px 28px 28px',
              }}>
                <div style={{ fontSize: 18, fontWeight: 800, color: '#fff', marginBottom: 4 }}>{data.name}</div>
                <div style={{
                  fontSize: 10, fontWeight: 700, color: 'var(--accent)',
                  textTransform: 'uppercase', letterSpacing: '2px',
                }}>
                  {data.title || 'Director'}
                </div>
              </div>
            </div>

            {/* Architectural accent frame */}
            <div style={{
              position: 'absolute', bottom: -20, right: -20,
              width: 160, height: 160,
              borderBottom: '3px solid var(--accent)',
              borderRight: '3px solid var(--accent)',
              zIndex: 0, opacity: 0.45,
              borderRadius: '0 0 var(--radius-md) 0',
            }} />
          </motion.div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="label-premium" style={{ marginBottom: 24 }}>
              <span style={{ width: 20, height: 2, borderRadius: 2, background: 'var(--accent)', flexShrink: 0 }} />
              Project Leadership
            </div>

            <Quote size={44} style={{ color: 'var(--accent)', marginBottom: 24, opacity: 0.18 }} />

            <blockquote style={{
              fontSize: 'clamp(18px, 2vw, 24px)',
              lineHeight: 1.6, marginBottom: 40,
              fontStyle: 'italic', fontWeight: 400,
              color: 'var(--text-primary)',
              letterSpacing: '-0.01em',
            }}>
              &ldquo;{data.quote.replace(/\*\*/g, '')}&rdquo;
            </blockquote>

            <div style={{
              display: 'flex', alignItems: 'center', gap: 20,
              borderTop: '1px solid var(--border-subtle)', paddingTop: 32,
            }}>
              <div style={{
                width: 4, height: 48, borderRadius: 99,
                background: 'linear-gradient(to bottom, var(--accent), var(--accent-light))',
                flexShrink: 0,
              }} />
              <div>
                <div style={{ fontSize: 19, fontWeight: 900, color: 'var(--text-primary)', letterSpacing: '-0.03em' }}>
                  {data.name}
                </div>
                <div style={{
                  fontSize: 11, color: 'var(--accent)',
                  textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700, marginTop: 4,
                }}>
                  {data.title || 'Director'}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
