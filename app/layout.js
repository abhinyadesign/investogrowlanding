import { Inter } from 'next/font/google';
import './globals.css';
import { ModalProvider } from '@/components/ModalContext';
import SmoothScroll from '@/components/SmoothScroll';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: 'GYGY Mentis | Premium Commercial Investment – Sector 140, Noida | InvestoGrow',
  description:
    'Invest in GYGY Mentis – a premium commercial hub in Sector 140, Noida Expressway. Office spaces, retail shops & restaurant spaces starting from ₹50 Lakh. Assured 12% rental returns. RERA: UPRERAPRJ251909.',
  keywords:
    'GYGY Mentis, commercial property Noida, Sector 140 Noida, office space investment, retail shop Noida, assured returns commercial property, InvestoGrow',
  openGraph: {
    title: 'GYGY Mentis | Premium Commercial Investment – Sector 140, Noida',
    description:
      'Office spaces, retail shops & restaurant spaces starting from ₹50 Lakh. 12% assured rental returns. Sector 140, Noida Expressway.',
    url: 'https://investogrow.in',
    siteName: 'InvestoGrow',
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-[#060709] text-white antialiased font-[family-name:var(--font-inter)]" suppressHydrationWarning>
        <SmoothScroll>
          <ModalProvider>{children}</ModalProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
