'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled]           = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink]       = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview',    href: '#problem'    },
    { name: 'Calculator',  href: '#calculator' },
    { name: 'Inventory',   href: '#units'      },
    { name: 'Location',    href: '#location'   },
  ];

  const scrollTo = (href) => {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={scrolled ? 'glass-premium' : ''}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? undefined : 'transparent',
        transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        padding: scrolled ? '12px 0' : '24px 0',
      }}
    >
      <div style={{
        maxWidth: 1400, margin: '0 auto',
        padding: '0 40px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between'
      }}>

        {/* Logo */}
        <a
          href="#hero"
          onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}
        >
          <img 
            src="/images/logo.png" 
            alt="InvestoGrow Logo" 
            style={{ 
              height: scrolled ? 40 : 48, 
              width: 'auto',
              transition: 'height 0.4s ease',
              filter: scrolled ? 'none' : 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' 
            }} 
          />
          <div style={{
            fontWeight: 800, fontSize: 20, letterSpacing: '-0.05em',
            color: scrolled ? 'var(--text-primary)' : '#fff',
            transition: 'color 0.4s ease',
            display: 'flex', alignItems: 'center'
          }}>
            Investo<span style={{ color: 'var(--accent)', marginLeft: 1 }}>Grow</span>
          </div>
        </a>

        {/* Desktop Links */}
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={e => { e.preventDefault(); scrollTo(link.href); setActiveLink(link.name); }}
              style={{
                position: 'relative',
                fontSize: 11, fontWeight: 700,
                color: scrolled ? 'var(--text-secondary)' : 'rgba(255,255,255,0.75)',
                textTransform: 'uppercase', letterSpacing: '1.5px', textDecoration: 'none',
                padding: '8px 14px',
                borderRadius: 'var(--radius-full)',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = scrolled ? 'var(--text-primary)' : '#fff';
                e.currentTarget.style.background = scrolled ? 'var(--bg-secondary)' : 'rgba(255,255,255,0.1)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = scrolled ? 'var(--text-secondary)' : 'rgba(255,255,255,0.75)';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <a
            href="tel:+918595922033"
            style={{
              display: 'flex', alignItems: 'center', gap: 8, fontSize: 12,
              fontWeight: 700,
              color: scrolled ? 'var(--text-primary)' : 'rgba(255,255,255,0.9)',
              textDecoration: 'none',
              transition: 'color 0.4s ease',
            }}
            className="desktop-nav"
          >
            <Phone size={13} style={{ color: 'var(--accent)' }} /> +91 859 592 2033
          </a>

          <button
            onClick={() => {
              const el = document.getElementById('enquire') || document.getElementById('contact');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{
              background: scrolled ? 'var(--bg-dark)' : 'rgba(212,175,55,1)',
              color: scrolled ? '#fff' : 'var(--bg-dark)',
              padding: '10px 22px', border: 'none', fontWeight: 800,
              fontSize: 11, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8,
              borderRadius: 'var(--radius-full)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              boxShadow: scrolled ? 'none' : '0 4px 20px rgba(212,175,55,0.35)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = scrolled ? 'none' : '0 4px 20px rgba(212,175,55,0.35)';
            }}
          >
            Contact <ArrowUpRight size={14} />
          </button>

          <button
            style={{
              display: 'none', background: 'none', border: 'none', cursor: 'pointer',
              color: scrolled ? 'var(--text-primary)' : '#fff',
              width: 40, height: 40, borderRadius: 'var(--radius-sm)',
              alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.2s ease',
            }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 767px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: 'var(--bg-base)', zIndex: 999,
          padding: '0 24px 32px',
          display: 'flex', flexDirection: 'column',
          animation: 'fade-up 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        }}>
          {/* Mobile header */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '20px 0', borderBottom: '1px solid var(--border-subtle)', marginBottom: 40,
          }}>
            <div style={{ fontWeight: 800, fontSize: 20, letterSpacing: '-0.05em' }}>
              Investo<span style={{ color: 'var(--accent)' }}>Grow</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-primary)', display: 'flex' }}
            >
              <X size={24} />
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={e => { e.preventDefault(); scrollTo(link.href); }}
                style={{
                  fontSize: 28, fontWeight: 800, color: 'var(--text-primary)',
                  textTransform: 'uppercase', letterSpacing: '-0.02em', textDecoration: 'none',
                  padding: '14px 0', borderBottom: '1px solid var(--border-subtle)',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-primary)'}
              >
                {link.name}
                <ArrowUpRight size={20} style={{ opacity: 0.3 }} />
              </a>
            ))}
          </div>

          <div style={{ marginTop: 'auto' }}>
            <a href="tel:+918595922033" style={{
              display: 'flex', alignItems: 'center', gap: 12, fontSize: 16,
              fontWeight: 700, color: 'var(--text-primary)', textDecoration: 'none', marginBottom: 20,
            }}>
              <Phone size={18} style={{ color: 'var(--accent)' }} /> +91 859 592 2033
            </a>
            <button
              onClick={() => { setMobileMenuOpen(false); document.getElementById('enquire')?.scrollIntoView({ behavior: 'smooth' }); }}
              style={{
                width: '100%', background: 'var(--bg-dark)', color: '#fff',
                padding: '18px', border: 'none', fontWeight: 800,
                fontSize: 13, cursor: 'pointer', borderRadius: 'var(--radius-full)',
                letterSpacing: '0.12em', textTransform: 'uppercase',
              }}
            >
              Contact Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
