'use client';

import { motion } from 'framer-motion';
import { location } from '@/data/content';
import { MapPin, ArrowUpRight } from 'lucide-react';

export default function Location() {
  const data = location;

  return (
    <section id="location" style={{ background: 'var(--bg-secondary)' }}>
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
              <MapPin size={13} style={{ color: 'var(--accent)' }} />
              {data.tag || 'Strategic Location'}
            </div>

            <h2 className="heading-premium" style={{
              fontSize: 'clamp(28px, 4vw, 52px)', marginBottom: 20, lineHeight: 1.1,
            }}>
              {data.heading}
            </h2>

            <p style={{
              fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: 36,
            }}>
              {data.subtext || 'Perfectly positioned at Advant Sector 142, Noida, ensuring your business stays connected to the most vital hubs.'}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {data.points.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    borderBottom: '1px solid var(--border-subtle)', padding: '18px 0',
                    gap: 16,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span style={{ display: 'flex', alignItems: 'center', color: 'var(--accent)' }}>
                      <p.icon size={20} />
                    </span>
                    <span style={{
                      fontSize: 15, fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.2px',
                    }}>{p.name || p.label}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
                    <span style={{
                      fontSize: 10, color: 'var(--text-muted)', textTransform: 'uppercase',
                      letterSpacing: '1px', fontWeight: 600,
                    }}>Distance</span>
                    <span style={{
                      fontSize: 13, color: 'var(--accent)', fontWeight: 800,
                      background: 'var(--bg-dark)', padding: '5px 14px', borderRadius: 100,
                      whiteSpace: 'nowrap',
                    }}>{p.time}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'relative',
              minHeight: 520,
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-xl)',
            }}
          >
            <iframe
              src="https://maps.google.com/maps?q=Advant+Navis+Business+Park,+Sector+142,+Noida&t=&z=14&ie=UTF8&iwloc=&output=embed"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            {/* Bottom fade */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0, height: '25%',
              background: 'linear-gradient(to top, rgba(12,16,21,0.85) 0%, transparent 100%)',
              pointerEvents: 'none',
            }} />
            <motion.button
              whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(0,0,0,0.4)' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => window.open('https://maps.app.goo.gl/Prk422Jfm8aioJ9c7?g_st=aw', '_blank')}
              style={{
                position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)',
                background: '#fff', color: 'var(--bg-dark)',
                padding: '16px 32px', fontSize: 12, fontWeight: 800,
                display: 'flex', alignItems: 'center', gap: 10,
                borderRadius: 'var(--radius-full)',
                letterSpacing: '0.1em', textTransform: 'uppercase',
                border: 'none', cursor: 'pointer',
                boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap',
              }}
            >
              Locate on Google Maps <ArrowUpRight size={16} style={{ color: 'var(--accent)' }} />
            </motion.button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
