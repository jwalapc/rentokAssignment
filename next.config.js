//next.config.js
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/:subdomain/:path*',
        destination: '/app/:path*',
      },
    ];
  },
};

module.exports = nextConfig;