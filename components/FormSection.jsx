'use client';

import { motion } from 'framer-motion';
import ContactForm from './ContactForm';
import { ShieldCheck, Mail, CheckCircle2 } from 'lucide-react';

const TRUST_BULLETS = [
  'No spam or cold calls',
  'Direct line to Director Nitin Jain',
  '2-Hour verified callback',
];

export default function FormSection() {
  return (
    <section id="enquire" style={{ background: 'var(--bg-base)' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 40px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'clamp(40px, 6vw, 80px)',
          alignItems: 'start',
        }}>

          <motion.div
            initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{ paddingTop: 8 }}
          >
            <div className="label-premium">
              <Mail size={13} style={{ color: 'var(--accent)' }} />
              🔒 Serious Investors Only
            </div>

            <h2 className="heading-premium" style={{
              fontSize: 'clamp(28px, 4vw, 52px)', marginBottom: 20, lineHeight: 1.1,
            }}>
              This Is Not For Everyone.
            </h2>

            <p style={{
              fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.75,
              marginBottom: 48, maxWidth: 480,
            }}>
              We personally call back every inquiry. To ensure quality conversations, we only work with investors who are ready to commit ₹50 Lakhs or above.
            </p>

            {/* Trust bullets */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 48 }}>
              {TRUST_BULLETS.map((point, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{
                    width: 24, height: 24, borderRadius: 'var(--radius-full)',
                    background: 'rgba(212,175,55,0.12)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <CheckCircle2 size={14} style={{ color: 'var(--accent)' }} />
                  </div>
                  <span style={{ fontSize: 15, color: 'var(--text-secondary)', fontWeight: 500 }}>
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* Callback card */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: 16,
              padding: '24px 28px',
              background: 'var(--bg-secondary)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)',
            }}>
              <div style={{
                width: 52, height: 52, borderRadius: 'var(--radius-md)',
                background: 'var(--bg-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <ShieldCheck size={24} style={{ color: 'var(--accent)' }} />
              </div>
              <div>
                <div style={{ fontSize: 17, fontWeight: 900, color: 'var(--text-primary)', letterSpacing: '-0.3px' }}>
                  2-Hour Callback
                </div>
                <div style={{ fontSize: 13, color: 'var(--text-muted)', fontWeight: 500, marginTop: 3 }}>
                  Expect a verification call within 120 minutes.
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="premium-card"
            style={{
              padding: 'clamp(32px, 4vw, 48px)',
              background: 'var(--bg-surface)',
              boxShadow: 'var(--shadow-lg)',
            }}
          >
            <ContactForm />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
