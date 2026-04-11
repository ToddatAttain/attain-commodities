'use client';

import { useState, FormEvent } from 'react';
import type { Metadata } from 'next';

const inquiryTypes = [
  'Product Sourcing (I am a buyer)',
  'Product Supply (I am a supplier)',
  'Partnership / Intermediary',
  'General Inquiry',
];

const commodityAreas = [
  'Fertilizer / Urea',
  'Energy / Crude Oil',
  'Industrial Commodities',
  'Multiple / Not Sure',
];

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

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

    // Basic validation
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

  return (
    <>
      {/* Page Header */}
      <section style={{ position: 'relative', minHeight: '45vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(26,26,26,0.95) 55%, rgba(26,26,26,0.5) 100%)', zIndex: 1 }} />
        <div style={{ position: 'absolute', inset: 0 }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse at 70% 50%, rgba(201,168,76,0.08) 0%, transparent 60%)',
          }} />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '600px' }}>
            <div style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold)', marginBottom: '1rem' }}>
              Contact
            </div>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.1, marginBottom: '1rem', color: 'var(--white)' }}>
              Submit an inquiry.
            </h1>
            <p style={{ fontSize: '1.0625rem', color: 'var(--gray-200)', lineHeight: 1.7 }}>
              Complete the form below with your requirements. We review every submission and respond to qualified inquiries within two business days.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '5rem', alignItems: 'start' }}>

            {/* Form */}
            <div>
              {status === 'success' ? (
                <div style={{ backgroundColor: 'var(--charcoal-light)', border: '1px solid var(--gold)', padding: '3rem', textAlign: 'center' }}>
                  <div style={{ width: '3rem', height: '3rem', border: '1px solid var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: 'var(--gold)', fontSize: '1.25rem', fontWeight: 700 }}>✓</div>
                  <h3 style={{ fontSize: '1.375rem', color: 'var(--white)', marginBottom: '1rem' }}>Inquiry received.</h3>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--gray-400)', lineHeight: 1.7 }}>
                    Thank you for your submission. We will review your inquiry and respond within two business days.
                  </p>
                </div>
              ) : (
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
                      <select className="form-input" id="inquiryType" name="inquiryType" required defaultValue="" style={{ cursor: 'pointer' }}>
                        <option value="" disabled>Select type</option>
                        {inquiryTypes.map((t) => <option key={t} value={t}>{t}</option>)}
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
                    We review every submission. Responses are sent to qualified inquiries within two business days. We do not share your information with third parties.
                  </p>
                </form>
              )}
            </div>

            {/* Sidebar Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              <div>
                <div style={{ fontSize: '0.6875rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold)', marginBottom: '1rem' }}>What happens next</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {[
                    ['1. Submission', 'Your inquiry is received and logged. You will receive an acknowledgment.'],
                    ['2. Review', 'We review your submission against our current capabilities and market channels.'],
                    ['3. Response', 'If there is a potential fit, we will respond within two business days with next steps.'],
                    ['4. Qualification', 'We may ask additional questions or request documentation to assess the opportunity.'],
                    ['5. Process', 'If qualified, we begin our structured engagement process.'],
                  ].map(([title, desc]) => (
                    <div key={title} style={{ display: 'flex', gap: '0.875rem' }}>
                      <div>
                        <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--gray-200)', marginBottom: '0.25rem' }}>{title}</div>
                        <p style={{ fontSize: '0.8125rem', color: 'var(--gray-600)', lineHeight: 1.6, margin: 0 }}>{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ borderTop: '1px solid var(--charcoal-muted)', paddingTop: '2rem' }}>
                <div style={{ fontSize: '0.6875rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold)', marginBottom: '1rem' }}>Important Note</div>
                <p style={{ fontSize: '0.8125rem', color: 'var(--gray-600)', lineHeight: 1.7 }}>
                  We do not guarantee that every inquiry will result in a transaction. We will tell you early if we do not think we can help — so you can pursue other options without delay.
                </p>
              </div>

              <div style={{ borderTop: '1px solid var(--charcoal-muted)', paddingTop: '2rem' }}>
                <div style={{ fontSize: '0.6875rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold)', marginBottom: '1rem' }}>Direct Contact</div>
                <p style={{ fontSize: '0.875rem', color: 'var(--gray-400)', lineHeight: 1.7 }}>
                  commodities@attainbrands.com
                </p>
                <p style={{ fontSize: '0.8125rem', color: 'var(--gray-600)', lineHeight: 1.6, marginTop: '0.5rem' }}>
                  Attain Brands, LLC
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
