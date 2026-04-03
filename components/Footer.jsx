'use client';

import { Phone, Mail, MapPin } from 'lucide-react';
import { useModal } from '@/components/ModalContext';
import { siteConfig, navLinks, cmsLinks, utilityLinks } from '@/data/content';

export default function Footer() {
  const { openModal } = useModal();

  return (
    <footer className="bg-[#060709] border-t border-white/8 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand & Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <span className="text-2xl font-black text-white tracking-tight">
                {siteConfig.name}
              </span>
            </div>
            
            <div className="space-y-4">
              <a
                href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`}
                className="flex items-center gap-3 text-white/70 hover:text-amber-400 text-sm transition-colors"
              >
                <Phone size={16} className="text-amber-500" />
                {siteConfig.phone}
              </a>
              
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-white/70 hover:text-amber-400 text-sm transition-colors break-all"
              >
                <Mail size={16} className="text-amber-500" />
                {siteConfig.email}
              </a>
              
              <div className="flex items-start gap-3 text-white/70 text-sm leading-relaxed">
                <MapPin size={16} className="text-amber-500 mt-1 flex-shrink-0" />
                {siteConfig.address}
              </div>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-white font-bold text-lg mb-5">Pages</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-amber-400 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CMS Pages */}
          <div>
            <h4 className="text-white font-bold text-lg mb-5">CMS Pages</h4>
            <ul className="space-y-3">
              {cmsLinks.map((link) => (
                <li key={link.label}>
                  {link.isModal ? (
                    <button
                      onClick={openModal}
                      className="text-white/60 hover:text-amber-400 text-sm transition-colors"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-amber-400 text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Utility Pages */}
          <div>
            <h4 className="text-white font-bold text-lg mb-5">Utility Pages</h4>
            <ul className="space-y-3">
              {utilityLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-amber-400 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm text-center md:text-left">
            {siteConfig.disclaimer}
          </p>
          <p className="text-white/40 text-sm text-center md:text-right">
            {siteConfig.cin}
          </p>
        </div>
      </div>
    </footer>
  );
}
