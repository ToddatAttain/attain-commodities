import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Attain Commodities — Global Commodities Trading',
  description: 'Attain Commodities facilitates global commodity transactions across fertilizer, energy, and industrial markets. A DBA of Attain Brands, LLC.',
  openGraph: {
    title: 'Attain Commodities — Global Commodities Trading',
    description: 'Facilitating global commodity transactions with integrity and precision across fertilizer, energy, and industrial markets.',
  },
};

const commodityAreas = [
  {
    title: 'Fertilizer & Urea',
    description: 'Connecting suppliers and buyers across global agricultural input markets with reliable sourcing and logistics coordination.',
    href: '/markets',
  },
  {
    title: 'Energy & Crude',
    description: 'Facilitating crude oil and energy product transactions across established supply chains and emerging market channels.',
    href: '/markets',
  },
  {
    title: 'Industrial Commodities',
    description: 'Sourcing and transaction coordination across a broad spectrum of industrial inputs and raw materials.',
    href: '/markets',
  },
];

const processSteps = [
  { num: '01', title: 'Inquiry', desc: 'Submit your requirements through our structured intake process.' },
  { num: '02', title: 'Qualification', desc: 'We assess alignment between your needs and available market channels.' },
  { num: '03', title: 'Alignment', desc: 'Buyers and suppliers are matched based on specifications, volume, and terms.' },
  { num: '04', title: 'Transaction', desc: 'We coordinate the commercial and logistical elements of the deal.' },
  { num: '05', title: 'Execution', desc: 'Finalized transactions are managed through to delivery and completion.' },
];

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
          <div style={{ maxWidth: '680px' }}>
            <div style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold)', marginBottom: '1.5rem' }}>
              Attain Commodities — A DBA of Attain Brands, LLC
            </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, marginBottom: '1.5rem', color: 'var(--white)' }}>
              Global commodity<br />transactions, executed<br />with precision.
            </h1>
            <div className="divider" />
            <p style={{ fontSize: '1.0625rem', color: 'var(--gray-200)', lineHeight: 1.7, maxWidth: '540px', marginBottom: '2.5rem' }}>
              We facilitate commodity transactions across fertilizer, energy, and industrial markets. Our role is to create clarity between buyers and suppliers — connecting legitimate demand with reliable supply channels.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <Link href="/contact" className="btn-gold">
                Submit an Inquiry
              </Link>
              <Link href="/process" className="btn-outline">
                Our Process
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="section" style={{ backgroundColor: 'var(--charcoal-light)', borderTop: '1px solid var(--charcoal-muted)', borderBottom: '1px solid var(--charcoal-muted)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
            <div>
              <div style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold)', marginBottom: '0.75rem' }}>Relationship</div>
              <h3 style={{ fontSize: '1.375rem', marginBottom: '0.75rem', color: 'var(--white)' }}>Built on Attain Brands</h3>
              <p style={{ fontSize: '0.9375rem', color: 'var(--gray-400)', lineHeight: 1.7 }}>
                Operating as a DBA of Attain Brands, LLC, Attain Commodities benefits from established infrastructure, proven processes, and a foundation built for long-term commercial relationships.
              </p>
            </div>
            <div>
              <div style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold)', marginBottom: '0.75rem' }}>Approach</div>
              <h3 style={{ fontSize: '1.375rem', marginBottom: '0.75rem', color: 'var(--white)' }}>Structured & Transparent</h3>
              <p style={{ fontSize: '0.9375rem', color: 'var(--gray-400)', lineHeight: 1.7 }}>
                Every engagement follows a clear process. We qualify inquiries, align counterparties, and coordinate transactions with structured communication at every stage.
              </p>
            </div>
            <div>
              <div style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold)', marginBottom: '0.75rem' }}>Markets</div>
              <h3 style={{ fontSize: '1.375rem', marginBottom: '0.75rem', color: 'var(--white)' }}>Fertilizer, Energy & Industrial</h3>
              <p style={{ fontSize: '0.9375rem', color: 'var(--gray-400)', lineHeight: 1.7 }}>
                We operate across three primary commodity verticals — serving buyers and suppliers who need a credible, efficient intermediary for global market transactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commodity Areas */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold)', marginBottom: '1rem' }}>What We Trade</div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--white)', marginBottom: '1rem' }}>Commodity Markets</h2>
            <p style={{ fontSize: '1rem', color: 'var(--gray-400)', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
              Our focus spans the fertilizer, energy, and industrial commodity sectors — connecting qualified buyers with verified suppliers across global markets.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {commodityAreas.map((area) => (
              <div key={area.title} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ width: '2rem', height: '2px', backgroundColor: 'var(--gold)' }} />
                <h3 style={{ fontSize: '1.25rem', color: 'var(--white)' }}>{area.title}</h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--gray-400)', lineHeight: 1.7, flex: 1 }}>
                  {area.description}
                </p>
                <Link href={area.href} className="btn-outline" style={{ alignSelf: 'flex-start', fontSize: '0.75rem', padding: '0.5rem 1rem' }}>
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="section" style={{ backgroundColor: 'var(--charcoal-light)', borderTop: '1px solid var(--charcoal-muted)', borderBottom: '1px solid var(--charcoal-muted)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold)', marginBottom: '1rem' }}>How We Work</div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--white)', marginBottom: '1rem' }}>A Structured Process</h2>
            <p style={{ fontSize: '1rem', color: 'var(--gray-400)', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
              Every transaction follows a defined five-step process designed to create clarity, reduce friction, and protect all parties involved.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem' }}>
            {processSteps.map((step, i) => (
              <div key={step.num} style={{ textAlign: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                  <div className="step-number">{step.num}</div>
                  <h4 style={{ fontSize: '1rem', color: 'var(--white)', marginBottom: '0.25rem' }}>{step.title}</h4>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--gray-600)', lineHeight: 1.6 }}>{step.desc}</p>
                </div>
                {i < processSteps.length - 1 && (
                  <div style={{ display: 'none', ['@media (min-width:768px)' as string]: { display: 'block', position: 'absolute', top: '50%', left: 'calc(100% - 1rem)', width: '2rem', height: '1px', backgroundColor: 'var(--charcoal-muted)' } }} />
                )}
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
            Ready to begin a conversation?
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--gray-400)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Submit an inquiry through our structured intake process. We review every submission and respond to qualified inquiries within two business days.
          </p>
          <Link href="/contact" className="btn-gold">Submit an Inquiry</Link>
        </div>
      </section>
    </>
  );
}
