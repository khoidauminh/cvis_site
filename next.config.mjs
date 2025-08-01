/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    basePath: process.env.PAGES_BASE_PATH,
    output: "export",
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
