
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    serverComponents: false,
  },

  basePath: process.env.NODE_ENV === 'production' ? '/test-cloud-castle' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/test-cloud-castle/' : '',
  
}

module.exports = nextConfig