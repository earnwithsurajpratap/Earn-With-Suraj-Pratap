import type {Metadata} from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'WebifyBoost - AI Viral Reels Bundle',
  description: 'Premium landing page for 2.5 Lakh+ AI Viral Reels bundle.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${outfit.variable}`}>
      <body className="font-sans antialiased text-gray-900 bg-white" suppressHydrationWarning>
        <Navbar />
        <main className="pt-20 min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
