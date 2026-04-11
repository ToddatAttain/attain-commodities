'use client';

import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: 'var(--charcoal)', borderTop: '1px solid var(--charcoal-muted)', marginTop: 'auto' }}>
      <div className="container section-sm">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
          {/* Brand */}
          <div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.75rem' }}>
              Attain<span style={{ color: 'var(--gold)' }}>Commodities</span>
            </div>
            <p style={{ fontSize: '0.8125rem', color: 'var(--gray-600)', lineHeight: '1.6', maxWidth: '240px' }}>
              A DBA of Attain Brands, LLC. Facilitating global commodity transactions with integrity and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <div style={{ fontSize: '0.6875rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold)', marginBottom: '1rem' }}>
              Company
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {[['About', '/about'], ['Capabilities', '/capabilities'], ['Markets', '/markets'], ['Process', '/process']].map(([label, href]) => (
                <Link key={href} href={href} style={{ fontSize: '0.8125rem', color: 'var(--gray-400)', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--white)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--gray-400)')}>
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Commodities */}
          <div>
            <div style={{ fontSize: '0.6875rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold)', marginBottom: '1rem' }}>
              Markets
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {[['Fertilizer & Urea', '/markets'], ['Energy & Crude', '/markets'], ['Industrial Commodities', '/markets']].map(([label]) => (
                <span key={label} style={{ fontSize: '0.8125rem', color: 'var(--gray-400)' }}>{label}</span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontSize: '0.6875rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold)', marginBottom: '1rem' }}>
              Contact
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              <Link href="/contact" style={{ fontSize: '0.8125rem', color: 'var(--gray-400)', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--white)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--gray-400)')}>
                Submit an Inquiry
              </Link>
              <span style={{ fontSize: '0.8125rem', color: 'var(--gray-600)' }}>Attain Brands, LLC</span>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--charcoal-muted)', paddingTop: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ fontSize: '0.75rem', color: 'var(--gray-600)' }}>
            © {year} Attain Commodities, a DBA of Attain Brands, LLC. All rights reserved.
          </p>
          <p style={{ fontSize: '0.75rem', color: 'var(--gray-600)' }}>
            commodities@attainbrands.com
          </p>
        </div>
      </div>
    </footer>
  );
}
