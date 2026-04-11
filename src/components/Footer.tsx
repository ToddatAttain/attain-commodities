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
              Attain Commodities (DBA of Attain Brands, LLC). Structured commodity sourcing and transaction coordination.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <div style={{ fontSize: '0.6875rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold)', marginBottom: '1rem' }}>
              Company
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {[
                ['About', '/about'],
                ['Process', '/process'],
                ['Current Focus', '/current-focus'],
                ['Trust & Compliance', '/trust-compliance'],
                ['Contact', '/contact'],
              ].map(([label, href]) => (
                <Link key={href} href={href} style={{ fontSize: '0.8125rem', color: 'var(--gray-400)', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--white)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--gray-400)')}>
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Markets */}
          <div>
            <div style={{ fontSize: '0.6875rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold)', marginBottom: '1rem' }}>
              Markets
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {[
                ['Fertilizer & Urea', '/current-focus'],
                ['Selected Energy', '/current-focus'],
              ].map(([label]) => (
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
              <Link href="/contact?type=buyer" style={{ fontSize: '0.8125rem', color: 'var(--gray-400)', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--white)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--gray-400)')}>
                Buyer Inquiry
              </Link>
              <Link href="/contact?type=supplier" style={{ fontSize: '0.8125rem', color: 'var(--gray-400)', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--white)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--gray-400)')}>
                Supplier Inquiry
              </Link>
              <Link href="/contact?type=intermediary" style={{ fontSize: '0.8125rem', color: 'var(--gray-400)', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--white)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--gray-400)')}>
                Intermediary Inquiry
              </Link>
              <span style={{ fontSize: '0.8125rem', color: 'var(--gray-400)', marginTop: '0.5rem' }}>info@attaincommodities.com</span>
              <span style={{ fontSize: '0.8125rem', color: 'var(--gray-600)' }}>Attain Brands, LLC</span>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--charcoal-muted)', paddingTop: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ fontSize: '0.75rem', color: 'var(--gray-600)' }}>
            © {year} Attain Commodities (DBA of Attain Brands, LLC). All rights reserved.
          </p>
          <p style={{ fontSize: '0.75rem', color: 'var(--gray-600)', maxWidth: '500px', textAlign: 'right' }}>
            Information provided does not constitute an offer to buy or sell commodities.
          </p>
        </div>
      </div>
    </footer>
  );
}
