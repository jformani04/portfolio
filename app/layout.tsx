import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Jason Formani — CS Student & Aspiring Data Engineer',
  description:
    'Portfolio of Jason Formani — Computer Science student at Ashland University building scalable data systems, mobile apps, and backend services.',
  keywords: ['Jason Formani', 'data engineer', 'software engineer', 'portfolio', 'React Native', 'Next.js'],
  openGraph: {
    title: 'Jason Formani — CS Student & Aspiring Data Engineer',
    description: 'Building scalable data pipelines, mobile apps, and backend systems.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-bg text-white antialiased">{children}</body>
    </html>
  );
}
