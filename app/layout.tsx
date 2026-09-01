import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bocian Gold – Złota Łąka | Naturalne siano łąkowe',
  description: 'Naturalne siano łąkowe premium z kujawskich łąk. Suszone i ręcznie pakowane dla królików oraz małych roślinożerców.',
  openGraph: {
    title: 'Bocian Gold – Złota Łąka',
    description: 'Naturalne siano łąkowe premium z kujawskich łąk.',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Bocian Gold – Złota Łąka' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bocian Gold – Złota Łąka',
    description: 'Naturalne siano łąkowe premium z kujawskich łąk.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pl"><body>{children}</body></html>;
}
