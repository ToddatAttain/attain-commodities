import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Capabilities',
  description: 'Attain Commodities capabilities: sourcing, buyer/supplier matching, transaction coordination, logistics, and deal structuring across global commodity markets.',
  openGraph: {
    title: 'Capabilities | Attain Commodities',
    description: 'Sourcing, buyer/supplier matching, transaction coordination, and deal structuring across fertilizer, energy, and industrial markets.',
  },
};

const capabilities = [
  {
    num: '01',
    title: 'Sourcing & Procurement',
    description: 'We identify and qualify suppliers for fertilizer, energy, and industrial commodity products. Our sourcing process begins with understanding your specifications, volume requirements, and delivery timeline — then working backward to find the right supply channel.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    imageAlt: 'Global supplier network',
  },
  {
    num: '02',
    title: 'Buyer & Supplier Matching',
    description: 'Our role is to create productive connections between buyers and suppliers. We assess both sides of every transaction — specifications, commercial terms, financial standing, and track record — to ensure a credible match before moving forward.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    imageAlt: 'Business matching and alignment',
  },
  {
    num: '03',
    title: 'Transaction Coordination',
    description: 'Once a match is identified, we coordinate the commercial elements of the transaction — pricing, payment terms, inspection clauses, and documentation. We maintain structured communication throughout to keep all parties informed and aligned.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    imageAlt: 'Transaction coordination and documentation',
  },
  {
    num: '04',
    title: 'Logistics Coordination',
    description: 'We assist in coordinating the logistics of commodity transactions — connecting buyers and suppliers with qualified logistics providers, freight forwarders, and inspection agents. Our focus is on ensuring product moves from origin to destination as agreed.',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80',
    imageAlt: 'Shipping and logistics infrastructure',
  },
  {
    num: '05',
    title: 'Deal Structuring',
    description: 'We help structure transactions to balance the interests of both parties. This includes advising on contract structures, payment frameworks, and risk allocation — with a focus on deals that are clear, fair, and executable.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80',
    imageAlt: 'Deal structuring and commercial frameworks',
  },
];

export default function CapabilitiesPage() {
  return (
    <>
      {/* Page Header */}
      <section style={{ position: 'relative', minHeight: '50vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(26,26,26,0.95) 55%, rgba(26,26,26,0.5) 100%)', zIndex: 1 }} />
        <Image
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80"
          alt="Commodities trading operations"
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '600px' }}>
            <div style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold)', marginBottom: '1rem' }}>
              Capabilities
            </div>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.1, marginBottom: '1rem', color: 'var(--white)' }}>
              From inquiry to execution — our full range of services.
            </h1>
            <p style={{ fontSize: '1.0625rem', color: 'var(--gray-200)', lineHeight: 1.7 }}>
              We provide end-to-end commodity transaction support — from initial sourcing through to final delivery coordination.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Statement */}
      <section className="section" style={{ backgroundColor: 'var(--charcoal-light)', borderTop: '1px solid var(--charcoal-muted)', borderBottom: '1px solid var(--charcoal-muted)' }}>
        <div className="container">
          <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: 'var(--white)', marginBottom: '1.5rem' }}>
              What we actually do.
            </h2>
            <div className="prose">
              <p style={{ textAlign: 'center' }}>
                We facilitate commodity transactions between buyers and suppliers. We do not buy and resell on our own account. We do not take title to product. Our role is to create the conditions for a successful transaction — through sourcing, matching, coordination, and deal structuring — and see it through to completion.
              </p>
              <p style={{ textAlign: 'center' }}>
                Every engagement is different. Some clients need help finding a supplier for a specific product. Others have supply available and need help identifying credible buyers. We adapt our approach to fit the situation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capability Cards */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
            {capabilities.map((cap, i) => (
              <div key={cap.num} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                <div style={{ order: i % 2 === 0 ? 1 : 2 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                    <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', fontWeight: 700, color: 'var(--gold)', lineHeight: 1 }}>{cap.num}</span>
                    <div style={{ width: '2rem', height: '1px', backgroundColor: 'var(--charcoal-muted)' }} />
                  </div>
                  <h2 style={{ fontSize: 'clamp(1.375rem, 2vw, 1.75rem)', color: 'var(--white)', marginBottom: '1rem' }}>{cap.title}</h2>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--gray-400)', lineHeight: 1.75 }}>{cap.description}</p>
                </div>
                <div style={{ order: i % 2 === 0 ? 2 : 1, position: 'relative', minHeight: '300px' }}>
                  <Image
                    src={cap.image}
                    alt={cap.imageAlt}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Are Not */}
      <section className="section" style={{ backgroundColor: 'var(--charcoal-light)', borderTop: '1px solid var(--charcoal-muted)', borderBottom: '1px solid var(--charcoal-muted)' }}>
        <div className="container">
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold)', marginBottom: '1rem' }}>Clarity</div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: 'var(--white)', marginBottom: '1.5rem' }}>
              What we are not.
            </h2>
            <div className="prose">
              <p>
                We are not a commodity exchange or trading platform. We are not a financial institution. We do not provide financing, though we may be able to introduce counterparties to qualified financial partners.
              </p>
              <p>
                We are not a logistics provider. We coordinate logistics but do not own or operate shipping, warehousing, or transportation assets.
              </p>
              <p>
                We do not guarantee supply or assume title to product. We facilitate transactions. The commercial terms, risks, and obligations rest with the buyer and supplier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm" style={{ textAlign: 'center' }}>
        <div className="container-narrow">
          <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: 'var(--white)', marginBottom: '1rem' }}>Have a commodity need?</h2>
          <p style={{ fontSize: '1rem', color: 'var(--gray-400)', lineHeight: 1.7, marginBottom: '2rem' }}>
            Tell us what you are looking for. We will review your inquiry and respond if we can help.
          </p>
          <Link href="/contact" className="btn-gold">Submit an Inquiry</Link>
        </div>
      </section>
    </>
  );
}
