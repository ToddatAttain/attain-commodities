'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/process', label: 'Process' },
  { href: '/current-focus', label: 'Current Focus' },
  { href: '/trust-compliance', label: 'Trust & Compliance' },
  { href: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <header style={{ backgroundColor: 'var(--charcoal)', borderBottom: '1px solid var(--charcoal-muted)' }}>
      <nav className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '4.5rem' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img src="/logo.png" alt="Attain Commodities" style={{ height: '2.5rem', width: 'auto' }} />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex" style={{ alignItems: 'center', gap: '2.5rem' }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${pathname === link.href ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile nav — simplified */}
        <Link href="/contact?type=buyer" className="btn-gold hidden md:inline-flex" style={{ padding: '0.5rem 1.25rem', fontSize: '0.75rem' }}>
          Get in Touch
        </Link>
      </nav>
    </header>
  );
}
