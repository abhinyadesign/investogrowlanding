'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { calculatorConfig } from '@/data/content';
import { TrendingUp, Coins } from 'lucide-react';

export default function Calculator() {
  const [investAmount, setInvestAmount] = useState(50);
  const data = calculatorConfig;

  const MIN = 50, MAX = 500;
  const pct = ((investAmount - MIN) / (MAX - MIN)) * 100;

  const payNow       = investAmount / 2;
  const payPos       = investAmount / 2;
  const monthly      = (investAmount * 100000 * 0.12) / 12;
  const annual       = investAmount * 100000 * 0.12;
  const fiveYearRent = annual * 5;
  const capVal       = investAmount * 100000 * 1.25;
  const totalWealth  = fiveYearRent + capVal;

  const fmt  = (v) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(v);
  const fmtL = (v) => `₹${v} Lakhs`;

  const StatRow = ({ label, value, isLast }) => (
    <div style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      paddingBottom: isLast ? 0 : 16,
      marginBottom: isLast ? 0 : 16,
      borderBottom: isLast ? 'none' : '1px solid rgba(255,255,255,0.07)',
    }}>
      <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>{label}</span>
      <span style={{ fontSize: 17, fontWeight: 700, color: '#fff' }}>{value}</span>
    </div>
  );

  return (
    <section id="calculator" style={{ background: 'var(--bg-base)' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 40px' }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: 72, textAlign: 'center' }}
        >
          <span className="label-premium" style={{ justifyContent: 'center' }}>
            <Coins size={13} style={{ color: 'var(--accent)' }} /> {data.tag}
          </span>
          <h2 className="heading-premium" style={{ fontSize: 'clamp(30px, 4.5vw, 56px)', marginBottom: 16 }}>
            {data.heading}
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 24,
          alignItems: 'stretch',
        }}>

          {/* Left: Configuration */}
          <motion.div
            initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="premium-card"
            style={{ padding: '44px 40px' }}
          >
            <div style={{
              fontSize: 10, fontWeight: 700, color: 'var(--text-muted)',
              textTransform: 'uppercase', letterSpacing: '2.5px', marginBottom: 36,
            }}>
              Configure Your Investment
            </div>

            <div style={{ marginBottom: 48 }}>
              <div style={{
                display: 'flex', justifyContent: 'space-between',
                alignItems: 'flex-end', marginBottom: 28,
              }}>
                <span style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-secondary)' }}>Capital Size</span>
                <span style={{
                  fontSize: 'clamp(36px, 4vw, 48px)', fontWeight: 800,
                  color: 'var(--text-primary)', letterSpacing: '-2px',
                }}>
                  {fmtL(investAmount)}
                </span>
              </div>
              <input
                type="range" min={MIN} max={MAX} step="10"
                value={investAmount}
                onChange={e => setInvestAmount(+e.target.value)}
                className="saas-slider"
                style={{ width: '100%', cursor: 'pointer', '--pct': `${pct}%` }}
              />
              <div style={{
                display: 'flex', justifyContent: 'space-between',
                marginTop: 10, fontSize: 11, color: 'var(--text-muted)', fontWeight: 600,
              }}>
                <span>₹50L</span>
                <span>₹500L</span>
              </div>
            </div>

            {/* Payment Plan */}
            <div style={{
              background: 'var(--bg-secondary)',
              padding: '32px 36px',
              borderRadius: 'var(--radius-md)',
              borderLeft: '3px solid var(--accent)',
            }}>
              <div style={{
                fontSize: 10, fontWeight: 800, color: 'var(--accent)',
                textTransform: 'uppercase', letterSpacing: '2px', marginBottom: 24,
              }}>
                50:50 Ease Plan
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 14, color: 'var(--text-secondary)', fontWeight: 500 }}>Immediate Booking (50%)</span>
                  <span style={{ fontSize: 17, fontWeight: 800, color: 'var(--text-primary)' }}>{fmtL(payNow)}</span>
                </div>
                <div style={{ height: 1, background: 'var(--border-subtle)' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 14, color: 'var(--text-secondary)', fontWeight: 500 }}>On Possession (50%)</span>
                  <span style={{ fontSize: 17, fontWeight: 800, color: 'var(--text-primary)' }}>{fmtL(payPos)}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Projections */}
          <motion.div
            initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              padding: '44px 40px',
              background: 'var(--bg-dark)',
              borderRadius: 'var(--radius-lg)',
              color: '#fff',
              boxShadow: '0 40px 80px rgba(12,16,21,0.25)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div style={{
              position: 'absolute', inset: 0, opacity: 0.03,
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(212,175,55,1) 40px, rgba(212,175,55,1) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(212,175,55,1) 40px, rgba(212,175,55,1) 41px)',
              pointerEvents: 'none',
            }} />

            <div style={{
              position: 'relative', zIndex: 1,
              fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.35)',
              textTransform: 'uppercase', letterSpacing: '2.5px', marginBottom: 36,
            }}>
              Earnings Projection
            </div>

            <div style={{ position: 'relative', zIndex: 1, marginBottom: 36 }}>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', marginBottom: 10, fontWeight: 500 }}>
                Estimated Monthly Rental
              </div>
              <div
                className="shimmer-num"
                style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, letterSpacing: '-2px' }}
              >
                {fmt(monthly)}
              </div>
            </div>

            <div style={{ position: 'relative', zIndex: 1, height: 1, background: 'rgba(255,255,255,0.07)', margin: '0 0 36px' }} />

            <div style={{ position: 'relative', zIndex: 1, marginBottom: 32 }}>
              <StatRow label="5-Year Rental Total" value={fmt(fiveYearRent)} />
              <StatRow label="Appreciated Value (Y1)" value={fmt(capVal)} isLast />
            </div>

            <div style={{
              position: 'relative', zIndex: 1,
              background: 'rgba(212,175,55,0.08)',
              border: '1px solid rgba(212,175,55,0.2)',
              borderRadius: 'var(--radius-md)',
              padding: '24px 28px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 32,
            }}>
              <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--accent)' }}>Total Wealth Appreciation</span>
              <span className="gradient-text" style={{ fontSize: 26, fontWeight: 900 }}>{fmt(totalWealth)}</span>
            </div>

            <div style={{
              position: 'relative', zIndex: 1,
              fontSize: 11, color: 'rgba(255,255,255,0.28)', lineHeight: 1.65,
              display: 'flex', gap: 10,
            }}>
              <TrendingUp size={14} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 2 }} />
              <p style={{ margin: 0 }}>{data.assumptions}</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
