import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About',
  description: 'Attain Commodities is a DBA of Attain Brands, LLC — a B2B commodities trading firm focused on fertilizer, energy, and industrial markets.',
  openGraph: {
    title: 'About Attain Commodities',
    description: 'A B2B commodities trading firm operating as a DBA of Attain Brands, LLC.',
  },
};

const values = [
  {
    title: 'Integrity',
    description: 'We represent what we can deliver and deliver what we represent. Exaggeration damages long-term relationships — we don\'t do it.',
  },
  {
    title: 'Structure',
    description: 'Every inquiry, qualification, and transaction follows a defined process. Structure reduces risk and creates accountability for all parties.',
  },
  {
    title: 'Clarity',
    description: 'We communicate clearly and directly. Ambiguity in commodity trading is expensive. We work to eliminate it at every stage.',
  },
  {
    title: 'Precision',
    description: 'Commodity transactions are complex. We pay close attention to specifications, terms, logistics, and timelines — because details matter.',
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
              A structured approach to global commodity trading.
            </h1>
            <p style={{ fontSize: '1.0625rem', color: 'var(--gray-200)', lineHeight: 1.7 }}>
              We are Attain Commodities — a DBA of Attain Brands, LLC. Our role is to facilitate commodity transactions between qualified buyers and verified suppliers.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '5rem', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold)', marginBottom: '1rem' }}>Who We Are</div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: 'var(--white)', marginBottom: '1.5rem' }}>
                Built on the Attain Brands foundation.
              </h2>
              <div className="prose">
                <p>
                  Attain Commodities was established as a DBA of Attain Brands, LLC to formalize and grow the firm&apos;s commodity trading activities. The Attain Brands platform provides administrative, legal, and operational infrastructure — allowing Attain Commodities to focus on its core mission: facilitating transactions.
                </p>
                <p>
                  We are a small, focused team that prioritizes relationship quality over transaction volume. We work with buyers, suppliers, and intermediaries who value a structured, professional approach to commodity sourcing and sales.
                </p>
                <p>
                  Our experience spans agricultural inputs, energy products, and industrial raw materials — with particular depth in urea, fertilizers, and crude oil-related transactions.
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

      {/* Philosophy */}
      <section className="section" style={{ backgroundColor: 'var(--charcoal-light)', borderTop: '1px solid var(--charcoal-muted)', borderBottom: '1px solid var(--charcoal-muted)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold)', marginBottom: '1rem' }}>Philosophy</div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', color: 'var(--white)', marginBottom: '1rem' }}>How we operate.</h2>
          </div>

          <div className="prose" style={{ maxWidth: '720px', margin: '0 auto 3rem' }}>
            <p style={{ textAlign: 'center' }}>
              Commodity trading is a relationship business. But relationships alone are not enough — they need structure, transparency, and accountability to produce reliable outcomes.
            </p>
            <p style={{ textAlign: 'center' }}>
              We believe in doing fewer things well. We are selective about the counterparties we work with and the transactions we pursue. This selectivity protects our credibility and ensures we can deliver on what we commit to.
            </p>
            <p style={{ textAlign: 'center' }}>
              We do not make guarantees we cannot keep. We do not oversell our capabilities. When we say we can help, it means we have a credible path to a transaction. That is the reputation we are building.
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

      {/* Commercial Approach */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div style={{ order: 2 }}>
              <div style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold)', marginBottom: '1rem' }}>Commercial Approach</div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: 'var(--white)', marginBottom: '1.5rem' }}>
                Selective, focused, and oriented toward long-term relationships.
              </h2>
              <div className="prose">
                <p>
                  We work with a manageable number of counterparties and transactions at any given time. This is intentional — it allows us to give each engagement the attention it deserves.
                </p>
                <p>
                  Our commercial model is straightforward: we facilitate transactions between buyers and suppliers. We are not a broker in the traditional sense, and we are not a principal trader. Our value lies in the relationships we maintain, the market knowledge we have developed, and the process discipline we bring to every deal.
                </p>
                <p>
                  We do not chase volume. We pursue transactions where we have a genuine ability to connect the right parties and see the deal through to completion.
                </p>
              </div>
            </div>
            <div style={{ position: 'relative', minHeight: '350px' }}>
              <Image
                src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80"
                alt="Trade and commerce infrastructure"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm" style={{ backgroundColor: 'var(--charcoal-light)', borderTop: '1px solid var(--charcoal-muted)', textAlign: 'center' }}>
        <div className="container-narrow">
          <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: 'var(--white)', marginBottom: '1rem' }}>Work with us.</h2>
          <p style={{ fontSize: '1rem', color: 'var(--gray-400)', lineHeight: 1.7, marginBottom: '2rem' }}>
            We welcome inquiries from qualified buyers, suppliers, and intermediaries. If you have a legitimate commodity need, we want to hear from you.
          </p>
          <Link href="/contact" className="btn-gold">Submit an Inquiry</Link>
        </div>
      </section>
    </>
  );
}
