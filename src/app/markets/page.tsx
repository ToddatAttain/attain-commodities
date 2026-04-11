import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Markets',
  description: 'Attain Commodities operates in fertilizer and urea (primary focus) and select energy transactions (secondary). Learn about our focus areas.',
  openGraph: {
    title: 'Markets | Attain Commodities',
    description: 'Fertilizer and urea (primary) and select energy transactions. Connecting buyers and suppliers globally.',
  },
};

const markets = [
  {
    slug: 'fertilizer',
    title: 'Fertilizer & Urea',
    tagline: 'Our primary focus — granular urea for international sourcing and delivery.',
    primary: true,
    description:
      'The global fertilizer market is essential to food production. We focus on urea and nitrogen-based fertilizers — working with buyers who need reliable agricultural input sourcing and suppliers who need efficient market access.',
    context: [
      'Primary product: Granular Urea (46%) — bulk shipments',
      'International sourcing and delivery',
      'FOB and CIF terms considered',
      'Supply from Middle East, North Africa, Southeast Asia, and the Americas',
    ],
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80',
    imageAlt: 'Agricultural fields and fertilizer application',
  },
  {
    slug: 'energy',
    title: 'Energy & Crude',
    tagline: 'Select transactions only — case-by-case assessment.',
    primary: false,
    description:
      'Select energy transactions are considered on a case-by-case basis. We do not pursue all energy inquiries — only those where we have established counterparty relationships, clear transaction structure, and no jurisdictional or compliance concerns.',
    context: [
      'Light crude — select transactions only',
      'Established counterparty relationships required',
      'Full compliance and sanctions review',
      'May decline without detailed explanation',
    ],
    image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80',
    imageAlt: 'Oil refinery and energy infrastructure',
  },
];

export default function MarketsPage() {
  return (
    <>
      {/* Page Header */}
      <section style={{ position: 'relative', minHeight: '50vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(26,26,26,0.95) 55%, rgba(26,26,26,0.5) 100%)', zIndex: 1 }} />
        <Image
          src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&q=80"
          alt="Agricultural fields — fertilizer and urea"
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '600px' }}>
            <div style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold)', marginBottom: '1rem' }}>
              Markets
            </div>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.1, marginBottom: '1rem', color: 'var(--white)' }}>
              Fertilizer first. Energy selectively.
            </h1>
            <p style={{ fontSize: '1.0625rem', color: 'var(--gray-200)', lineHeight: 1.7 }}>
              Our primary focus is fertilizer — specifically granular urea. Select energy transactions are considered on a case-by-case basis.
            </p>
          </div>
        </div>
      </section>

      {/* Market Positioning */}
      <section className="section" style={{ backgroundColor: 'var(--charcoal-light)', borderTop: '1px solid var(--charcoal-muted)', borderBottom: '1px solid var(--charcoal-muted)', textAlign: 'center' }}>
        <div className="container-narrow">
          <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: 'var(--white)', marginBottom: '1.5rem' }}>
            We focus where we have genuine market access.
          </h2>
          <p style={{ fontSize: '0.9375rem', color: 'var(--gray-400)', lineHeight: 1.75, marginBottom: '2.5rem' }}>
            Market selectivity is not a limitation — it is a strength. It means every inquiry we take on has a real chance of becoming a transaction. We build our reputation on deals we can close, not deals we chase.
          </p>
          <Link href="/current-focus" className="btn-outline">View Current Focus Areas</Link>
        </div>
      </section>

      {/* Markets Detail */}
      {markets.map((market, i) => (
        <section
          key={market.slug}
          className="section"
          style={{
            backgroundColor: i % 2 === 0 ? 'transparent' : 'var(--charcoal-light)',
            borderTop: '1px solid var(--charcoal-muted)',
            borderBottom: i % 2 === 1 ? '1px solid var(--charcoal-muted)' : 'none',
          }}
        >
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
              <div style={{ order: i % 2 === 0 ? 1 : 2 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <div style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, color: market.primary ? 'var(--gold)' : 'var(--gray-400)', marginBottom: 0 }}>
                    {market.primary ? 'Primary Focus' : 'Secondary — Select Transactions'}
                  </div>
                </div>
                <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: 'var(--white)', marginBottom: '0.75rem' }}>{market.title}</h2>
                <p style={{ fontSize: '0.9375rem', color: market.primary ? 'var(--gold)' : 'var(--gray-400)', fontStyle: 'italic', marginBottom: '1.5rem' }}>{market.tagline}</p>
                <p style={{ fontSize: '0.9375rem', color: 'var(--gray-400)', lineHeight: 1.75, marginBottom: '2rem' }}>{market.description}</p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                  {market.context.map((point, j) => (
                    <div key={j} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <div style={{ width: '1px', height: '100%', minHeight: '1.25rem', backgroundColor: market.primary ? 'var(--gold)' : 'var(--charcoal-muted)', marginTop: '0.2rem', flexShrink: 0 }} />
                      <p style={{ fontSize: '0.875rem', color: 'var(--gray-400)', lineHeight: 1.6, margin: 0 }}>{point}</p>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: '2rem' }}>
                  <Link href="/contact" className={market.primary ? 'btn-gold' : 'btn-outline'} style={{ fontSize: '0.8125rem', padding: '0.625rem 1.5rem' }}>
                    {market.primary ? 'Inquire About Urea' : 'Inquire About Energy'}
                  </Link>
                </div>
              </div>

              <div style={{ order: i % 2 === 0 ? 2 : 1, position: 'relative', minHeight: '350px' }}>
                <Image
                  src={market.image}
                  alt={market.imageAlt}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="section-sm" style={{ backgroundColor: 'var(--charcoal-light)', borderTop: '1px solid var(--charcoal-muted)', textAlign: 'center' }}>
        <div className="container-narrow">
          <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: 'var(--white)', marginBottom: '1rem' }}>Ready to begin?</h2>
          <p style={{ fontSize: '1rem', color: 'var(--gray-400)', lineHeight: 1.7, marginBottom: '2rem' }}>
            Submit a structured inquiry. Qualified inquiries receive a response within two business days.
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
