import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://attaincommodities.com'),
  title: {
    template: '%s | Attain Commodities',
    default: 'Attain Commodities — Global Commodities Trading',
  },
  description: 'Attain Commodities facilitates global commodity transactions across fertilizer, energy, and industrial markets. A DBA of Attain Brands, LLC.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://attaincommodities.com',
    siteName: 'Attain Commodities',
    title: 'Attain Commodities — Global Commodities Trading',
    description: 'Facilitating global commodity transactions with integrity and precision across fertilizer, energy, and industrial markets.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Attain Commodities — Global Commodities Trading',
    description: 'Facilitating global commodity transactions with integrity and precision.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-full flex flex-col" style={{ backgroundColor: 'var(--charcoal)', color: 'var(--white)' }}>
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
