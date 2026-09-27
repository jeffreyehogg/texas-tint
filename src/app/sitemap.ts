import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://texastint.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://texastint.com/commercial',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://texastint.com/residential',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://texastint.com/automotive',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://texastint.com/services',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://texastint.com/quote',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://texastint.com/contact',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
  ]
}