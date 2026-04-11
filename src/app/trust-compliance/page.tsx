import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Trust & Compliance',
  description: 'Attain Commodities trust and compliance framework: counterparty vetting, sanctions awareness, and ethical transaction practices.',
  openGraph: {
    title: 'Trust & Compliance | Attain Commodities',
    description: 'Counterparty vetting, sanctions awareness, and ethical transaction practices.',
  },
};

export default function TrustCompliancePage() {
  return (
    <>
      {/* Page Header */}
      <section style={{ position: 'relative', minHeight: '50vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(26,26,26,0.95) 55%, rgba(26,26,26,0.5) 100%)', zIndex: 1 }} />
        <Image
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80"
          alt="Trust, compliance, and structured transaction practices"
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '600px' }}>
            <div style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold)', marginBottom: '1rem' }}>
              Trust & Compliance
            </div>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.1, marginBottom: '1rem', color: 'var(--white)' }}>
              How we protect the integrity of every transaction.
            </h1>
            <p style={{ fontSize: '1.0625rem', color: 'var(--gray-200)', lineHeight: 1.7 }}>
              Trust is earned through consistent, disciplined behavior. Our compliance framework is designed to protect our counterparties and the integrity of the transactions we facilitate.
            </p>
          </div>
        </div>
      </section>

      {/* Counterparty Vetting */}
      <section className="section" style={{ borderTop: '1px solid var(--charcoal-muted)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
            <div>
              <div style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold)', marginBottom: '1rem' }}>01 / 05</div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: 'var(--white)', marginBottom: '1.5rem' }}>Counterparty Vetting</h2>
              <div className="prose">
                <p>
                  Every counterparty — buyer, supplier, or intermediary — is vetted before we proceed with any transaction. Vetting is not a formality; it is a genuine assessment of legitimacy, capability, and commercial standing.
                </p>
                <p>
                  We ask direct questions and expect direct answers. We may request documentation including trade references, financial standing evidence, inspection certifications, or other verification materials.
                </p>
                <p>
                  We do not proceed with counterparties who cannot or will not provide sufficient information to complete our qualification process.
                </p>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                'Verification of company registration and legal status',
                'Trade reference checks from prior counterparties',
                'Assessment of commercial track record and experience',
                'Financial standing indicators where applicable',
                'Product quality and certification verification for suppliers',
              ].map((item) => (
                <div key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '1px', height: '100%', minHeight: '1.25rem', backgroundColor: 'var(--gold)', marginTop: '0.2rem', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.9rem', color: 'var(--gray-400)', lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sanctions and Jurisdiction */}
      <section className="section" style={{ backgroundColor: 'var(--charcoal-light)', borderTop: '1px solid var(--charcoal-muted)', borderBottom: '1px solid var(--charcoal-muted)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
            <div>
              <div style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold)', marginBottom: '1rem' }}>02 / 05</div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: 'var(--white)', marginBottom: '1.5rem' }}>Sanctions & Jurisdiction Awareness</h2>
              <div className="prose">
                <p>
                  We maintain awareness of applicable sanctions regimes, export controls, and trade restrictions. All transactions are assessed for compliance with relevant laws and regulations.
                </p>
                <p>
                  We do not engage in transactions involving restricted parties, sanctioned jurisdictions, or prohibited products under applicable trade laws.
                </p>
                <p>
                  Counterparties originating from or destined for high-risk jurisdictions are subject to enhanced scrutiny. We may decline transactions without detailed explanation where compliance concerns exist.
                </p>
              </div>
            </div>
            <div>
              <div className="card" style={{ marginBottom: '1.25rem' }}>
                <h3 style={{ fontSize: '1rem', color: 'var(--white)', marginBottom: '0.75rem' }}>Our Position</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--gray-400)', lineHeight: 1.7 }}>
                  Compliance is not optional. We do not cut corners on sanctions and jurisdiction screening, regardless of transaction size or commercial attractiveness.
                </p>
              </div>
              <div className="card">
                <h3 style={{ fontSize: '1rem', color: 'var(--white)', marginBottom: '0.75rem' }}>What This Means for You</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--gray-400)', lineHeight: 1.7 }}>
                  Expect to answer questions about your company, your counterparties, and the end destination of product. We ask these questions of everyone — it is not a sign of distrust, it is due diligence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* No Restricted Markets */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
            <div>
              <div style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold)', marginBottom: '1rem' }}>03 / 05</div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: 'var(--white)', marginBottom: '1.5rem' }}>No Engagement in Restricted Markets</h2>
              <div className="prose">
                <p>
                  We do not facilitate transactions into markets or jurisdictions that are subject to comprehensive sanctions, export controls, or trade restrictions under applicable international or U.S. law.
                </p>
                <p>
                  This is a firm boundary. We do not make exceptions and we do not provide rationale for declines related to compliance matters.
                </p>
              </div>
            </div>
            <div>
              <div className="card" style={{ borderColor: 'var(--gold)' }}>
                <h3 style={{ fontSize: '1rem', color: 'var(--white)', marginBottom: '0.75rem' }}>Commitment</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--gray-400)', lineHeight: 1.7 }}>
                  We are committed to conducting business with integrity and in full compliance with applicable laws. Our compliance framework is not a marketing statement — it is an operational requirement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Expectations */}
      <section className="section" style={{ backgroundColor: 'var(--charcoal-light)', borderTop: '1px solid var(--charcoal-muted)', borderBottom: '1px solid var(--charcoal-muted)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
            <div>
              <div style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold)', marginBottom: '1rem' }}>04 / 05</div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: 'var(--white)', marginBottom: '1.5rem' }}>Documentation Expectations</h2>
              <div className="prose">
                <p>
                  Commodity transactions require proper documentation. We expect counterparties to maintain accurate records and provide documentation as required for each transaction.
                </p>
                <p>
                  Typical documentation includes: contracts, inspection certificates, bills of lading, letters of credit or payment documentation, certificates of origin, and quality reports.
                </p>
                <p>
                  We do not proceed with transactions where documentation cannot be properly maintained and exchanged between parties.
                </p>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                'Signed commercial contracts',
                'Quality and quantity inspection certificates',
                'Bill of lading and shipping documentation',
                'Certificate of origin',
                'Payment documentation (L/C, T/T, or agreed terms)',
                'Any required export/import licenses or permits',
              ].map((item) => (
                <div key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '4px', height: '4px', backgroundColor: 'var(--gold)', marginTop: '0.45rem', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.875rem', color: 'var(--gray-400)', lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ethical Transaction Practices */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
            <div>
              <div style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold)', marginBottom: '1rem' }}>05 / 05</div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: 'var(--white)', marginBottom: '1.5rem' }}>Ethical Transaction Practices</h2>
              <div className="prose">
                <p>
                  We conduct business ethically and expect the same from all counterparties. Our approach to transactions is built on honesty, transparency, and mutual respect.
                </p>
                <p>
                  We do not engage in deceptive practices, misrepresentation of product, falsification of documentation, or any form of commercial fraud. We do not work with parties who do.
                </p>
                <p>
                  If something goes wrong in a transaction, we address it directly and professionally. We believe in resolving disputes through structured communication and, if necessary, established legal frameworks.
                </p>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                ['Honesty', 'We represent our capabilities and access accurately. We do not oversell.'],
                ['Transparency', 'We communicate openly about transaction status, issues, and expectations.'],
                ['Fairness', 'We structure deals that are reasonable for both parties. Exploitation damages long-term relationships.'],
                ['Accountability', 'We follow through on commitments. We expect counterparties to do the same.'],
              ].map(([title, desc]) => (
                <div key={title} className="card" style={{ padding: '1.25rem' }}>
                  <h3 style={{ fontSize: '0.9375rem', color: 'var(--white)', marginBottom: '0.375rem' }}>{title}</h3>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--gray-400)', lineHeight: 1.6, margin: 0 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm" style={{ backgroundColor: 'var(--charcoal-light)', borderTop: '1px solid var(--charcoal-muted)', textAlign: 'center' }}>
        <div className="container-narrow">
          <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: 'var(--white)', marginBottom: '1rem' }}>Have questions about our process?</h2>
          <p style={{ fontSize: '1rem', color: 'var(--gray-400)', lineHeight: 1.7, marginBottom: '2rem' }}>
            We are happy to discuss our approach before you submit a formal inquiry.
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
