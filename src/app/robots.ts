import type { MetadataRoute } from 'next';

import { getBaseUrl } from '@/utils/helpers';

/**
 * Generates the robots.txt metadata for search engine crawlers.
 * @returns {MetadataRoute.Robots} The robots.txt configuration object.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${getBaseUrl()}/sitemap.xml`,
  };
}
