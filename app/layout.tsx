import type { Metadata, Viewport } from 'next';
import { Inter_Tight, Space_Grotesk } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/navbar';

const sans = Space_Grotesk({ subsets: ['latin'], variable: '--font-sg', display: 'swap' });
const logo = Inter_Tight({ subsets: ['latin'], weight: '700', variable: '--font-it', display: 'swap' });

const TITLE = 'Stackra — Sell online. Keep WhatsApp at the center.';
const DESCRIPTION =
  'Create a professional online storefront for your business, manage your products, and keep WhatsApp at the center of customer conversations.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: { type: 'website', siteName: 'Stackra', title: TITLE, description: DESCRIPTION },
  twitter: { card: 'summary', title: TITLE, description: DESCRIPTION },
};

export const viewport: Viewport = {
  themeColor: '#050506',
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`dark ${sans.variable} ${logo.variable}`}>
      <body className='antialiased'>
        <a
          href='#main'
          className='sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground'
        >
          Skip to content
        </a>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
