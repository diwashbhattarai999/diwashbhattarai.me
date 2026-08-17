import type { NextConfig } from "next";

// import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
    // Enable compression
    compress: true,

    experimental: {
        // Inline the Tailwind stylesheet so first paint is not blocked on a CSS request.
        inlineCss: true,
        optimizePackageImports: ["lucide-react", "framer-motion"],
    },

    async headers() {
        return [
            {
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
                source: "/(.*)",
            },
        ];
    },

    // Image optimization for external images (GitHub avatars)
    images: {
        formats: ["image/avif", "image/webp"],
        remotePatterns: [
            { hostname: "images.unsplash.com", protocol: "https" },
            { hostname: "api.dicebear.com", protocol: "https" },
        ],
    },
    output: "standalone",

    // Strict mode for better development practices
    reactStrictMode: true,

    // Security headers
    async redirects() {
        return [
            {
                destination: "/",
                permanent: true,
                source: "/contact",
            },
        ];
    },
};

// const withNextIntl = createNextIntlPlugin();
// export default withNextIntl(nextConfig);

export default nextConfig;
