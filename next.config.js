const isProd = process.env.NODE_ENV === 'production';
module.exports = {
  /* config options here */
  basePath: isProd ? '/hbp-frontend' : '',
  assetPrefix: './',
  env: {
    BASE_URL: isProd ? '/hbp-frontend' : ''
  }
}
