import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Trust & Compliance',
  description: 'Attain Commodities compliance framework: counterparty vetting, sanctions compliance, and transaction integrity standards.',
  openGraph: {
    title: 'Trust & Compliance | Attain Commodities',
    description: 'Counterparty vetting, sanctions compliance, and transaction integrity standards.',
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
          alt="Compliance and transaction integrity"
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
              Compliance is an operational requirement.
            </h1>
            <p style={{ fontSize: '1.0625rem', color: 'var(--gray-200)', lineHeight: 1.7 }}>
              We maintain a structured compliance framework to protect our counterparties and the integrity of every transaction we facilitate. This is not optional.
            </p>
          </div>
        </div>
      </section>

      {/* Sanctions Compliance */}
      <section className="section" style={{ borderTop: '1px solid var(--charcoal-muted)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
            <div>
              <div style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold)', marginBottom: '1rem' }}>01 / 04</div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: 'var(--white)', marginBottom: '1.5rem' }}>Sanctions Compliance</h2>
              <div className="prose">
                <p>
                  Attain Commodities does not engage in any transaction involving parties, products, or jurisdictions subject to sanctions under applicable U.S. or international law. This includes but is not limited to OFAC sanctions, BIS export controls, and analogous restrictions.
                </p>
                <p>
                  All counterparties are screened against applicable sanctions lists prior to engagement. We do not make exceptions. We do not provide detailed explanation for declines related to sanctions compliance.
                </p>
                <p>
                  This firm boundary exists to protect all parties and the integrity of the transactions we facilitate.
                </p>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                'All counterparties screened against OFAC sanctions lists',
                'No engagement with sanctioned jurisdictions or parties',
                'No exceptions regardless of transaction size or commercial attractiveness',
                'Declines related to compliance will not receive detailed explanation',
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

      {/* Counterparty Vetting */}
      <section className="section" style={{ backgroundColor: 'var(--charcoal-light)', borderTop: '1px solid var(--charcoal-muted)', borderBottom: '1px solid var(--charcoal-muted)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
            <div>
              <div style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold)', marginBottom: '1rem' }}>02 / 04</div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: 'var(--white)', marginBottom: '1.5rem' }}>Counterparty Vetting</h2>
              <div className="prose">
                <p>
                  Every counterparty — buyer, supplier, or intermediary — is vetted before we proceed with any transaction. Vetting is a genuine assessment, not a formality.
                </p>
                <p>
                  We ask direct questions and expect direct answers. We may request documentation including trade references, financial standing evidence, inspection certifications, or other verification materials.
                </p>
                <p>
                  We do not proceed with counterparties who cannot or will not provide sufficient information to complete our qualification process.
                </p>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                'Verification of company registration and legal status',
                'Trade reference checks from prior counterparties',
                'Assessment of commercial track record and experience',
                'Financial standing indicators where applicable',
                'Product quality and certification verification for suppliers',
              ].map((item) => (
                <div key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '4px', height: '4px', backgroundColor: 'var(--gold)', marginTop: '0.45rem', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.9rem', color: 'var(--gray-400)', lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* No Restricted Markets */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
            <div>
              <div style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold)', marginBottom: '1rem' }}>03 / 04</div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: 'var(--white)', marginBottom: '1.5rem' }}>Restricted Markets</h2>
              <div className="prose">
                <p>
                  We do not facilitate transactions into markets or jurisdictions subject to comprehensive sanctions, export controls, or trade restrictions under applicable international or U.S. law.
                </p>
                <p>
                  This is a firm boundary. We do not make exceptions and we do not provide rationale for declines related to compliance matters.
                </p>
                <p>
                  Counterparties originating from or destined for high-risk jurisdictions are subject to enhanced scrutiny.
                </p>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                ['Compliance is non-negotiable', 'We do not cut corners on sanctions and jurisdiction screening regardless of commercial attractiveness.'],
                ['We ask direct questions', 'Expect to answer questions about your company, counterparties, and end destination. This is standard due diligence.'],
                ['Declines are not explained', 'We do not provide detailed rationale for compliance-related declines. This protects all parties.'],
              ].map(([title, desc]) => (
                <div key={title} className="card">
                  <h3 style={{ fontSize: '0.9375rem', color: 'var(--white)', marginBottom: '0.5rem' }}>{title}</h3>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--gray-400)', lineHeight: 1.65, margin: 0 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Standards */}
      <section className="section" style={{ backgroundColor: 'var(--charcoal-light)', borderTop: '1px solid var(--charcoal-muted)', borderBottom: '1px solid var(--charcoal-muted)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
            <div>
              <div style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold)', marginBottom: '1rem' }}>04 / 04</div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: 'var(--white)', marginBottom: '1.5rem' }}>Documentation Standards</h2>
              <div className="prose">
                <p>
                  Commodity transactions require proper documentation. We expect counterparties to maintain accurate records and provide documentation as required for each transaction.
                </p>
                <p>
                  Buyers and suppliers should have the following ready before engaging:
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
                'Export/import licenses or permits where applicable',
                'Proof of funds or bank confirmation',
                'LOI or mandated purchase authorization',
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

      {/* CTA */}
      <section className="section-sm" style={{ textAlign: 'center' }}>
        <div className="container-narrow">
          <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: 'var(--white)', marginBottom: '1rem' }}>Questions about our compliance process?</h2>
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
