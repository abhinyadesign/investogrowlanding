'use client';

import { motion } from 'framer-motion';
import { airportUrgency } from '@/data/content';
import { Plane, AlertTriangle } from 'lucide-react';

export default function AirportUrgency() {
  const data = airportUrgency;

  return (
    <section id="airport" style={{ background: 'var(--bg-base)' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 40px' }}>

        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
            style={{
              width: 80, height: 80, background: 'var(--bg-dark)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 32px', borderRadius: 'var(--radius-lg)',
              boxShadow: '0 20px 48px rgba(12,16,21,0.15)',
            }}
          >
            <Plane size={30} style={{ color: 'var(--accent)' }} />
          </motion.div>

          <div className="label-premium" style={{ justifyContent: 'center' }}>
            <span style={{ width: 20, height: 2, borderRadius: 2, background: 'var(--accent)', flexShrink: 0 }} />
            {data.tag || 'Strategic Advantage'}
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="heading-premium"
            style={{ fontSize: 'clamp(28px, 4.5vw, 52px)', marginBottom: 24, maxWidth: 800, margin: '0 auto 24px' }}
          >
            {data.heading}
          </motion.h2>

          <p
            style={{
              fontSize: 17, color: 'var(--text-secondary)', lineHeight: 1.8,
              maxWidth: 720, margin: '0 auto',
            }}
            dangerouslySetInnerHTML={{ __html: data.desc.replace(/\*\*(.*?)\*\*/g, '<strong style="color:var(--text-primary);font-weight:700">$1</strong>') }}
          />
        </div>

        {/* Timeline Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 2,
          background: 'var(--border-subtle)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          marginBottom: 40,
          boxShadow: 'var(--shadow-md)',
        }}>
          {data.timeline.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: step.active ? 'var(--bg-dark)' : 'var(--bg-surface)',
                padding: '44px 36px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {step.active && (
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                  background: 'linear-gradient(90deg, var(--accent), var(--accent-light))',
                }} />
              )}
              <div style={{
                fontSize: 10, fontWeight: 800,
                color: step.active ? 'var(--accent)' : 'var(--text-muted)',
                textTransform: 'uppercase', letterSpacing: '2.5px', marginBottom: 20,
              }}>
                {step.time}
              </div>
              <div style={{
                fontSize: 22, fontWeight: 800,
                color: step.active ? '#fff' : 'var(--text-primary)',
                marginBottom: 10, letterSpacing: '-0.3px',
              }}>
                {step.phase}
              </div>
              <div style={{
                display: 'inline-block',
                padding: '4px 12px', borderRadius: 100,
                background: step.active ? 'rgba(212,175,55,0.15)' : 'var(--bg-secondary)',
                fontSize: 10, fontWeight: 700,
                color: step.active ? 'var(--accent)' : 'var(--text-muted)',
                letterSpacing: '1px', textTransform: 'uppercase',
              }}>
                {step.tag}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Warning Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          style={{
            maxWidth: 960, margin: '0 auto',
            padding: 'clamp(24px, 3vw, 40px) clamp(24px, 4vw, 48px)',
            background: 'rgba(212,175,55,0.04)',
            borderRadius: 'var(--radius-lg)',
            display: 'flex', alignItems: 'center', gap: 24,
            border: '1px solid rgba(212,175,55,0.2)',
            borderLeft: '5px solid var(--accent)',
          }}
        >
          <div style={{
            width: 52, height: 52, borderRadius: 'var(--radius-md)',
            background: 'var(--bg-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0, boxShadow: 'var(--shadow-sm)',
          }}>
            <AlertTriangle size={22} style={{ color: 'var(--accent)' }} />
          </div>
          <p
            style={{ fontSize: 16, color: 'var(--text-primary)', lineHeight: 1.75, margin: 0, fontWeight: 500 }}
            dangerouslySetInnerHTML={{ __html: data.warning.replace(/\*\*(.*?)\*\*/g, '<strong style="color:var(--accent);font-weight:800">$1</strong>') }}
          />
        </motion.div>

      </div>
    </section>
  );
}
