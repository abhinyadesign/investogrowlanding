'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle2, Loader2, ChevronDown } from 'lucide-react';

const GENDERS   = ['Male', 'Female', 'Other', 'Prefer not to say'];
const INTERESTS = ['Office Space', 'Retail Shop', 'Restaurant Space', 'Investment', 'Other'];
const BUDGETS   = ['Below ₹50 Lakh', '₹50L – ₹1 Crore', '₹1 Crore – ₹2 Crore', '₹2 Crore – ₹5 Crore', 'Above ₹5 Crore'];

const schema = z.object({
  name:     z.string().min(2, 'Name must be at least 2 characters').max(100),
  email:    z.string().email('Please enter a valid email address'),
  phone:    z.string().regex(/^[+]?[\d\s\-()]{7,15}$/, 'Please enter a valid phone number'),
  gender:   z.string().refine(v => GENDERS.includes(v),   { message: 'Please select your gender' }),
  interest: z.string().refine(v => INTERESTS.includes(v), { message: 'Please select your area of interest' }),
  budget:   z.string().refine(v => BUDGETS.includes(v),   { message: 'Please select your budget range' }),
});

const inputStyle = {
  width: '100%',
  background: 'var(--bg-secondary)',
  border: '1px solid var(--border-subtle)',
  borderRadius: 'var(--radius-md)',
  padding: '12px 16px',
  paddingRight: 40,
  height: '52px',
  color: 'var(--text-primary)',
  fontSize: 15,
  fontWeight: 500,
  fontFamily: 'inherit',
  outline: 'none',
  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
  appearance: 'none',
  WebkitAppearance: 'none',
  boxSizing: 'border-box',
};

const labelStyle = {
  display: 'block',
  fontSize: 11,
  fontWeight: 800,
  letterSpacing: '2px',
  textTransform: 'uppercase',
  color: 'var(--text-muted)',
  marginBottom: 10,
};

export default function ContactForm() {
  const [status, setStatus]           = useState('idle');
  const [serverMessage, setServerMessage] = useState('');

  const { register, handleSubmit, reset, formState: { errors } } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (data) => {
    setStatus('loading');
    setServerMessage('');
    try {
      const res  = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
      const json = await res.json();
      if (json.success) { setStatus('success'); setServerMessage(json.message); reset(); }
      else              { setStatus('error');   setServerMessage(json.message || 'Something went wrong.'); }
    } catch {
      setStatus('error'); setServerMessage('Network error. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, padding: '60px 40px', textAlign: 'center' }}>
        <div style={{ width: 80, height: 80, borderRadius: 'var(--radius-full)', background: 'var(--bg-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <CheckCircle2 size={40} style={{ color: 'var(--accent)' }} />
        </div>
        <h3 className="heading-premium" style={{ fontSize: 24, color: 'var(--text-primary)', marginBottom: 8 }}>Enquiry Received!</h3>
        <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.6 }}>{serverMessage}</p>
        <button onClick={() => setStatus('idle')} style={{
          marginTop: 12, padding: '14px 32px', borderRadius: 'var(--radius-full)', border: 'none', cursor: 'pointer',
          background: 'var(--bg-dark)', color: '#fff', fontWeight: 800, fontSize: 14, letterSpacing: '1.5px', textTransform: 'uppercase'
        }}>Submit Another</button>
      </div>
    );
  }

  const Field = ({ id, label, children, error }) => (
    <div style={{ marginBottom: 4 }}>
      <label htmlFor={id} style={labelStyle}>{label}</label>
      {children}
      {error && <div style={{ fontSize: 12, color: '#EF4444', marginTop: 8, fontWeight: 600 }}>{error}</div>}
    </div>
  );

  const applyFocus = (e) => { 
    e.target.style.borderColor = 'var(--accent)'; 
    e.target.style.background = '#fff';
    e.target.style.boxShadow = '0 0 0 4px rgba(212,175,55,0.1)';
  };
  const removeFocus= (e) => { 
    e.target.style.borderColor = 'var(--border-subtle)'; 
    e.target.style.background = 'var(--bg-secondary)';
    e.target.style.boxShadow = 'none';
  };

  const selOpts = (items) => items.map(v => <option key={v} value={v} style={{ background: '#fff', color: 'var(--text-primary)' }}>{v}</option>);

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 24 }}>
        <Field id="cf-name" label="Full Name *" error={errors.name?.message}>
          <input id="cf-name" type="text" placeholder="John Doe" style={inputStyle} {...register('name')}
            onFocus={applyFocus} onBlur={removeFocus} />
        </Field>
        <Field id="cf-email" label="Email Address *" error={errors.email?.message}>
          <input id="cf-email" type="email" placeholder="you@email.com" style={inputStyle} {...register('email')}
            onFocus={applyFocus} onBlur={removeFocus} />
        </Field>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 24 }}>
        <Field id="cf-phone" label="Phone Number *" error={errors.phone?.message}>
          <input id="cf-phone" type="tel" placeholder="+91 98765 43210" style={inputStyle} {...register('phone')}
            onFocus={applyFocus} onBlur={removeFocus} />
        </Field>
        <Field id="cf-gender" label="Gender *" error={errors.gender?.message}>
          <div style={{ position: 'relative' }}>
            <select id="cf-gender" style={inputStyle} {...register('gender')} onFocus={applyFocus} onBlur={removeFocus}>
              <option value="" style={{ background: '#FFFFFF' }}>Select Gender</option>
              {selOpts(GENDERS)}
            </select>
            <ChevronDown size={18} style={{ color: 'var(--text-muted)', position: 'absolute', right: 18, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
          </div>
        </Field>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 24 }}>
        <Field id="cf-interest" label="Area of Interest *" error={errors.interest?.message}>
          <div style={{ position: 'relative' }}>
            <select id="cf-interest" style={inputStyle} {...register('interest')} onFocus={applyFocus} onBlur={removeFocus}>
              <option value="" style={{ background: '#FFFFFF' }}>Select Interest</option>
              <option value="Office Space" style={{ background: '#FFFFFF' }}>Office Space</option>
              <option value="Retail Shop" style={{ background: '#FFFFFF' }}>Retail Shop</option>
              <option value="Restaurant Space" style={{ background: '#FFFFFF' }}>Restaurant Space</option>
              <option value="Investment" style={{ background: '#FFFFFF' }}>Investment / Returns</option>
              <option value="Other" style={{ background: '#FFFFFF' }}>Other</option>
            </select>
            <ChevronDown size={18} style={{ color: 'var(--text-muted)', position: 'absolute', right: 18, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
          </div>
        </Field>
        <Field id="cf-budget" label="Budget Range *" error={errors.budget?.message}>
          <div style={{ position: 'relative' }}>
            <select id="cf-budget" style={inputStyle} {...register('budget')} onFocus={applyFocus} onBlur={removeFocus}>
              <option value="" style={{ background: '#FFFFFF' }}>Select Budget</option>
              {selOpts(BUDGETS)}
            </select>
            <ChevronDown size={18} style={{ color: 'var(--text-muted)', position: 'absolute', right: 18, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
          </div>
        </Field>
      </div>

      {status === 'error' && (
        <div style={{ background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: 'var(--radius-md)', padding: '16px 20px', fontSize: 14, color: '#EF4444', fontWeight: 600 }}>
          {serverMessage}
        </div>
      )}

      <motion.button
        id="cf-submit"
        type="submit"
        disabled={status === 'loading'}
        whileHover={{ y: -4, scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className="shimmer-btn"
        style={{
          width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12,
          background: 'var(--bg-dark)',
          color: '#fff', fontWeight: 800, fontSize: 14, fontFamily: 'inherit',
          padding: '20px', borderRadius: 'var(--radius-full)', border: 'none', cursor: 'pointer',
          boxShadow: '0 20px 40px rgba(12,16,21,0.15)',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          opacity: status === 'loading' ? 0.75 : 1,
          textTransform: 'uppercase',
          letterSpacing: '2px'
        }}
      >
        {status === 'loading' ? <><Loader2 className="animate-spin" size={20} /> Processing…</> : "Get Full Investment Details"}
      </motion.button>

      <p style={{ textAlign: 'center', fontSize: 13, color: 'var(--text-muted)', marginTop: 8, fontWeight: 500 }}>
        <strong>No spam. No pressure.</strong> Your details are shared only with Nitin Jain for a confidential conversation.
      </p>
    </form>
  );
}
