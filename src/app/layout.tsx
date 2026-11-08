import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import { site } from '@/data/site';

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: 'Samarth Kandekar | Founder & CEO, VelCura Health',
  description: 'Samarth Kandekar, Founder & CEO of VelCura Health. Building early-stage healthcare technology around patient intake and clinician-reviewed workflows.',
  alternates: { canonical: '/' },
  openGraph: { type: 'website', url: '/', title: 'Samarth Kandekar | Founder & CEO, VelCura Health', description: 'Founder & CEO building early-stage healthcare technology around patient intake and clinician-reviewed workflows.', siteName: 'Samarth Kandekar', images: ['/images/samarth-kandekar-portrait.webp'] },
  twitter: { card: 'summary_large_image', title: 'Samarth Kandekar | Founder & CEO, VelCura Health', description: 'Founder & CEO building early-stage healthcare technology around patient intake and clinician-reviewed workflows.', images: ['/images/samarth-kandekar-portrait.webp'] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const person = { '@context': 'https://schema.org', '@type': 'Person', name: site.name, url: site.domain, email: site.email, jobTitle: 'Founder & CEO', description: 'Founder & CEO building technology ventures at the intersection of artificial intelligence, healthcare and business.', address: { '@type': 'PostalAddress', addressLocality: 'Nagpur', addressCountry: 'IN' }, knowsAbout: ['Artificial intelligence', 'Healthcare technology', 'Venture building', 'Product and business strategy', 'Market development'], sameAs: site.socials.filter(s => s.published && s.href.startsWith('http')).map(s => s.href), worksFor: [{ '@type': 'Organization', name: 'VelCura Health' }, { '@type': 'Organization', name: 'Adflow OS' }] };
  return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />{children}<Analytics /></body></html>;
}
