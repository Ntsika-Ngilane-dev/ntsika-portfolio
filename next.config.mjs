/** @type {import('next').NextConfig} */
const nextConfig = {
        eslint: {
            ignoreDuringBuilds: true,
        },
        typescript: {
            ignoreBuildErrors: true,
        },
        images: {
            unoptimized: true,
        },
    }
    // next.config.js
    /** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // 👈 enables static HTML export for GitHub Pages
    images: {
        unoptimized: true, // GitHub Pages doesn’t support Next.js Image Optimization
    },
};

module.exports = nextConfig;
export default nextConfig