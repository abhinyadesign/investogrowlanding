'use client';

import { siteConfig } from '@/data/content';
import { MessageSquare } from 'lucide-react';

export default function WhatsAppFloat() {
  return (
    <a
      href={siteConfig.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed', bottom: 40, right: 40, zIndex: 1000,
        width: 64, height: 64, borderRadius: 'var(--radius-full)',
        background: 'var(--accent)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 20px 40px rgba(212,175,55,0.3)',
        textDecoration: 'none', transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        border: 'none'
      }}
      onMouseEnter={e => { 
        e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)'; 
        e.currentTarget.style.background = 'var(--bg-dark)'; 
        e.currentTarget.style.boxShadow = '0 30px 60px rgba(12,16,21,0.4)';
      }}
      onMouseLeave={e => { 
        e.currentTarget.style.transform = 'translateY(0) scale(1)'; 
        e.currentTarget.style.background = 'var(--accent)'; 
        e.currentTarget.style.boxShadow = '0 20px 40px rgba(212,175,55,0.3)';
      }}
    >
      <MessageSquare size={28} style={{ color: '#fff' }} />
    </a>
  );
}
