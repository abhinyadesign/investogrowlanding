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
        scrolled ? 'bg-white/90 shadow-sm border-b border-gray-200 text-gray-900' : 'bg-transparent text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex flex-col leading-none">
            <span className="text-xl font-black tracking-tight">
              Investo<span className="text-amber-500">Grow</span>
            </span>
            <span className={`text-[10px] tracking-widest uppercase ${scrolled ? 'text-gray-500' : 'text-white/50'}`}>
              Real Estate
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-amber-500 ${scrolled ? 'text-gray-700' : 'text-white/70'}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${siteConfig.phone}`}
              className={`flex items-center gap-2 text-sm transition-colors hover:text-amber-500 ${scrolled ? 'text-gray-700' : 'text-white/80'}`}
            >
              <Phone size={14} />
              {siteConfig.phone}
            </a>
            <button
              id="navbar-enquire-btn"
              onClick={openModal}
              className={`text-sm font-bold px-5 py-2.5 rounded-lg transition-all duration-200 ${
                scrolled 
                  ? 'bg-amber-500 hover:bg-amber-600 text-black' 
                  : 'bg-amber-500 hover:bg-amber-400 text-black'
              }`}
            >
              Enquire Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-btn"
            className={`md:hidden p-2 ${scrolled ? 'text-gray-900' : 'text-white'}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white text-gray-900 border-t border-gray-100 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-700 hover:text-amber-500 py-2 text-sm font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-gray-100 space-y-3">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-2 text-gray-700 text-sm"
            >
              <Phone size={14} />
              {siteConfig.phone}
            </a>
            <button
              id="mobile-enquire-btn"
              onClick={() => { openModal(); setMenuOpen(false); }}
              className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 rounded-lg transition-colors"
            >
              Enquire Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
