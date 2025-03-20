import { MetadataRoute } from 'next';

/**
 * The `manifest` function is used for Progessive Web App (PWA) metadata
 * @returns The metadata object
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Diwash Bhattarai - Portfolio',
    short_name: 'Diwash Bhattarai',
    description:
      'The personal portfolio of Diwash Bhattarai, showcasing projects, skills, and experience.',
    start_url: '/',
    display: 'standalone',
    background_color: '#25252e',
    theme_color: '#5e608f',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
