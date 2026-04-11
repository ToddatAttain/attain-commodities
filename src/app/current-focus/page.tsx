import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Current Focus',
  description: 'Attain Commodities current transaction focus: fertilizer (Granular Urea 46%) and select energy transactions.',
  openGraph: {
    title: 'Current Transaction Focus | Attain Commodities',
    description: 'Focused on fertilizer — specifically Granular Urea (46%) — and select energy transactions.',
  },
};

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
              Where we are active.
            </h1>
            <p style={{ fontSize: '1.0625rem', color: 'var(--gray-200)', lineHeight: 1.7 }}>
              Our focus is fertilizer — specifically urea. Select energy transactions are considered on a case-by-case basis.
            </p>
          </div>
        </div>
      </section>

      {/* Fertilizer — Primary Focus */}
      <section className="section" style={{ borderTop: '1px solid var(--charcoal-muted)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
            <div>
              <div style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold)', marginBottom: '0.75rem' }}>Primary Focus</div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: 'var(--white)', marginBottom: '0.75rem' }}>Fertilizer</h2>
              <p style={{ fontSize: '0.9375rem', color: 'var(--gold)', fontStyle: 'italic', marginBottom: '1.5rem' }}>Our lead commodity vertical.</p>

              <div className="prose">
                <p>
                  The global fertilizer market is essential to food production. We focus on urea and nitrogen-based fertilizers — working with buyers who need reliable agricultural input sourcing and suppliers who need efficient market access.
                </p>
                <p>
                  We do not engage in all fertilizer products. Our focus is granular urea (46%) in bulk shipments for international sourcing and delivery. This specificity allows us to maintain genuine market access and deliver reliable outcomes.
                </p>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <Link href="/contact?type=buyer" className="btn-gold" style={{ fontSize: '0.8125rem', padding: '0.625rem 1.5rem' }}>
                  Buyer Inquiry
                </Link>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="card" style={{ borderColor: 'var(--gold)' }}>
                <h3 style={{ fontSize: '1rem', color: 'var(--white)', marginBottom: '1rem' }}>Granular Urea (46%)</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                  {[
                    'Primary product: Granular Urea, 46-0-0',
                    'Form: Granular (not prilled)',
                    'Bulk shipments',
                    'International sourcing and delivery',
                    'FOB and CIF terms considered',
                  ].map((item) => (
                    <div key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <div style={{ width: '4px', height: '4px', backgroundColor: 'var(--gold)', marginTop: '0.45rem', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.875rem', color: 'var(--gray-400)', lineHeight: 1.6 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card">
                <h3 style={{ fontSize: '1rem', color: 'var(--white)', marginBottom: '1rem' }}>Market Context</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                  {[
                    'Urea is the world\'s most widely used nitrogen fertilizer.',
                    'Demand driven by agricultural seasons, crop prices, and nitrogen application rates.',
                    'Supply from major producers in the Middle East, North Africa, Southeast Asia, and the Americas.',
                    'Price influenced by natural gas costs, production capacity, and global trade flows.',
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

      {/* Energy — Secondary */}
      <section className="section" style={{ backgroundColor: 'var(--charcoal-light)', borderTop: '1px solid var(--charcoal-muted)', borderBottom: '1px solid var(--charcoal-muted)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
            <div>
              <div style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gray-400)', marginBottom: '0.75rem' }}>Secondary — Select Transactions Only</div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: 'var(--white)', marginBottom: '1.5rem' }}>Energy</h2>

              <div className="prose">
                <p>
                  Select energy transactions are considered on a case-by-case basis. We do not pursue all energy inquiries — only those where we have established counterparty relationships, clear transaction structure, and no jurisdictional or compliance concerns.
                </p>
                <p>
                  Light crude is the only energy product we currently consider, and only for transactions that meet our qualification criteria.
                </p>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <Link href="/contact?type=buyer" className="btn-outline" style={{ fontSize: '0.8125rem', padding: '0.625rem 1.5rem' }}>
                  Energy Inquiry
                </Link>
              </div>
            </div>

            <div className="card">
              <h3 style={{ fontSize: '1rem', color: 'var(--white)', marginBottom: '1rem' }}>Energy — Assessment Criteria</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                {[
                  'Light crude — select transactions only',
                  'Established counterparty relationships required',
                  'Full compliance and sanctions review',
                  'Clear transaction structure and documentation',
                  'No engagement in restricted markets or jurisdictions',
                ].map((item) => (
                  <div key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '4px', height: '4px', backgroundColor: 'var(--gray-600)', marginTop: '0.45rem', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.875rem', color: 'var(--gray-400)', lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: '0.75rem', color: 'var(--gray-600)', lineHeight: 1.6, marginTop: '1rem' }}>
                Not all energy inquiries will be a fit. We assess each based on counterparty quality, transaction structure, and jurisdiction. We may decline without detailed explanation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Position */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container-narrow">
          <div style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold)', marginBottom: '1rem' }}>Our Position</div>
          <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: 'var(--white)', marginBottom: '1.5rem' }}>
            We do not trade in every commodity — we focus where we have genuine access.
          </h2>
          <p style={{ fontSize: '0.9375rem', color: 'var(--gray-400)', lineHeight: 1.75, marginBottom: '2.5rem' }}>
            Market selectivity is not a limitation — it is a strength. It means every inquiry we take on has a real chance of becoming a transaction. We build our reputation on deals we can close, not deals we chase.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/contact?type=buyer" className="btn-gold">Buyer Inquiry</Link>
            <Link href="/contact?type=supplier" className="btn-outline">Supplier Inquiry</Link>
          </div>
        </div>
      </section>
    </>
  );
}
