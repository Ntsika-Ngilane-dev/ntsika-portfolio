// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // 👈 enables static HTML export for GitHub Pages
    images: {
        unoptimized: true, // GitHub Pages doesn’t support Next.js Image Optimization
    },
};

module.exports = nextConfig;