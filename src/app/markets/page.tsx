import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Markets',
  description: 'Attain Commodities operates across Fertilizer and Urea, Energy and Crude Oil, and Industrial Commodities markets. Learn about our focus areas.',
  openGraph: {
    title: 'Markets | Attain Commodities',
    description: 'Fertilizer, Energy, and Industrial Commodity markets. Connecting buyers and suppliers globally.',
  },
};

const markets = [
  {
    slug: 'fertilizer',
    title: 'Fertilizer & Urea',
    tagline: 'Connecting agricultural input supply with global demand.',
    description:
      'The global fertilizer market is essential to food production. We focus on urea and nitrogen-based fertilizers — working with buyers who need reliable agricultural input sourcing and suppliers who need efficient market access.',
    context: [
      'Urea (granular and prilled) is the world\'s most widely used nitrogen fertilizer.',
      'Demand is driven by agricultural seasons, crop prices, and nitrogen application rates.',
      'Supply comes primarily from major producers in the Middle East, North Africa, Southeast Asia, and the Americas.',
      'Price discovery is influenced by natural gas costs, production capacity, and global trade flows.',
    ],
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80',
    imageAlt: 'Agricultural fields and fertilizer application',
    keywords: 'urea supplier, fertilizer trading, nitrogen fertilizers, granular urea, agricultural commodities',
  },
  {
    slug: 'energy',
    title: 'Energy & Crude',
    tagline: 'Facilitating energy product transactions across established channels.',
    description:
      'Energy commodities are the backbone of industrial activity. We facilitate crude oil and related energy product transactions — connecting buyers with legitimate supply needs to suppliers with verified product availability.',
    context: [
      'Crude oil remains the world\'s primary energy commodity, with global trade volumes exceeding 100 million barrels per day.',
      'Refined products — diesel, gasoline, fuel oil — represent significant secondary markets.',
      'We do not trade in regulated or sanctioned jurisdictions. All counterparties are vetted for compliance.',
      'Transactions involve established incoterms, inspection protocols, and payment frameworks.',
    ],
    image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80',
    imageAlt: 'Oil refinery and energy infrastructure',
    keywords: 'crude sourcing, energy commodities, petroleum trading, oil transactions',
  },
  {
    slug: 'industrial',
    title: 'Industrial Commodities',
    tagline: 'Sourcing and coordinating across a broad range of industrial inputs.',
    description:
      'Industrial commodities include metals, chemicals, and raw materials that feed into manufacturing, construction, and industrial production. We facilitate transactions across selected industrial commodity verticals where we have credible market access.',
    context: [
      'Industrial commodities cover a broad range — from base metals to specialty chemicals.',
      'We focus on transactions where we have established supplier relationships and clear market channels.',
      'Typical counterparties include manufacturers, fabricators, and industrial distributors.',
      'Volume, specification, and logistics are the primary variables in these transactions.',
    ],
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80',
    imageAlt: 'Industrial manufacturing and raw materials',
    keywords: 'industrial commodities, raw materials sourcing, metals trading, chemical commodities',
  },
];

export default function MarketsPage() {
  return (
    <>
      {/* Page Header */}
      <section style={{ position: 'relative', minHeight: '50vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(26,26,26,0.95) 55%, rgba(26,26,26,0.5) 100%)', zIndex: 1 }} />
        <Image
          src="https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1920&q=80"
          alt="Energy infrastructure and global commodities"
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
              Three markets. Clear focus.
            </h1>
            <p style={{ fontSize: '1.0625rem', color: 'var(--gray-200)', lineHeight: 1.7 }}>
              We operate in fertilizer and urea, energy and crude, and industrial commodities — connecting credible buyers with verified suppliers across global markets.
            </p>
          </div>
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
                <div style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold)', marginBottom: '0.75rem' }}>
                  {String(i + 1).padStart(2, '0')} / 03
                </div>
                <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: 'var(--white)', marginBottom: '0.75rem' }}>{market.title}</h2>
                <p style={{ fontSize: '0.9375rem', color: 'var(--gold)', fontStyle: 'italic', marginBottom: '1.5rem' }}>{market.tagline}</p>
                <p style={{ fontSize: '0.9375rem', color: 'var(--gray-400)', lineHeight: 1.75, marginBottom: '2rem' }}>{market.description}</p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                  {market.context.map((point, j) => (
                    <div key={j} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <div style={{ width: '1px', height: '100%', minHeight: '1.25rem', backgroundColor: 'var(--gold)', marginTop: '0.25rem', flexShrink: 0 }} />
                      <p style={{ fontSize: '0.875rem', color: 'var(--gray-400)', lineHeight: 1.6, margin: 0 }}>{point}</p>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: '2rem' }}>
                  <Link href="/contact" className="btn-gold" style={{ fontSize: '0.8125rem', padding: '0.625rem 1.5rem' }}>
                    Inquire About {market.title.split(' ')[0]}
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

      {/* Market Context Statement */}
      <section className="section" style={{ backgroundColor: 'var(--charcoal-light)', borderTop: '1px solid var(--charcoal-muted)', borderBottom: '1px solid var(--charcoal-muted)', textAlign: 'center' }}>
        <div className="container-narrow">
          <div style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold)', marginBottom: '1rem' }}>Our Position</div>
          <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: 'var(--white)', marginBottom: '1.5rem' }}>
            We do not trade in every market — we focus on the ones where we have genuine access.
          </h2>
          <p style={{ fontSize: '0.9375rem', color: 'var(--gray-400)', lineHeight: 1.75, marginBottom: '2.5rem' }}>
            Market selectivity is not a limitation — it is a strength. It means every inquiry we take on has a real chance of becoming a transaction. We build our reputation on deals we can close, not deals we chase.
          </p>
          <Link href="/contact" className="btn-gold">Submit an Inquiry</Link>
        </div>
      </section>
    </>
  );
}
