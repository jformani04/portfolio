import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Jason Formani — CS Student & Aspiring Data Engineer',
  description:
    'Portfolio of Jason Formani — Computer Science student at Ashland University building scalable data systems, mobile apps, and backend services.',
  keywords: [
    'Jason Formani',
    'data engineer',
    'software engineer',
    'React Native',
    'portfolio',
    'Next.js',
  ],
  openGraph: {
    title: 'Jason Formani — CS Student & Aspiring Data Engineer',
    description:
      'Building scalable data pipelines, mobile apps, and backend systems.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-bg text-white antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
