/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    poweredByHeader: false,
    reactStrictMode: true,
    swcMinify: true,
    images: { unoptimized: true },
  webpack(config) {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|avi)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/videos/',
          outputPath: 'static/videos/',
          name: '[name].[ext]',
        },
      },
    });

    return config;
  },
  async redirects() {
    return [
      {
        source: '/(.*)',
        has: [
          {
            type: 'host',
            value: 'www.soapayuda.cl',
          },
        ],
        destination: 'https://soapayuda.cl/:path*',
        permanent: true, // This makes it a 301 redirect from www to non-www
      },
      {
        source: '/(.*)',
        has: [
          {
            type: 'host',
            value: 'soapayuda.cl',
          },
        ],
        destination: 'https://www.soapayuda.cl/:path*',
        permanent: true, // Swap this based on your preference
      },
    ];
  },
};

module.exports = nextConfig;
