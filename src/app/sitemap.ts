import type { MetadataRoute } from 'next';

import { getBaseUrl } from '@/utils/helpers';

/**
 * Generates the sitemap metadata for search engines.
 * @returns {MetadataRoute.Sitemap} The sitemap configuration object.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${getBaseUrl()}/`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily',
      priority: 0.7,
    },
  ];
}
