/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {
            bodySizeLimit: '2mb',
            //allowedOrigins: ['my-proxy.com', '*.my-proxy.com'],
        },
    },
    poweredByHeader: false,
}

module.exports = nextConfig
