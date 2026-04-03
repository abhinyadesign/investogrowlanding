'use client';

import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { useModal } from '@/components/ModalContext';

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
      role="dialog"
      aria-label="Contact Form"
    >
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl bg-[#0f1117] border border-white/10 animate-modal-in">
        <button
          onClick={closeModal}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
        >
          <X size={18} />
        </button>
        {children}
      </div>
    </div>
  );
}
