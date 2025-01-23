export {};

module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/api/:path*', // Proxy API routes if needed
      },
    ];
  },
  images: {
    domains: ['cdn.sanity.io'], // Add the domain for Sanity images
  },
  env: {
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY, // Pass the Clerk secret key from .env.local
  },
};
