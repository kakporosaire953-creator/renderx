import './globals.css';
import type { Metadata } from 'next';
import { Inter, Sora, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const sora = Sora({ subsets: ['latin'], variable: '--font-display', display: 'swap', weight: ['400','500','600','700','800'] });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' });

const siteUrl = 'https://renderx.ai';
const description = 'RenderX transforme une simple description en vidéo MP4 professionnelle grâce à HyperFrames, son moteur de génération par IA. La plateforme de génération vidéo IA pour les créateurs, agences et entreprises.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'RenderX — Génération vidéo IA par HyperFrames', template: '%s · RenderX' },
  description,
  applicationName: 'RenderX',
  keywords: ['RenderX','HyperFrames','génération vidéo IA','vidéo IA','texte vers vidéo','AI video generator','SaaS vidéo','GeniusPay'],
  authors: [{ name: 'RenderX' }],
  creator: 'RenderX',
  publisher: 'RenderX',
  openGraph: { type: 'website', locale: 'fr_FR', url: siteUrl, siteName: 'RenderX', title: 'RenderX — Génération vidéo IA par HyperFrames', description, images: [{ url: '/og.png', width: 1200, height: 630, alt: 'RenderX' }] },
  twitter: { card: 'summary_large_image', title: 'RenderX — Génération vidéo IA par HyperFrames', description, images: ['/og.png'], creator: '@renderx' },
  icons: { icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }], apple: '/favicon.svg' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: siteUrl },
  category: 'technology',
};

export const viewport = { themeColor: '#050505', width: 'device-width', initialScale: 1 } as const;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.variable} ${sora.variable} ${mono.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <Toaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
