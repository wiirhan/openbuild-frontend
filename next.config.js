/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
  // env: {
  //     NEXT_PUBLIC_ENV: 'PRODUCTION', //your next configs goes here
  // },
  output: 'standalone',
  reactStrictMode: true,
  swcMinify: true,
  staticPageGenerationTimeout: 180,
  experimental: {
    appDir: true,
    serverActions: true
  },
  env: {
    NEXT_PUBLIC_DOMAIN_ENV: process.env.NEXT_PUBLIC_DOMAIN_ENV,
  },
  images: {
    domains: [
      'openbuild.xyz',
      'assets.website-files.com',
      'images.unsplash.com',
      'img.foresightnews.pro',
      'statics.ambcrypto.com',
      's1.ax1x.com',
      'imgse.com',
      's3.us-west-1.amazonaws.com',
      'file-cdn.openbuild.xyz'
    ],
  },
  webpack: config => {
    config.externals.push('pino-pretty', 'lokijs', 'encoding')
    return config
  },
  compiler: {
    styledComponents: true,
  },
})
