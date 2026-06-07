import type { NextConfig } from "next";

// import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
    output: "standalone",

    // Experimental features for Next.js 16.1
    experimental: {
        // Better tree-shaking for large icon/utility libraries
        optimizePackageImports: ["lucide-react", "date-fns", "recharts", "@base-ui/react"],
    },

    // Image optimization for external images (GitHub avatars)
    images: {
        remotePatterns: [
            { protocol: "https", hostname: "images.unsplash.com" },
            { protocol: "https", hostname: "api.dicebear.com" },
        ],
        formats: ["image/avif", "image/webp"],
    },

    // Enable compression
    compress: true,

    // Strict mode for better development practices
    reactStrictMode: true,

    // Security headers
    async headers() {
        return [
            {
                source: "/(.*)",
                headers: [
                    {
                        key: "X-DNS-Prefetch-Control",
                        value: "on",
                    },
                    {
                        key: "X-Frame-Options",
                        value: "SAMEORIGIN",
                    },
                    {
                        key: "X-Content-Type-Options",
                        value: "nosniff",
                    },
                    {
                        key: "Referrer-Policy",
                        value: "origin-when-cross-origin",
                    },
                    {
                        key: "Permissions-Policy",
                        value: "camera=(), microphone=(), geolocation=()",
                    },
                ],
            },
        ];
    },
};

// const withNextIntl = createNextIntlPlugin();
// export default withNextIntl(nextConfig);

export default nextConfig;
