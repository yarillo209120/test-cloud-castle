
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  experimental: {
    serverComponents: false,
    optimizeFonts: false,
    appDir: false
  },
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        { key: 'X-Content-Type-Options', value: 'nosniff' }
      ]
    }
  ],

  basePath: process.env.NODE_ENV === 'production' ? '/test-cloud-castle' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/test-cloud-castle/' : '',
  
}

module.exports = nextConfig