import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Attain Commodities — Fertilizer & Energy Commodity Transactions',
  description: 'Committed to fertilizer and energy commodity transactions. Focused on urea and selected energy transactions for qualified buyers and suppliers.',
  openGraph: {
    title: 'Attain Commodities — Fertilizer & Energy Transactions',
    description: 'Focused on urea and selected energy transactions for qualified buyers and suppliers.',
  },
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        position: 'relative',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, rgba(26,26,26,0.97) 50%, rgba(26,26,26,0.6) 100%)',
          zIndex: 1,
        }} />
        <Image
          src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=80"
          alt="Global shipping and commodities infrastructure"
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '700px' }}>
            <h1 style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)', lineHeight: 1.15, marginBottom: '1.5rem', color: 'var(--white)' }}>
              Committed to fertilizer and energy commodity transactions.
            </h1>
            <div className="divider" />
            <p style={{ fontSize: '1.0625rem', color: 'var(--gray-200)', lineHeight: 1.7, maxWidth: '560px', marginBottom: '2.5rem' }}>
              Focused on urea and selected energy transactions for qualified buyers and suppliers.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <Link href="/contact?type=buyer" className="btn-gold">
                Request Pricing
              </Link>
              <Link href="/contact?type=buyer" className="btn-outline">
                Submit Buyer Inquiry
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Transact */}
      <section className="section" style={{ borderTop: '1px solid var(--charcoal-muted)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold)', marginBottom: '1rem' }}>What We Transact</div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--white)' }}>Product Overview</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {/* Fertilizer */}
            <div className="card" style={{ borderColor: 'var(--gold)' }}>
              <div style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold)', marginBottom: '0.75rem' }}>Fertilizer</div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--white)', marginBottom: '1.25rem' }}>Granular Urea 46%</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  'Prilled / Granular available',
                  'Bulk and bagged delivery',
                  'FOB / RFQ structure',
                  'NOLA indexed pricing where applicable',
                ].map((item) => (
                  <div key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '4px', height: '4px', backgroundColor: 'var(--gold)', marginTop: '0.45rem', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.9rem', color: 'var(--gray-400)', lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Energy */}
            <div className="card">
              <div style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gray-400)', marginBottom: '0.75rem' }}>Energy</div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--white)', marginBottom: '1.25rem' }}>Nigerian Light Crude</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  'Select transactions only',
                  'Buyer qualification required',
                  'Structured engagement process',
                ].map((item) => (
                  <div key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '4px', height: '4px', backgroundColor: 'var(--gray-600)', marginTop: '0.45rem', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.9rem', color: 'var(--gray-400)', lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href="/current-focus" className="btn-outline">View Full Specifications</Link>
          </div>
        </div>
      </section>

      {/* Why Attain Commodities */}
      <section className="section" style={{ backgroundColor: 'var(--charcoal-light)', borderTop: '1px solid var(--charcoal-muted)', borderBottom: '1px solid var(--charcoal-muted)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold)', marginBottom: '1rem' }}>Why Attain Commodities</div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[
              'Direct access to urea supply across international channels.',
              'Structured transactions with clear commercial terms.',
              'Rigorous counterparty qualification — we engage verified buyers and suppliers.',
              'Execution-focused — from inquiry to contract to delivery.',
            ].map((point, i) => (
              <div key={i} className="card">
                <div style={{ width: '2rem', height: '2px', backgroundColor: 'var(--gold)', marginBottom: '1rem' }} />
                <p style={{ fontSize: '0.9375rem', color: 'var(--gray-200)', lineHeight: 1.7 }}>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transaction Readiness */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
            <div>
              <div style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold)', marginBottom: '1rem' }}>Transaction Readiness</div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: 'var(--white)', marginBottom: '1.5rem' }}>Before we engage, we expect counterparties to provide:</h2>
              <Link href="/contact" className="btn-gold">Submit an Inquiry</Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                'Product specifications and volume requirements',
                'Delivery timeline and destination',
                'Pricing basis (FOB, CIF, or indexed)',
              ].map((item) => (
                <div key={item} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '6px', height: '6px', backgroundColor: 'var(--gold)', marginTop: '0.5rem', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.9375rem', color: 'var(--gray-200)', lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ marginTop: '2rem', padding: '1.25rem', border: '1px solid var(--charcoal-muted)', backgroundColor: 'var(--charcoal-light)' }}>
            <p style={{ fontSize: '0.875rem', color: 'var(--gray-400)', lineHeight: 1.7, margin: 0 }}>
              Unqualified inquiries may not receive a response.
            </p>
          </div>
        </div>
      </section>

      {/* Transaction Process — 6 Step */}
      <section className="section" style={{ backgroundColor: 'var(--charcoal-light)', borderTop: '1px solid var(--charcoal-muted)', borderBottom: '1px solid var(--charcoal-muted)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold)', marginBottom: '1rem' }}>How We Work</div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--white)' }}>Transaction Process</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
            {[
              { num: '01', title: 'Buyer Inquiry', desc: 'Submit inquiry with product, volume, and delivery terms.' },
              { num: '02', title: 'Qualification', desc: 'Commercial team reviews and validates counterparty status.' },
              { num: '03', title: 'Indicative Offer', desc: 'Indicative offer or terms sheet provided to qualified buyer.' },
              { num: '04', title: 'Verification', desc: 'Proof of funds or mandate verification.' },
              { num: '05', title: 'Contract', desc: 'Contract execution (SPA or Master Agreement).' },
              { num: '06', title: 'Delivery', desc: 'Logistics and shipment coordination to destination.' },
            ].map((step) => (
              <div key={step.num} className="card">
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700, color: 'var(--gold)', marginBottom: '0.75rem' }}>{step.num}</div>
                <h3 style={{ fontSize: '1rem', color: 'var(--white)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{step.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--gray-400)', lineHeight: 1.65 }}>{step.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/process" className="btn-gold">View Full Process</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container-narrow">
          <div style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold)', marginBottom: '1rem' }}>Get Started</div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--white)', marginBottom: '1rem' }}>
            Ready to begin?
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--gray-400)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Submit an inquiry through our structured intake process. Qualified inquiries receive a response within two business days.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/contact?type=buyer" className="btn-gold">Request Pricing</Link>
            <Link href="/contact?type=buyer" className="btn-outline">Submit Buyer Inquiry</Link>
          </div>
        </div>
      </section>
    </>
  );
}
