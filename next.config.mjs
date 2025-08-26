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
    output: 'export', // static export
    basePath: '/ntsika-portfolio', // ensures correct routing on GitHub Pages
    assetPrefix: '/ntsika-portfolio/', // ensures assets load correctly
};

export default nextConfig;