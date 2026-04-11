'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const inquiryTypes = [
  { value: 'buyer', label: 'Buyer Inquiry' },
  { value: 'supplier', label: 'Supplier Inquiry' },
  { value: 'intermediary', label: 'Intermediary Inquiry' },
];

const commodityAreas = [
  'Fertilizer / Urea',
  'Energy / Crude Oil',
  'Industrial Commodities',
  'Multiple / Not Sure',
];

export default function ContactForm() {
  const searchParams = useSearchParams();
  const preSelectedType = searchParams.get('type');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const typeLabel = preSelectedType
    ? inquiryTypes.find(t => t.value === preSelectedType)?.label || 'Inquiry'
    : 'Inquiry';

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      company: (form.elements.namedItem('company') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      inquiryType: (form.elements.namedItem('inquiryType') as HTMLSelectElement).value,
      commodity: (form.elements.namedItem('commodity') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    if (!data.name || !data.email || !data.inquiryType || !data.message) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    try {
      const res = await fetch('/contact/api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || 'Submission failed. Please try again.');
      }

      setStatus('success');
      form.reset();
    } catch (err: unknown) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  }

  if (status === 'success') {
    return (
      <div style={{ backgroundColor: 'var(--charcoal-light)', border: '1px solid var(--gold)', padding: '3rem', textAlign: 'center' }}>
        <div style={{ width: '3rem', height: '3rem', border: '1px solid var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: 'var(--gold)', fontSize: '1.25rem', fontWeight: 700 }}>✓</div>
        <h3 style={{ fontSize: '1.375rem', color: 'var(--white)', marginBottom: '1rem' }}>Inquiry received.</h3>
        <p style={{ fontSize: '0.9375rem', color: 'var(--gray-400)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          Thank you for your submission. We will review your inquiry and respond within two business days.
        </p>
        <p style={{ fontSize: '0.8125rem', color: 'var(--gray-600)', lineHeight: 1.6 }}>
          Qualified inquiries receive a response within two business days. Incomplete or unqualified submissions may not receive a response.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Name + Company */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
        <div>
          <label className="form-label" htmlFor="name">Full Name *</label>
          <input className="form-input" type="text" id="name" name="name" placeholder="Your full name" required />
        </div>
        <div>
          <label className="form-label" htmlFor="company">Company / Organization</label>
          <input className="form-input" type="text" id="company" name="company" placeholder="Company name" />
        </div>
      </div>

      {/* Email + Phone */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
        <div>
          <label className="form-label" htmlFor="email">Email Address *</label>
          <input className="form-input" type="email" id="email" name="email" placeholder="you@company.com" required />
        </div>
        <div>
          <label className="form-label" htmlFor="phone">Phone Number</label>
          <input className="form-input" type="tel" id="phone" name="phone" placeholder="+1 (000) 000-0000" />
        </div>
      </div>

      {/* Inquiry Type + Commodity */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
        <div>
          <label className="form-label" htmlFor="inquiryType">Inquiry Type *</label>
          <select
            className="form-input"
            id="inquiryType"
            name="inquiryType"
            required
            defaultValue={preSelectedType ? inquiryTypes.find(t => t.value === preSelectedType)?.label || '' : ''}
            style={{ cursor: 'pointer' }}
          >
            <option value="" disabled>Select type</option>
            {inquiryTypes.map((t) => (
              <option key={t.value} value={t.label}>{t.label}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="form-label" htmlFor="commodity">Commodity Area</label>
          <select className="form-input" id="commodity" name="commodity" defaultValue="" style={{ cursor: 'pointer' }}>
            <option value="">Select area</option>
            {commodityAreas.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="form-label" htmlFor="message">Message / Requirements *</label>
        <textarea
          className="form-input"
          id="message"
          name="message"
          rows={6}
          placeholder="Describe your requirements in as much detail as possible. Include product specifications, estimated volume, target delivery timeline, and any other relevant information."
          required
          style={{ resize: 'vertical', minHeight: '120px' }}
        />
      </div>

      {status === 'error' && (
        <div style={{ backgroundColor: 'rgba(220,38,38,0.1)', border: '1px solid rgba(220,38,38,0.3)', padding: '1rem', color: '#fca5a5', fontSize: '0.875rem' }}>
          {errorMessage}
        </div>
      )}

      <div>
        <button
          type="submit"
          className="btn-gold"
          disabled={status === 'submitting'}
          style={{ opacity: status === 'submitting' ? 0.7 : 1, cursor: status === 'submitting' ? 'not-allowed' : 'pointer', minWidth: '200px' }}
        >
          {status === 'submitting' ? 'Submitting...' : 'Submit Inquiry'}
        </button>
      </div>

      <p style={{ fontSize: '0.75rem', color: 'var(--gray-600)', lineHeight: 1.6 }}>
        Qualified inquiries receive a response within two business days. Incomplete or unqualified submissions may not receive a response.
      </p>
    </form>
  );
}
