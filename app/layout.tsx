import type { Metadata } from 'next';
import { Cormorant_Garamond, Libre_Franklin, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const libreFranklin = Libre_Franklin({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-franklin',
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-ibm-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'IYPT Chile — Clasificatorio Nacional 2026',
  description:
    "El IYPT Chile es el proceso de selección nacional para el International Young Physicists' Tournament 2027. Un torneo de investigación, experimentación y debate científico para equipos de enseñanza media.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${libreFranklin.variable} ${ibmPlexMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
