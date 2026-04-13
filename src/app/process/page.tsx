import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Process',
  description: 'Attain Commodities six-step transaction process: from buyer inquiry through logistics and shipment coordination.',
  openGraph: {
    title: 'Process | Attain Commodities',
    description: 'Our structured six-step process from inquiry through delivery.',
  },
};

const steps = [
  {
    num: '01',
    title: 'Buyer Inquiry',
    description:
      'Buyer submits an inquiry specifying product, volume, delivery terms, and pricing basis. Inquiries without adequate detail may not be reviewed.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80',
    imageAlt: 'Buyer inquiry submission',
  },
  {
    num: '02',
    title: 'Qualification',
    description:
      'Our commercial team reviews the inquiry and validates counterparty status. We assess product fit, commercial terms, and compliance before proceeding.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    imageAlt: 'Commercial qualification review',
  },
  {
    num: '03',
    title: 'Indicative Offer',
    description:
      'Indicative offer or terms sheet is provided to the qualified buyer. This outlines proposed pricing, structure, and conditions. It is not a binding commitment.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    imageAlt: 'Indicative offer or terms sheet',
  },
  {
    num: '04',
    title: 'Verification',
    description:
      'Proof of funds, mandate verification, or bank confirmation is reviewed. We verify the buyer has the financial standing and authorization to proceed.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    imageAlt: 'Proof of funds and mandate verification',
  },
  {
    num: '05',
    title: 'Contract',
    description:
      'Contract is executed — typically a Sale and Purchase Agreement (SPA) or Master Agreement. All commercial terms, specifications, and conditions are documented.',
    image: 'https://images.unsplash.com/photo-1450105303913-2334f6c58da9?w=800&q=80',
    imageAlt: 'Contract execution',
  },
  {
    num: '06',
    title: 'Delivery',
    description:
      'Logistics and shipment coordination through to delivery at destination port. We remain engaged through final delivery and documentation completion.',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80',
    imageAlt: 'Logistics and shipment coordination',
  },
];

export default function ProcessPage() {
  return (
    <>
      {/* Page Header */}
      <section style={{ position: 'relative', minHeight: '50vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(26,26,26,0.95) 55%, rgba(26,26,26,0.5) 100%)', zIndex: 1 }} />
        <Image
          src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1920&q=80"
          alt="Structured transaction process"
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '600px' }}>
            <div style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold)', marginBottom: '1rem' }}>
              Process
            </div>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.1, marginBottom: '1rem', color: 'var(--white)' }}>
              Six steps. Clear structure.
            </h1>
            <p style={{ fontSize: '1.0625rem', color: 'var(--gray-200)', lineHeight: 1.7 }}>
              Every engagement follows the same structured process — from initial inquiry through to delivery. We do not skip steps, and we do not proceed without adequate information.
            </p>
          </div>
        </div>
      </section>

      {/* 6-Step Visual */}
      <section style={{ backgroundColor: 'var(--charcoal-light)', borderTop: '1px solid var(--charcoal-muted)', borderBottom: '1px solid var(--charcoal-muted)', padding: '4rem 1.5rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold)', marginBottom: '0.75rem' }}>Overview</div>
            <h2 style={{ fontSize: 'clamp(1.375rem, 2.5vw, 1.875rem)', color: 'var(--white)' }}>The Six Steps</h2>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: '0',
            maxWidth: '1100px',
            margin: '0 auto',
          }}>
            {[
              { num: '1', title: 'Inquiry' },
              { num: '2', title: 'Qualification' },
              { num: '3', title: 'Indicative Offer' },
              { num: '4', title: 'Verification' },
              { num: '5', title: 'Contract' },
              { num: '6', title: 'Delivery' },
            ].map((step) => (
              <div key={step.num} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 0.25rem' }}>
                <div style={{
                  width: '2.75rem',
                  height: '2.75rem',
                  border: '1px solid var(--gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: 'var(--gold)',
                  marginBottom: '0.875rem',
                }}>
                  {step.num}
                </div>
                <h4 style={{ fontSize: '0.6875rem', color: 'var(--white)', fontFamily: 'Inter, sans-serif', letterSpacing: '0.05em', textTransform: 'uppercase', fontWeight: 600 }}>{step.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps Detail */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
            {steps.map((step, i) => (
              <div
                key={step.num}
                style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}
              >
                {/* Visual side */}
                <div style={{ order: i % 2 === 0 ? 1 : 2, position: 'relative', minHeight: '280px' }}>
                  <Image
                    src={step.image}
                    alt={step.imageAlt}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  {/* Step number overlay */}
                  <div style={{
                    position: 'absolute',
                    top: '1.5rem',
                    left: '1.5rem',
                    backgroundColor: 'var(--charcoal)',
                    padding: '1rem 1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                  }}>
                    <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700, color: 'var(--gold)' }}>
                      {step.num}
                    </span>
                    <span style={{ fontSize: '0.6875rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gray-200)' }}>
                      Step
                    </span>
                  </div>
                </div>

                {/* Content side */}
                <div style={{ order: i % 2 === 0 ? 2 : 1 }}>
                  <h2 style={{ fontSize: 'clamp(1.375rem, 2vw, 1.75rem)', color: 'var(--white)', marginBottom: '1rem' }}>{step.title}</h2>
                  <div style={{ width: '2.5rem', height: '2px', backgroundColor: 'var(--gold)', marginBottom: '1.5rem' }} />
                  <p style={{ fontSize: '0.9375rem', color: 'var(--gray-400)', lineHeight: 1.75 }}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Principles */}
      <section className="section" style={{ backgroundColor: 'var(--charcoal-light)', borderTop: '1px solid var(--charcoal-muted)', borderBottom: '1px solid var(--charcoal-muted)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold)', marginBottom: '1rem' }}>Principles</div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: 'var(--white)', marginBottom: '1rem' }}>What this process is designed to do.</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2.5rem' }}>
            {[
              ['Protect all parties', 'Qualification exists to ensure we are not wasting anyone\'s time. We ask direct questions and expect direct answers.'],
              ['Create clarity', 'Every step produces a clear output. Terms are agreed in writing. There is no ambiguity about what has been agreed.'],
              ['Reduce transaction risk', 'A structured process catches problems early. We would rather decline an inquiry than proceed with unresolved risk factors.'],
              ['Execute reliably', 'We are focused on getting deals done — from first inquiry through to delivery. Our reputation depends on it.'],
            ].map(([title, desc]) => (
              <div key={title} className="card">
                <div style={{ width: '2rem', height: '2px', backgroundColor: 'var(--gold)', marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1rem', color: 'var(--white)', marginBottom: '0.625rem' }}>{title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--gray-400)', lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Note */}
      <section className="section-sm" style={{ textAlign: 'center', borderTop: '1px solid var(--charcoal-muted)' }}>
        <div className="container-narrow">
          <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: 'var(--white)', marginBottom: '1rem' }}>Every transaction is different.</h2>
          <p style={{ fontSize: '0.9375rem', color: 'var(--gray-400)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
            A straightforward urea inquiry with pre-qualified parties may move through our process quickly. A complex transaction with detailed specifications and logistics requirements may take longer. We adapt the timeline to the transaction — not the other way around.
          </p>
          <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)', lineHeight: 1.7 }}>
            We do not guarantee a specific timeline. What we guarantee is that we will move every qualified inquiry forward as quickly as the circumstances allow.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm" style={{ backgroundColor: 'var(--charcoal-light)', borderTop: '1px solid var(--charcoal-muted)', textAlign: 'center' }}>
        <div className="container-narrow">
          <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: 'var(--white)', marginBottom: '1rem' }}>Ready to begin?</h2>
          <p style={{ fontSize: '1rem', color: 'var(--gray-400)', lineHeight: 1.7, marginBottom: '2rem' }}>
            Submit an inquiry through our structured intake process. Provide product, volume, delivery timeline, and pricing basis.
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
