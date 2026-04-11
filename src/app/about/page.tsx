import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About',
  description: 'Attain Commodities is a DBA of Attain Brands, LLC — a structured commodity sourcing and transaction coordination firm focused on fertilizer and selected energy markets.',
  openGraph: {
    title: 'About Attain Commodities',
    description: 'A structured commodity sourcing and transaction coordination firm. A DBA of Attain Brands, LLC.',
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
              Structured execution. Disciplined deal flow.
            </h1>
            <p style={{ fontSize: '1.0625rem', color: 'var(--gray-200)', lineHeight: 1.7 }}>
              We are Attain Commodities — a DBA of Attain Brands, LLC. Our role is to facilitate commodity transactions between qualified buyers and verified suppliers.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section" style={{ borderTop: '1px solid var(--charcoal-muted)' }}>
        <div className="container">
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold)', marginBottom: '1rem' }}>Leadership</div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: 'var(--white)', marginBottom: '2rem' }}>Founder</h2>
            <div className="prose">
              <p>
                The founder brings experience in operations, government, and large-scale program leadership to Attain Commodities. The focus is on applying structured execution discipline to commodity sourcing and transaction coordination — with an emphasis on doing fewer things well, maintaining quality counterparties, and executing transactions cleanly.
              </p>
              <p>
                The Attain Brands platform provides administrative and operational infrastructure, allowing Attain Commodities to concentrate on its core mission: facilitating transactions between qualified buyers, suppliers, and intermediaries in fertilizer and selected energy markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section" style={{ backgroundColor: 'var(--charcoal-light)', borderTop: '1px solid var(--charcoal-muted)', borderBottom: '1px solid var(--charcoal-muted)' }}>
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
                  We are a focused team that prioritizes relationship quality over transaction volume. We work with buyers, suppliers, and intermediaries who value a structured, professional approach to commodity sourcing and sales.
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
      <section className="section">
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

      {/* CTA */}
      <section className="section-sm" style={{ backgroundColor: 'var(--charcoal-light)', borderTop: '1px solid var(--charcoal-muted)', textAlign: 'center' }}>
        <div className="container-narrow">
          <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: 'var(--white)', marginBottom: '1rem' }}>Work with us.</h2>
          <p style={{ fontSize: '1rem', color: 'var(--gray-400)', lineHeight: 1.7, marginBottom: '2rem' }}>
            We welcome inquiries from qualified buyers, suppliers, and intermediaries. If you have a legitimate commodity need, we want to hear from you.
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
