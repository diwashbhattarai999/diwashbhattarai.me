import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

import path from 'path';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  webpack: config => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  },
};

export default withNextIntl(nextConfig);
