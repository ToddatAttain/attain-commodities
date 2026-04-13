import type { Metadata } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Submit an inquiry to Attain Commodities. Serious inquiries only — qualified buyers, suppliers, and intermediaries.',
  openGraph: {
    title: 'Contact | Attain Commodities',
    description: 'Submit an inquiry for fertilizer or select energy commodity transactions.',
  },
};

const requirements = [
  'Product specifications and volume requirements',
  'Delivery timeline and destination',
  'Pricing basis (FOB, CIF, or indexed)',
];

function ContactSidebar() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
      <div>
        <div style={{ fontSize: '0.6875rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold)', marginBottom: '1rem' }}>Inquiries</div>
        <p style={{ fontSize: '0.9375rem', color: 'var(--gray-200)', lineHeight: 1.7 }}>
          Serious inquiries only. We engage with qualified buyers and suppliers.
        </p>
      </div>

      <div style={{ borderTop: '1px solid var(--charcoal-muted)', paddingTop: '2rem' }}>
        <div style={{ fontSize: '0.6875rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold)', marginBottom: '1rem' }}>What to include</div>
        <p style={{ fontSize: '0.8125rem', color: 'var(--gray-600)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
          To submit an inquiry, provide:
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
          {requirements.map((item) => (
            <div key={item} style={{ display: 'flex', gap: '0.625rem', alignItems: 'flex-start' }}>
              <div style={{ width: '4px', height: '4px', backgroundColor: 'var(--gold)', marginTop: '0.4rem', flexShrink: 0 }} />
              <span style={{ fontSize: '0.875rem', color: 'var(--gray-400)', lineHeight: 1.5 }}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ borderTop: '1px solid var(--charcoal-muted)', paddingTop: '2rem' }}>
        <div style={{ fontSize: '0.6875rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold)', marginBottom: '1rem' }}>Response expectations</div>
        <p style={{ fontSize: '0.8125rem', color: 'var(--gray-600)', lineHeight: 1.7 }}>
          Qualified inquiries receive a response within two business days. Incomplete or unqualified submissions may not receive a response.
        </p>
      </div>

      <div style={{ borderTop: '1px solid var(--charcoal-muted)', paddingTop: '2rem' }}>
        <div style={{ fontSize: '0.6875rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold)', marginBottom: '1rem' }}>Direct contact</div>
        <p style={{ fontSize: '0.875rem', color: 'var(--gray-400)', lineHeight: 1.7 }}>
          info@attaincommodities.com
        </p>
        <p style={{ fontSize: '0.8125rem', color: 'var(--gray-600)', lineHeight: 1.6, marginTop: '0.5rem' }}>
          Attain Commodities (DBA of Attain Brands, LLC)
        </p>
      </div>
    </div>
  );
}

export default function ContactPage() {
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
              Serious inquiries only. We engage with qualified buyers and suppliers. Provide product, volume, delivery timeline, and pricing basis.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '5rem', alignItems: 'start' }}>
            {/* Form — wrapped in Suspense for useSearchParams */}
            <div>
              <Suspense fallback={
                <div style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gray-600)', fontSize: '0.875rem' }}>
                  Loading...
                </div>
              }>
                <ContactForm />
              </Suspense>
            </div>

            {/* Sidebar */}
            <ContactSidebar />
          </div>
        </div>
      </section>
    </>
  );
}
