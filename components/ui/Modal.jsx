'use client';

import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { useModal } from '@/components/ModalContext';
import { motion } from 'framer-motion';

export default function Modal({ children }) {
  const { isOpen, closeModal } = useModal();
  const overlayRef = useRef(null);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') closeModal(); };
    if (isOpen) {
      document.addEventListener('keydown', handleKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 16,
        background: 'rgba(0,0,0,0.80)',
        backdropFilter: 'blur(8px)',
      }}
      onClick={(e) => e.target === overlayRef.current && closeModal()}
      aria-modal="true"
      aria-label="Contact Form Modal"
      data-lenis-prevent
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ type: 'spring', damping: 28, stiffness: 300 }}
        style={{
          position: 'relative', width: '100%', maxWidth: 720,
          maxHeight: '90vh', overflowY: 'auto',
          borderRadius: 24,
          boxShadow: '0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(201,147,42,0.2)',
        }}
        onClick={(e) => e.stopPropagation()}
        data-lenis-prevent
      >
        <button
          onClick={closeModal}
          aria-label="Close modal"
          style={{
            position: 'absolute', top: 16, right: 16, zIndex: 10,
            width: 34, height: 34, borderRadius: '50%',
            background: 'rgba(15,23,42,0.05)', border: '1px solid rgba(15,23,42,0.1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', color: '#475569', transition: 'background 0.15s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(15,23,42,0.08)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(15,23,42,0.05)'}
        >
          <X size={16} />
        </button>
        {children}
      </motion.div>
    </div>
  );
}
