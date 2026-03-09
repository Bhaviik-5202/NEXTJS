const nextConfig = {
  reactStrictMode: true,

  // Image optimization settings
  images: {
    remotePatterns: [
      // Allow images from mockapi.io
      {
        protocol: 'https',
        hostname: '6881dcdf66a7eb81224c58b1.mockapi.io',
        port: '',
        pathname: '/**',
      },
      // Allow images from jsdelivr CDN (faker-js)
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
        port: '',
        pathname: '/gh/faker-js/assets-person-portrait/**',
      },
      // Allow images from GitHub avatars
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },

  async headers() {
    return [
      {
        source: '/LAB_24/:path*',
        headers: [
          {
            key: 'x-lab',
            value: 'lab-24',
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: '/LAB_24/configuration',
        destination: '/LAB_24/config',
        permanent: false,
      },
    ];
  },

};

export default nextConfig;
