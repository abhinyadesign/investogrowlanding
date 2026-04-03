'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle, Loader2, ChevronDown } from 'lucide-react';

const GENDERS = ['Male', 'Female', 'Other', 'Prefer not to say'];
const INTERESTS = ['Office Space', 'Retail Shop', 'Restaurant Space', 'Investment', 'Other'];
const BUDGETS = [
  'Below ₹50 Lakh',
  '₹50L – ₹1 Crore',
  '₹1 Crore – ₹2 Crore',
  '₹2 Crore – ₹5 Crore',
  'Above ₹5 Crore',
];

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Please enter a valid email address'),
  phone: z
    .string()
    .regex(/^[+]?[\d\s\-()]{7,15}$/, 'Please enter a valid phone number'),
  gender: z
    .string()
    .refine((v) => GENDERS.includes(v), { message: 'Please select your gender' }),
  interest: z
    .string()
    .refine((v) => INTERESTS.includes(v), { message: 'Please select your area of interest' }),
  budget: z
    .string()
    .refine((v) => BUDGETS.includes(v), { message: 'Please select your budget range' }),
});

export default function ContactForm() {
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [serverMessage, setServerMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (data) => {
    setStatus('loading');
    setServerMessage('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json.success) {
        setStatus('success');
        setServerMessage(json.message);
        reset();
      } else {
        setStatus('error');
        setServerMessage(json.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setServerMessage('Network error. Please check your connection and try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-16 px-8 text-center">
        <CheckCircle className="text-green-400 w-16 h-16" />
        <h3 className="text-2xl font-bold text-gray-900">Enquiry Received!</h3>
        <p className="text-gray-600">{serverMessage}</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-4 px-6 py-2 bg-amber-500 hover:bg-amber-400 text-black font-semibold rounded-lg transition-colors"
        >
          Submit Another Enquiry
        </button>
      </div>
    );
  }

  const inputClass =
    'w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all shadow-sm';
  const labelClass = 'block text-sm font-medium text-gray-700 mb-2';
  const errorClass = 'text-red-500 text-xs mt-1';

  return (
    <div className="p-6 md:p-8">
      <div className="mb-6">
        <p className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-1">
          Get in Touch
        </p>
        <h2 className="text-3xl font-black text-gray-900 mb-2">Request Information</h2>
        <p className="text-gray-600 text-sm">
          Register your interest and our experts will connect with you shortly.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="cf-name" className={labelClass}>
            Full Name *
          </label>
          <input
            id="cf-name"
            type="text"
            placeholder="John Doe"
            className={inputClass}
            {...register('name')}
          />
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="cf-email" className={labelClass}>
            Email Address *
          </label>
          <input
            id="cf-email"
            type="email"
            placeholder="you@example.com"
            className={inputClass}
            {...register('email')}
          />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="cf-phone" className={labelClass}>
            Phone Number *
          </label>
          <input
            id="cf-phone"
            type="tel"
            placeholder="+91 98765 43210"
            className={inputClass}
            {...register('phone')}
          />
          {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
        </div>

        {/* Gender */}
        <div>
          <label htmlFor="cf-gender" className={labelClass}>
            Gender *
          </label>
          <div className="relative">
            <select id="cf-gender" className={`${inputClass} appearance-none`} {...register('gender')}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
          </div>
          {errors.gender && <p className={errorClass}>{errors.gender.message}</p>}
        </div>

        {/* Interest */}
        <div>
          <label htmlFor="cf-interest" className={labelClass}>
            Interest *
          </label>
          <div className="relative">
            <select id="cf-interest" className={`${inputClass} appearance-none`} {...register('interest')}>
              <option value="">Select Area of Interest</option>
              <option value="Office Space">Office Space</option>
              <option value="Retail Shop">Retail Shop</option>
              <option value="Restaurant Space">Restaurant Space</option>
              <option value="Investment">Investment / Returns</option>
              <option value="Other">Other</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
          </div>
          {errors.interest && <p className={errorClass}>{errors.interest.message}</p>}
        </div>

        {/* Budget */}
        <div>
          <label htmlFor="cf-budget" className={labelClass}>
            Budget *
          </label>
          <select id="cf-budget" className={inputClass} {...register('budget')}>
            <option value="">Select Budget Range</option>
            <option value="Below ₹50 Lakh">Below ₹50 Lakh</option>
            <option value="₹50L – ₹1 Crore">₹50L – ₹1 Crore</option>
            <option value="₹1 Crore – ₹2 Crore">₹1 Crore – ₹2 Crore</option>
            <option value="₹2 Crore – ₹5 Crore">₹2 Crore – ₹5 Crore</option>
            <option value="Above ₹5 Crore">Above ₹5 Crore</option>
          </select>
          {errors.budget && <p className={errorClass}>{errors.budget.message}</p>}
        </div>

        {/* Server error */}
        {status === 'error' && (
          <p className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-3">
            {serverMessage}
          </p>
        )}

        <button
          id="cf-submit"
          type="submit"
          disabled={status === 'loading'}
          className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 disabled:bg-amber-500/60 text-black font-bold py-3.5 rounded-lg transition-all duration-200 mt-2"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="animate-spin w-5 h-5" />
              Submitting...
            </>
          ) : (
            'Submit Enquiry'
          )}
        </button>

        <p className="text-center text-white/30 text-xs pt-2">
          Your information is 100% secure & confidential.
        </p>
      </form>
    </div>
  );
}
