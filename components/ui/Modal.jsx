'use client';

import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { useModal } from '@/components/ModalContext';
import { motion } from 'framer-motion';

export default function Modal({ children }) {
  const { isOpen, closeModal } = useModal();
  const overlayRef = useRef(null);

  // Close on ESC key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') closeModal();
    };
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(4px)' }}
      onClick={(e) => e.target === overlayRef.current && closeModal()}
      aria-modal="true"
      aria-label="Contact Form"
      data-lenis-prevent
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-gray-100"
        onClick={(e) => e.stopPropagation()}
        data-lenis-prevent
      >
        <button
          onClick={closeModal}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-900"
        >
          <X size={18} />
        </button>
        {children}
      </motion.div>
    </div>
  );
}
