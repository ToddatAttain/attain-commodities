import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Process',
  description: 'Attain Commodities five-step process: inquiry, qualification, alignment, transaction coordination, and execution.',
  openGraph: {
    title: 'Process | Attain Commodities',
    description: 'How we work: a structured five-step process from inquiry through execution.',
  },
};

const steps = [
  {
    num: '01',
    title: 'Inquiry',
    description:
      'Every engagement begins with a structured inquiry. You submit your requirements — product, volume, specifications, timeline, and target price range. The more detail you provide, the faster we can assess fit.',
    detail: 'We review every submission. Not every inquiry will be a fit — and we will tell you if we don\'t think we can help. If there is a potential match, we move to the next stage.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    imageAlt: 'Initial inquiry and assessment',
  },
  {
    num: '02',
    title: 'Qualification',
    description:
      'Before we proceed, we verify key information on both sides of the potential transaction. For buyers: financial standing and purchasing authority. For suppliers: product availability, quality certifications, and commercial track record.',
    detail: 'This step exists to protect all parties. We ask direct questions. We expect direct answers. We may request documentation — inspection reports, financial references, or trade references.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80',
    imageAlt: 'Qualification and vetting process',
  },
  {
    num: '03',
    title: 'Alignment',
    description:
      'Once both sides are qualified, we bring the parties together and align on commercial terms. Price, volume, delivery schedule, payment terms, inspection clauses, and governing law — all of these are confirmed before a transaction moves forward.',
    detail: 'Alignment is not a handshake — it is a documented agreement on terms. We facilitate this process to ensure both parties have a clear, shared understanding of what is being agreed to.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    imageAlt: 'Alignment of commercial terms',
  },
  {
    num: '04',
    title: 'Transaction Coordination',
    description:
      'With terms agreed, we coordinate the execution phase. This includes monitoring contract performance, facilitating communication between parties, tracking logistics, and managing documentation flow.',
    detail: 'We act as a central point of coordination — not a controlling authority. The buyer and supplier remain the contracting parties. Our role is to keep the transaction on track and flag any issues that arise.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    imageAlt: 'Transaction coordination and monitoring',
  },
  {
    num: '05',
    title: 'Execution',
    description:
      'The final stage is delivery and completion. Product ships, inspection occurs, payment is released, and documentation is finalized. We remain engaged through this stage to ensure the transaction closes as agreed.',
    detail: 'A transaction is not complete until product has been delivered and all obligations have been fulfilled. We stay involved until that point — and conduct a post-transaction review to ensure both parties were satisfied.',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80',
    imageAlt: 'Transaction execution and delivery',
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
          alt="Structured process and workflow"
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
              A five-step process. No surprises.
            </h1>
            <p style={{ fontSize: '1.0625rem', color: 'var(--gray-200)', lineHeight: 1.7 }}>
              From your initial inquiry to final delivery, every engagement follows the same structured process — designed to create clarity and protect all parties.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
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
                  <p style={{ fontSize: '0.9375rem', color: 'var(--gray-400)', lineHeight: 1.75, marginBottom: '1.5rem' }}>{step.description}</p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)', lineHeight: 1.7, borderLeft: '2px solid var(--charcoal-muted)', paddingLeft: '1rem' }}>
                    {step.detail}
                  </p>
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
              ['Protect both parties', 'Qualification exists to ensure we are not wasting anyone\'s time. We ask hard questions early — so problems don\'t emerge during execution.'],
              ['Create clarity', 'Every step produces a clear output. Inquiries are documented. Qualifications are verified. Terms are agreed in writing. There is no ambiguity.'],
              ['Reduce transaction risk', 'A structured process catches problems early. We would rather decline an inquiry than proceed with a transaction that has unresolved risk factors.'],
              ['Build long-term relationships', 'We want to do business again. That means every transaction ends well — for both parties. Our process is designed with that outcome in mind.'],
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
            A straightforward urea inquiry with pre-qualified parties may move through our process in days. A complex industrial commodity transaction with detailed specifications and logistics requirements may take weeks. We adapt the timeline to the transaction — not the other way around.
          </p>
          <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)', lineHeight: 1.7 }}>
            <strong style={{ color: 'var(--gray-200)' }}>We do not guarantee a specific timeline for any transaction.</strong> What we guarantee is that we will move every qualified inquiry forward as quickly as the circumstances allow.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm" style={{ backgroundColor: 'var(--charcoal-light)', borderTop: '1px solid var(--charcoal-muted)', textAlign: 'center' }}>
        <div className="container-narrow">
          <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: 'var(--white)', marginBottom: '1rem' }}>Ready to begin?</h2>
          <p style={{ fontSize: '1rem', color: 'var(--gray-400)', lineHeight: 1.7, marginBottom: '2rem' }}>
            Submit an inquiry through our structured intake process. We review every submission and respond to qualified inquiries within two business days.
          </p>
          <Link href="/contact" className="btn-gold">Submit an Inquiry</Link>
        </div>
      </section>
    </>
  );
}
