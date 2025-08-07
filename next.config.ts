const isProd = process.env.NODE_ENV === 'production';
module.exports = {
  output: 'export',
  basePath: isProd ? '/test-cloud-castle' : '',
  images: {
    unoptimized: true 
  }
};