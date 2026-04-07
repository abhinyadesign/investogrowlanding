'use client';

import { siteConfig, footer } from '@/data/content';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

const NAV_LINKS = ['Overview', 'Opportunity', 'Inventory', 'Calculator', 'Location'];
const LEGAL     = ['Privacy Policy', 'Terms of Service', 'RERA Disclaimer'];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      background: 'var(--bg-dark)',
      color: '#fff',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Gold top accent line */}
      <div style={{
        height: 2,
        background: 'linear-gradient(90deg, transparent 0%, var(--accent) 30%, var(--accent-light) 50%, var(--accent) 70%, transparent 100%)',
      }} />

      {/* Subtle pattern */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(rgba(212,175,55,0.04) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'relative', zIndex: 1,
        maxWidth: 1400, margin: '0 auto',
        padding: 'clamp(48px, 7vw, 80px) 40px 40px',
      }}>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 'clamp(32px, 5vw, 64px)',
          marginBottom: 64,
        }}>

          {/* Brand column */}
          <div style={{ maxWidth: 360 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <img 
                src="/images/logo.png" 
                alt="InvestoGrow Logo" 
                style={{ height: 48, width: 'auto' }} 
              />
              <div style={{ fontWeight: 800, fontSize: 26, letterSpacing: '-0.05em', color: '#fff' }}>
                Investo<span style={{ color: 'var(--accent)' }}>Grow</span>
              </div>
            </div>
            <div style={{
              fontSize: 11, color: 'var(--accent)', fontWeight: 700,
              letterSpacing: '1.5px', marginBottom: 24,
            }}>
              {siteConfig.legalName}
            </div>

            <p style={{
              fontSize: 15, color: 'rgba(255,255,255,0.45)', lineHeight: 1.8, marginBottom: 32,
            }}>
              {footer.about || 'Specialized in premium commercial real estate investments. Authorised channel partner for GYGY Mentis, Sector 140, Noida.'}
            </p>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: 10 }}>
              {['FB', 'LI', 'IG', 'TW'].map((social) => (
                <a key={social} href="#" style={{
                  width: 40, height: 40, borderRadius: 'var(--radius-sm)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'rgba(255,255,255,0.04)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 10, fontWeight: 800, color: 'rgba(255,255,255,0.45)',
                  textDecoration: 'none', transition: 'all 0.25s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.border = '1px solid var(--accent)';
                  e.currentTarget.style.color  = 'var(--accent)';
                  e.currentTarget.style.background = 'rgba(212,175,55,0.06)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.border = '1px solid rgba(255,255,255,0.08)';
                  e.currentTarget.style.color  = 'rgba(255,255,255,0.45)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                }}
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{
              fontSize: 10, fontWeight: 800, color: 'var(--accent)',
              textTransform: 'uppercase', letterSpacing: '3px', marginBottom: 28,
            }}>Navigation</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {NAV_LINKS.map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} style={{
                  fontSize: 15, color: 'rgba(255,255,255,0.5)', textDecoration: 'none',
                  fontWeight: 500, display: 'flex', alignItems: 'center', gap: 8,
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => {
                  const arr = e.currentTarget.querySelector('.nav-arrow');
                  e.currentTarget.style.color = '#fff';
                  if (arr) arr.style.opacity = '1';
                }}
                onMouseLeave={e => {
                  const arr = e.currentTarget.querySelector('.nav-arrow');
                  e.currentTarget.style.color = 'rgba(255,255,255,0.5)';
                  if (arr) arr.style.opacity = '0';
                }}
                >
                  {link}
                  <ArrowUpRight size={12} className="nav-arrow" style={{ opacity: 0, transition: 'opacity 0.2s ease', color: 'var(--accent)' }} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{
              fontSize: 10, fontWeight: 800, color: 'var(--accent)',
              textTransform: 'uppercase', letterSpacing: '3px', marginBottom: 28,
            }}>Contact Info</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <a href={`tel:${siteConfig.phone}`} style={{
                display: 'flex', alignItems: 'center', gap: 14,
                fontSize: 15, color: 'rgba(255,255,255,0.7)', fontWeight: 500,
                textDecoration: 'none', transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
              >
                <div style={{
                  width: 36, height: 36, borderRadius: 'var(--radius-sm)',
                  background: 'rgba(255,255,255,0.05)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <Phone size={16} style={{ color: 'var(--accent)' }} />
                </div>
                {siteConfig.phone}
              </a>

              <a href={`mailto:${siteConfig.email}`} style={{
                display: 'flex', alignItems: 'center', gap: 14,
                fontSize: 15, color: 'rgba(255,255,255,0.7)', fontWeight: 500,
                textDecoration: 'none', transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
              >
                <div style={{
                  width: 36, height: 36, borderRadius: 'var(--radius-sm)',
                  background: 'rgba(255,255,255,0.05)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <Mail size={16} style={{ color: 'var(--accent)' }} />
                </div>
                {siteConfig.email}
              </a>

              <div style={{
                display: 'flex', alignItems: 'flex-start', gap: 14,
                fontSize: 15, color: 'rgba(255,255,255,0.7)', fontWeight: 500, lineHeight: 1.6,
              }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 'var(--radius-sm)',
                  background: 'rgba(255,255,255,0.05)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, marginTop: 2,
                }}>
                  <MapPin size={16} style={{ color: 'var(--accent)' }} />
                </div>
                {siteConfig.address}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: 32,
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'flex-start', flexWrap: 'wrap', gap: 20,
        }}>
          <p style={{
            fontSize: 12, color: 'rgba(255,255,255,0.25)', fontWeight: 400,
            lineHeight: 1.7, maxWidth: 640,
          }}>
            {footer.disclaimer}
          </p>
          <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap' }}>
            {LEGAL.map((item) => (
              <a key={item} href="#" style={{
                fontSize: 12, color: 'rgba(255,255,255,0.28)', textDecoration: 'none',
                fontWeight: 500, transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.28)'}
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        <div style={{
          marginTop: 24, fontSize: 12, color: 'rgba(255,255,255,0.15)',
          textAlign: 'center', fontWeight: 400,
        }}>
          © {year} InvestoGrow. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
