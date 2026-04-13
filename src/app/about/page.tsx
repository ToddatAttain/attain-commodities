import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About',
  description: 'Attain Commodities is a DBA of Attain Brands, LLC — a structured commodity transaction facilitator focused on fertilizer and selected energy markets.',
  openGraph: {
    title: 'About Attain Commodities',
    description: 'We facilitate commodity transactions between qualified buyers and verified suppliers. A DBA of Attain Brands, LLC.',
  },
};

const values = [
  {
    title: 'Discipline',
    description: 'We follow a structured process and do not cut corners on qualification or compliance. Every transaction earns its place.',
  },
  {
    title: 'Execution',
    description: 'We are focused on getting deals done — from first inquiry through to delivery. Talking is not doing. We prefer to deliver.',
  },
  {
    title: 'Clarity',
    description: 'We communicate directly and expect the same from counterparties. Ambiguity in commodity trading is expensive and we work to eliminate it.',
  },
  {
    title: 'Precision',
    description: 'Details matter in commodity transactions. Specifications, terms, logistics, and timelines receive close attention at every stage.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section style={{ position: 'relative', minHeight: '50vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(26,26,26,0.95) 55%, rgba(26,26,26,0.5) 100%)', zIndex: 1 }} />
        <Image
          src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=1920&q=80"
          alt="Industrial infrastructure and global trade"
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '600px' }}>
            <div style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold)', marginBottom: '1rem' }}>
              About
            </div>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.1, marginBottom: '1rem', color: 'var(--white)' }}>
              Structured execution. Disciplined deal flow.
            </h1>
            <p style={{ fontSize: '1.0625rem', color: 'var(--gray-200)', lineHeight: 1.7 }}>
              We are Attain Commodities — a DBA of Attain Brands, LLC. We operate as a transaction facilitator, not a principal. Our role is to bring qualified buyers and verified suppliers together and coordinate execution through to delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section" style={{ borderTop: '1px solid var(--charcoal-muted)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '5rem', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold)', marginBottom: '1rem' }}>Who We Are</div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: 'var(--white)', marginBottom: '1.5rem' }}>
                Built on the Attain Brands foundation.
              </h2>
              <div className="prose">
                <p>
                  Attain Commodities is a DBA of Attain Brands, LLC. We facilitate commodity transactions between qualified buyers, verified suppliers, and intermediaries. We do not take title to goods, hold inventory, provide financing, or operate as a logistics provider.
                </p>
                <p>
                  Our focus is fertilizer — specifically granular urea (46%) — and select energy transactions, primarily Nigerian Light Crude. We work with counterparties who value a structured, professional approach to commodity sourcing and execution.
                </p>
              </div>
            </div>
            <div style={{ position: 'relative', minHeight: '400px' }}>
              <Image
                src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80"
                alt="Container ship at port — global trade infrastructure"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Operating Position */}
      <section className="section" style={{ backgroundColor: 'var(--charcoal-light)', borderTop: '1px solid var(--charcoal-muted)', borderBottom: '1px solid var(--charcoal-muted)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold)', marginBottom: '1rem' }}>Operating Position</div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: 'var(--white)' }}>What we are and what we are not.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {[
              {
                label: 'We Are',
                color: 'var(--gold)',
                items: [
                  'A transaction facilitator',
                  'Focused on urea and select energy',
                  'Disciplined about counterparty qualification',
                  'Clear about transaction structure and terms',
                ],
              },
              {
                label: 'We Are Not',
                color: 'var(--gray-400)',
                items: [
                  'A principal or risk holder',
                  'A logistics or freight provider',
                  'A financier or credit provider',
                  'Active in every commodity or market',
                ],
              },
            ].map(({ label, color, items }) => (
              <div key={label} className="card">
                <div style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, color, marginBottom: '1.25rem' }}>{label}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {items.map((item) => (
                    <div key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <div style={{ width: '4px', height: '4px', backgroundColor: color, marginTop: '0.45rem', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.9rem', color: 'var(--gray-400)', lineHeight: 1.6 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Legal */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
            <div>
              <div style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold)', marginBottom: '1rem' }}>Compliance</div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: 'var(--white)', marginBottom: '1.5rem' }}>Our operating standards.</h2>
              <div className="prose">
                <p>
                  All counterparties are subject to compliance review before engagement. We do not facilitate transactions involving restricted parties, sanctioned jurisdictions, or prohibited products under applicable trade laws.
                </p>
                <p>
                  We do not take title to goods. We operate as a transaction facilitator, not a principal. This structure allows us to focus on deal execution without assuming inventory or credit risk.
                </p>
                <p>
                  Attain Commodities is a division of Attain Brands, LLC.
                </p>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                'We do not take title to goods.',
                'We operate as a transaction facilitator, not a principal.',
                'All counterparties subject to compliance review.',
                'Attain Commodities is a division of Attain Brands, LLC.',
              ].map((item) => (
                <div key={item} className="card" style={{ padding: '1.25rem 1.5rem' }}>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '1px', height: '100%', minHeight: '1.25rem', backgroundColor: 'var(--gold)', marginTop: '0.2rem', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.9375rem', color: 'var(--gray-200)', lineHeight: 1.6 }}>{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section" style={{ backgroundColor: 'var(--charcoal-light)', borderTop: '1px solid var(--charcoal-muted)', borderBottom: '1px solid var(--charcoal-muted)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold)', marginBottom: '1rem' }}>Philosophy</div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', color: 'var(--white)' }}>How we operate.</h2>
          </div>

          <div className="prose" style={{ maxWidth: '720px', margin: '0 auto 3rem' }}>
            <p style={{ textAlign: 'center' }}>
              Commodity trading is a relationship business. But relationships alone are not enough — they need structure, transparency, and accountability to produce reliable outcomes.
            </p>
            <p style={{ textAlign: 'center' }}>
              We believe in doing fewer things well. We are selective about the counterparties we work with and the transactions we pursue. This selectivity protects our credibility and ensures we can deliver on what we commit to.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {values.map((value) => (
              <div key={value.title} className="card">
                <div style={{ width: '2rem', height: '2px', backgroundColor: 'var(--gold)', marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.125rem', color: 'var(--white)', marginBottom: '0.75rem' }}>{value.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--gray-400)', lineHeight: 1.7 }}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm" style={{ textAlign: 'center' }}>
        <div className="container-narrow">
          <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: 'var(--white)', marginBottom: '1rem' }}>Work with us.</h2>
          <p style={{ fontSize: '1rem', color: 'var(--gray-400)', lineHeight: 1.7, marginBottom: '2rem' }}>
            We welcome inquiries from qualified buyers, suppliers, and intermediaries who are prepared to provide the information required for a substantive engagement.
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
