import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Current Focus',
  description: 'Attain Commodities transaction focus: Granular Urea 46% and Nigerian Light Crude. Specs, structures, and engagement requirements.',
  openGraph: {
    title: 'Current Focus | Attain Commodities',
    description: 'Granular Urea 46% and Nigerian Light Crude — specifications and transaction structures.',
  },
};

const ureaSpecs = [
  { label: 'Chemical', value: 'CO(NH₂)₂' },
  { label: 'Nitrogen Content', value: '46% minimum' },
  { label: 'Moisture', value: 'max 0.5%' },
  { label: 'Granulation', value: '2–4mm typical' },
  { label: 'Packaging', value: 'Bulk / 50kg Bags / Big Bags' },
  { label: 'Origin', value: 'Nigeria' },
  { label: 'Incoterms', value: 'FOB / RFQ' },
];

const crudeSpecs = [
  { label: 'API Gravity', value: '36–42°' },
  { label: 'Sulfur Content', value: '<0.15%' },
  { label: 'Destination', value: 'Global (terms negotiable)' },
  { label: 'Engagement', value: 'LOI + commercial qualification required' },
];

export default function CurrentFocusPage() {
  return (
    <>
      {/* Page Header */}
      <section style={{ position: 'relative', minHeight: '50vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(26,26,26,0.95) 55%, rgba(26,26,26,0.5) 100%)', zIndex: 1 }} />
        <Image
          src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&q=80"
          alt="Agricultural fields and fertilizer application"
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '600px' }}>
            <div style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold)', marginBottom: '1rem' }}>
              Current Focus
            </div>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.1, marginBottom: '1rem', color: 'var(--white)' }}>
              Product specifications.
            </h1>
            <p style={{ fontSize: '1.0625rem', color: 'var(--gray-200)', lineHeight: 1.7 }}>
              Our transaction focus is urea fertilizer and select energy. Below are the specifications and structures we work with.
            </p>
          </div>
        </div>
      </section>

      {/* Urea Spec Sheet */}
      <section className="section" style={{ borderTop: '1px solid var(--charcoal-muted)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
            <div>
              <div style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold)', marginBottom: '0.75rem' }}>Fertilizer</div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: 'var(--white)', marginBottom: '0.5rem' }}>UREA 46-0-0 — Granular</h2>
              <p style={{ fontSize: '0.9375rem', color: 'var(--gray-400)', marginBottom: '2rem' }}>Prilled and granular available. Bulk and bagged delivery.</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {ureaSpecs.map(({ label, value }, i) => (
                  <div key={label} style={{
                    display: 'grid', gridTemplateColumns: '140px 1fr',
                    gap: '1rem', padding: '0.875rem 0',
                    borderBottom: i < ureaSpecs.length - 1 ? '1px solid var(--charcoal-muted)' : 'none',
                  }}>
                    <span style={{ fontSize: '0.8125rem', color: 'var(--gray-400)', fontWeight: 500 }}>{label}</span>
                    <span style={{ fontSize: '0.9375rem', color: 'var(--gray-200)' }}>{value}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <Link href="/contact?type=buyer" className="btn-gold" style={{ alignSelf: 'flex-start', fontSize: '0.8125rem', padding: '0.625rem 1.5rem' }}>
                  Request Specifications
                </Link>
                <Link href="/process" className="btn-outline" style={{ alignSelf: 'flex-start', fontSize: '0.8125rem', padding: '0.625rem 1.5rem' }}>
                  Transaction Process
                </Link>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="card">
                <h3 style={{ fontSize: '1rem', color: 'var(--white)', marginBottom: '1rem' }}>Structure & Terms</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                  {[
                    'FOB or CIF terms — buyer selects at inquiry',
                    'RFQ process for volume requirements',
                    'NOLA indexed pricing where applicable',
                    'Inspection at load port by approved surveyor',
                    'Minimum lot size: standard bulk vessel quantities',
                  ].map((item) => (
                    <div key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <div style={{ width: '4px', height: '4px', backgroundColor: 'var(--gold)', marginTop: '0.45rem', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.875rem', color: 'var(--gray-400)', lineHeight: 1.6 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card">
                <h3 style={{ fontSize: '1rem', color: 'var(--white)', marginBottom: '1rem' }}>Counterparty Requirements</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                  {[
                    'Verified buyer mandate or Irrevocable Purchase Order',
                    'Proof of funds or bank confirmation',
                    'Completed counterparty qualification form',
                    'Destination and delivery timeline specified',
                  ].map((item) => (
                    <div key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <div style={{ width: '4px', height: '4px', backgroundColor: 'var(--gray-600)', marginTop: '0.45rem', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.875rem', color: 'var(--gray-400)', lineHeight: 1.6 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nigerian Light Crude Spec Sheet */}
      <section className="section" style={{ backgroundColor: 'var(--charcoal-light)', borderTop: '1px solid var(--charcoal-muted)', borderBottom: '1px solid var(--charcoal-muted)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
            <div>
              <div style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold)', marginBottom: '0.75rem' }}>Energy</div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: 'var(--white)', marginBottom: '0.5rem' }}>Nigerian Light Crude</h2>
              <p style={{ fontSize: '0.9375rem', color: 'var(--gray-400)', marginBottom: '2rem' }}>Select transactions only. Buyer qualification required.</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {crudeSpecs.map(({ label, value }, i) => (
                  <div key={label} style={{
                    display: 'grid', gridTemplateColumns: '140px 1fr',
                    gap: '1rem', padding: '0.875rem 0',
                    borderBottom: i < crudeSpecs.length - 1 ? '1px solid var(--charcoal-muted)' : 'none',
                  }}>
                    <span style={{ fontSize: '0.8125rem', color: 'var(--gray-400)', fontWeight: 500 }}>{label}</span>
                    <span style={{ fontSize: '0.9375rem', color: 'var(--gray-200)' }}>{value}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '2rem' }}>
                <Link href="/contact?type=buyer" className="btn-gold" style={{ alignSelf: 'flex-start', fontSize: '0.8125rem', padding: '0.625rem 1.5rem' }}>
                  Request Specifications
                </Link>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="card">
                <h3 style={{ fontSize: '1rem', color: 'var(--white)', marginBottom: '1rem' }}>Engagement Requirements</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                  {[
                    'Valid Letter of Intent (LOI) from qualified buyer',
                    'Bank Statement or Proof of Funds',
                    'Offtake or mandated purchase authorization',
                    'Defined destination port and delivery window',
                    'Sanctions-free counterparty verification',
                  ].map((item) => (
                    <div key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <div style={{ width: '4px', height: '4px', backgroundColor: 'var(--gold)', marginTop: '0.45rem', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.875rem', color: 'var(--gray-400)', lineHeight: 1.6 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card">
                <h3 style={{ fontSize: '1rem', color: 'var(--white)', marginBottom: '1rem' }}>Note</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--gray-400)', lineHeight: 1.7 }}>
                  Not all energy inquiries are a fit. We assess each transaction based on counterparty quality, structure, and compliance. We may decline without detailed explanation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transaction Readiness Summary */}
      <section className="section">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold)', marginBottom: '1rem' }}>Transaction Readiness</div>
          <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: 'var(--white)', marginBottom: '1.5rem' }}>
            Before submitting an inquiry, have the following ready:
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem', textAlign: 'left' }}>
            {[
              'Product specification and grade',
              'Volume requirements (metric tons or barrels)',
              'Delivery timeline and destination port',
              'Pricing basis (FOB, CIF, NOLA indexed)',
            ].map((item) => (
              <div key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <div style={{ width: '6px', height: '6px', backgroundColor: 'var(--gold)', marginTop: '0.45rem', flexShrink: 0 }} />
                <span style={{ fontSize: '0.9375rem', color: 'var(--gray-200)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/contact?type=buyer" className="btn-gold">Buyer Inquiry</Link>
            <Link href="/contact?type=supplier" className="btn-outline">Supplier Inquiry</Link>
          </div>
        </div>
      </section>
    </>
  );
}
