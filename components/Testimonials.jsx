'use client';

import { motion } from 'framer-motion';
import { testimonials } from '@/data/content';
import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  const data = testimonials;

  return (
    <section id="testimonials" style={{ background: 'var(--bg-secondary)' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 40px' }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginBottom: 72 }}
        >
          <div className="label-premium" style={{ justifyContent: 'center' }}>
            <span style={{ width: 20, height: 2, borderRadius: 2, background: 'var(--accent)', flexShrink: 0 }} />
            {data.tag || 'The Proof'}
          </div>
          <h2 className="heading-premium" style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}>
            {data.heading || 'Trusted by Discerning Investors'}
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 24,
        }}>
          {data.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="premium-card"
              style={{
                padding: '40px 36px',
                background: 'var(--bg-surface)',
                display: 'flex', flexDirection: 'column',
              }}
            >
              {/* Stars */}
              <div style={{ display: 'flex', gap: 4, marginBottom: 20 }}>
                {[...Array(5)].map((_, si) => (
                  <Star key={si} size={14} style={{ color: 'var(--accent)', fill: 'var(--accent)' }} />
                ))}
              </div>

              <Quote size={28} style={{ color: 'var(--accent)', marginBottom: 20, opacity: 0.6 }} />

              <blockquote style={{
                fontSize: 16, color: 'var(--text-primary)', lineHeight: 1.7,
                marginBottom: 36, fontStyle: 'italic', fontWeight: 400, flex: 1,
              }}>
                {item.quote}
              </blockquote>

              <div style={{
                display: 'flex', alignItems: 'center', gap: 16,
                borderTop: '1px solid var(--border-subtle)', paddingTop: 24,
              }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 'var(--radius-full)',
                  border: '2px solid var(--accent)',
                  overflow: 'hidden', flexShrink: 0,
                  background: 'var(--accent-dim)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {['/images/ShivamSharma.png', '/images/MahimaKumari.png'][i] ? (
                    <img
                      src={['/images/ShivamSharma.png', '/images/MahimaKumari.png'][i]}
                      alt={item.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  ) : (
                    <div style={{ fontSize: 18, fontWeight: 900, color: 'var(--accent)' }}>
                      {item.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}
                </div>
                <div>
                  <div style={{
                    fontSize: 16, fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.2px',
                  }}>
                    {item.name}
                  </div>
                  <div style={{
                    fontSize: 11, color: 'var(--text-muted)',
                    textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 600, marginTop: 3,
                  }}>
                    {item.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
