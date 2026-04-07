'use client';

import { motion } from 'framer-motion';
import { projectDetails } from '@/data/content';
import { Layout } from 'lucide-react';

export default function ProjectDetails() {
  const data = projectDetails;

  return (
    <section id="project" style={{ background: 'var(--bg-secondary)' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 40px' }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: 72, textAlign: 'center' }}
        >
          <div className="label-premium" style={{ justifyContent: 'center' }}>
            <Layout size={13} style={{ color: 'var(--accent)' }} />
            {data.tag || 'The Project'}
          </div>
          <h2 className="heading-premium" style={{ fontSize: 'clamp(28px, 4vw, 52px)', marginBottom: 16 }}>
            {data.heading}
          </h2>
        </motion.div>

        {/* Highlights & Overview */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 24,
          marginBottom: 56,
        }}>
          {[
            { emoji: '📊', title: 'Investment Highlights', items: data.highlights },
            { emoji: '🏢', title: 'Project Overview',      items: data.overview   },
          ].map(({ emoji, title, items }, ci) => (
            <motion.div
              key={ci}
              initial={{ opacity: 0, x: ci === 0 ? -24 : 24 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.8, delay: ci * 0.1 }}
              className="premium-card"
              style={{ padding: '36px 32px', background: 'var(--bg-surface)' }}
            >
              <h3 style={{
                fontSize: 16, fontWeight: 800, color: 'var(--text-primary)',
                marginBottom: 28, display: 'flex', alignItems: 'center', gap: 10,
              }}>
                <span style={{
                  width: 36, height: 36, borderRadius: 'var(--radius-sm)',
                  background: 'var(--accent-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 18,
                }}>
                  {emoji}
                </span>
                {title}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {items.map((h, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'flex-start', gap: 12,
                    fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.65,
                  }}>
                    <span style={{
                      width: 20, height: 20, borderRadius: '50%',
                      background: 'rgba(212,175,55,0.12)', color: 'var(--accent)',
                      fontWeight: 800, fontSize: 11,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0, marginTop: 2,
                    }}>✓</span>
                    <span dangerouslySetInnerHTML={{ __html: h.replace(/\*\*(.*?)\*\*/g, '<strong style="color:var(--text-primary);font-weight:700">$1</strong>') }} />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Units heading */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <h3 className="heading-premium" style={{ fontSize: 28, marginBottom: 10 }}>{data.unitsHeading}</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: 15 }}>{data.unitsSub}</p>
        </div>

        {/* Unit Types Grid */}
        <div id="units" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 20,
          marginBottom: 56,
        }}>
          {data.units.map((unit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }}
              className="premium-card"
              style={{
                padding: '40px 28px', textAlign: 'center',
                background: 'var(--bg-surface)',
                cursor: 'default',
              }}
            >
              <div style={{
                width: 64, height: 64, margin: '0 auto 20px',
                background: 'var(--accent-dim)',
                borderRadius: 'var(--radius-md)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 30,
              }}>
                {unit.icon}
              </div>
              <h4 style={{ fontSize: 17, fontWeight: 800, color: 'var(--text-primary)', marginBottom: 10 }}>
                {unit.type}
              </h4>
              <div style={{ fontSize: 26, fontWeight: 900, color: 'var(--accent)', marginBottom: 6, letterSpacing: '-0.5px' }}>
                {unit.price}
              </div>
              <div style={{
                fontSize: 11, color: 'var(--text-muted)',
                textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 600, marginBottom: 16,
              }}>
                {unit.size}
              </div>
              <div style={{
                display: 'inline-block', padding: '5px 14px', borderRadius: 100,
                background: 'rgba(212,175,55,0.1)',
                color: 'var(--accent)', fontSize: 10, fontWeight: 800, letterSpacing: '1.5px',
                textTransform: 'uppercase',
              }}>
                {unit.badge}
              </div>
            </motion.div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <motion.button
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById('enquire')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              padding: '18px 48px', background: 'var(--bg-dark)',
              border: 'none', borderRadius: 'var(--radius-full)',
              fontSize: 12, fontWeight: 800, color: '#fff',
              cursor: 'pointer',
              textTransform: 'uppercase', letterSpacing: '0.12em',
              boxShadow: '0 8px 24px rgba(12,16,21,0.2)',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            Get Full Inventory Details →
          </motion.button>
        </div>

      </div>
    </section>
  );
}
