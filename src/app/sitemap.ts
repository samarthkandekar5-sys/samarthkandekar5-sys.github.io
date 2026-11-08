import type { MetadataRoute } from 'next';
import { site } from '@/data/site';
export default function sitemap(): MetadataRoute.Sitemap { return [{ url: site.domain, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 }, { url: `${site.domain}${site.mediaKitPath}`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 }]; }
