import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Attain Commodities — Structured Commodity Sourcing & Transaction Coordination',
  description: 'Attain Commodities facilitates structured commodity transactions for qualified buyers, suppliers, and intermediaries. Focused on fertilizer and selected energy markets. A division of Attain Brands, LLC.',
  openGraph: {
    title: 'Attain Commodities — Structured Commodity Sourcing & Transaction Coordination',
    description: 'Focused on fertilizer and selected energy transactions. All counterparties subject to qualification and compliance review.',
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
              Structured commodity sourcing and transaction coordination for qualified buyers, suppliers, and intermediaries.
            </h1>
            <div className="divider" />
            <p style={{ fontSize: '1.0625rem', color: 'var(--gray-200)', lineHeight: 1.7, maxWidth: '560px', marginBottom: '1rem' }}>
              Focused on fertilizer and selected energy transactions.
            </p>
            <p style={{ fontSize: '0.8125rem', color: 'var(--gray-400)', lineHeight: 1.6, marginBottom: '2.5rem' }}>
              A division of Attain Brands, LLC
            </p>
            <p style={{ fontSize: '0.75rem', color: 'var(--gray-600)', lineHeight: 1.6, marginBottom: '2.5rem', letterSpacing: '0.03em' }}>
              All counterparties subject to qualification and compliance review.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <Link href="/contact?type=buyer" className="btn-gold">
                Buyer Inquiry
              </Link>
              <Link href="/contact?type=supplier" className="btn-outline">
                Supplier Inquiry
              </Link>
              <Link href="/contact?type=intermediary" className="btn-outline">
                Intermediary Inquiry
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How We Operate */}
      <section className="section" style={{ backgroundColor: 'var(--charcoal-light)', borderTop: '1px solid var(--charcoal-muted)', borderBottom: '1px solid var(--charcoal-muted)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold)', marginBottom: '1.5rem' }}>How We Operate</div>
            <p style={{ fontSize: '1.0625rem', color: 'var(--gray-200)', lineHeight: 1.8 }}>
              Attain Commodities facilitates structured transactions between qualified buyers, suppliers, and intermediaries. We identify aligned counterparties, support deal structuring, and coordinate execution through to completion. We do not take title to goods, hold inventory, provide financing, or operate as a logistics provider.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold)', marginBottom: '1rem' }}>Our Approach</div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--white)', marginBottom: '1rem' }}>Why Work With Attain Commodities</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[
              ['Structured qualification process', 'Every counterparty is vetted before engagement. We ask direct questions and expect direct answers.'],
              ['Access to vetted counterparties', 'Buyers and suppliers who have already cleared our qualification process.'],
              ['Efficient transaction coordination', 'We manage the process between parties — keeping deals moving without the noise.'],
              ['Reduced wasted time and misaligned deals', 'Qualification happens upfront. If we are talking, there is a real potential fit.'],
              ['Clear, professional communication', 'One point of contact. Structured updates. No ambiguity about where things stand.'],
            ].map(([title, desc]) => (
              <div key={title} className="card">
                <div style={{ width: '2rem', height: '2px', backgroundColor: 'var(--gold)', marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.0625rem', color: 'var(--white)', marginBottom: '0.625rem' }}>{title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--gray-400)', lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Require to Engage */}
      <section className="section" style={{ backgroundColor: 'var(--charcoal-light)', borderTop: '1px solid var(--charcoal-muted)', borderBottom: '1px solid var(--charcoal-muted)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
            <div>
              <div style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold)', marginBottom: '1rem' }}>For New Inquiries</div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: 'var(--white)', marginBottom: '1.5rem' }}>What We Require to Engage</h2>
              <p style={{ fontSize: '0.9375rem', color: 'var(--gray-400)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                To assess fit, we ask that every inquiry include the following:
              </p>
              <Link href="/contact" className="btn-gold">Submit an Inquiry</Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                'Product and specification',
                'Volume',
                'Delivery timeline',
                'Destination',
                'Buyer mandate or supplier proof',
                'Preferred pricing structure (FOB, CIF, etc.)',
              ].map((item) => (
                <div key={item} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '6px', height: '6px', backgroundColor: 'var(--gold)', marginTop: '0.5rem', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.9375rem', color: 'var(--gray-200)', lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Current Focus — Market Highlight */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold)', marginBottom: '1rem' }}>Current Focus</div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--white)', marginBottom: '1rem' }}>Where We Are Active</h2>
            <p style={{ fontSize: '1rem', color: 'var(--gray-400)', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
              Our primary focus is fertilizer — specifically urea. Select energy and industrial transactions are considered on a case-by-case basis.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            <div className="card" style={{ borderColor: 'var(--gold)' }}>
              <div style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold)', marginBottom: '0.75rem' }}>Primary Focus</div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--white)', marginBottom: '1rem' }}>Fertilizer</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                {[
                  'Granular Urea (46%)',
                  'Bulk shipments',
                  'International sourcing and delivery',
                ].map((item) => (
                  <div key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '4px', height: '4px', backgroundColor: 'var(--gold)', marginTop: '0.45rem', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.9rem', color: 'var(--gray-400)', lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card">
              <div style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gray-400)', marginBottom: '0.75rem' }}>Secondary — Select Transactions</div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--white)', marginBottom: '1rem' }}>Energy</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                {[
                  'Light crude (select transactions only)',
                  'Established channels and counterparties',
                  'Case-by-case assessment',
                ].map((item) => (
                  <div key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '4px', height: '4px', backgroundColor: 'var(--gray-600)', marginTop: '0.45rem', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.9rem', color: 'var(--gray-400)', lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: '0.75rem', color: 'var(--gray-600)', lineHeight: 1.6, marginTop: '1rem' }}>
                Not all energy inquiries will be a fit. We assess each based on counterparty quality, transaction structure, and jurisdiction.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/current-focus" className="btn-outline">View Full Focus Areas</Link>
          </div>
        </div>
      </section>

      {/* Process Overview — 5 Step Visual */}
      <section className="section" style={{ backgroundColor: 'var(--charcoal-light)', borderTop: '1px solid var(--charcoal-muted)', borderBottom: '1px solid var(--charcoal-muted)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold)', marginBottom: '1rem' }}>How We Work</div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--white)', marginBottom: '1rem' }}>The Process</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0', position: 'relative' }}>
            {[
              { num: '1', title: 'Qualification' },
              { num: '2', title: 'Alignment' },
              { num: '3', title: 'Structuring' },
              { num: '4', title: 'Coordination' },
              { num: '5', title: 'Execution' },
            ].map((step, i) => (
              <div key={step.num} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative', padding: '0 0.5rem' }}>
                {i < 4 && (
                  <div style={{ position: 'absolute', top: '1.5rem', right: '-50%', width: '100%', height: '1px', backgroundColor: 'var(--charcoal-muted)', zIndex: 0, display: 'none' }} />
                )}
                <div style={{
                  width: '3rem',
                  height: '3rem',
                  border: '1px solid var(--gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.125rem',
                  fontWeight: 700,
                  color: 'var(--gold)',
                  marginBottom: '1rem',
                  position: 'relative',
                  zIndex: 1,
                  backgroundColor: 'var(--charcoal-light)',
                }}>
                  {step.num}
                </div>
                <h4 style={{ fontSize: '0.875rem', color: 'var(--white)', fontFamily: 'Inter, sans-serif', letterSpacing: '0.05em', textTransform: 'uppercase', fontWeight: 600 }}>{step.title}</h4>
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
            <Link href="/contact?type=buyer" className="btn-gold">Buyer Inquiry</Link>
            <Link href="/contact?type=supplier" className="btn-outline">Supplier Inquiry</Link>
            <Link href="/contact?type=intermediary" className="btn-outline">Intermediary Inquiry</Link>
          </div>
        </div>
      </section>
    </>
  );
}
