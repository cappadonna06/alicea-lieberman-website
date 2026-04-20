import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/home', destination: '/', permanent: true },
      { source: '/home.html', destination: '/', permanent: true },
      { source: '/cv.html', destination: '/cv', permanent: true },
      { source: '/publications.html', destination: '/publications', permanent: true },
      { source: '/research.html', destination: '/research', permanent: true },
      { source: '/contact.html', destination: '/contact-me', permanent: true }
    ];
  }
};

export default nextConfig;
