'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Menu, X } from 'lucide-react';
import { useModal } from '@/components/ModalContext';
import { siteConfig, navLinks } from '@/data/content';

export default function Navbar() {
  const { openModal } = useModal();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-[#0a0b0f]/95 shadow-lg backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex flex-col leading-none">
            <span className="text-xl font-black text-white tracking-tight">
              Investo<span className="text-amber-400">Grow</span>
            </span>
            <span className="text-[10px] text-white/50 tracking-widest uppercase">
              Real Estate
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/70 hover:text-amber-400 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-2 text-sm text-white/80 hover:text-amber-400 transition-colors"
            >
              <Phone size={14} />
              {siteConfig.phone}
            </a>
            <button
              id="navbar-enquire-btn"
              onClick={openModal}
              className="bg-amber-500 hover:bg-amber-400 text-black text-sm font-bold px-5 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/25"
            >
              Enquire Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-btn"
            className="md:hidden p-2 text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a0b0f]/98 border-t border-white/5 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-white/70 hover:text-amber-400 py-2 text-sm font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-white/10 space-y-3">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-2 text-white/70 text-sm"
            >
              <Phone size={14} />
              {siteConfig.phone}
            </a>
            <button
              id="mobile-enquire-btn"
              onClick={() => { openModal(); setMenuOpen(false); }}
              className="w-full bg-amber-500 hover:bg-amber-400 text-black font-bold py-3 rounded-lg transition-colors"
            >
              Enquire Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
