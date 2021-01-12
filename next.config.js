const isProd = process.env.NODE_ENV === 'production';
module.exports = {
  /* config options here */
  basePath: isProd ? '/hbp-frontend' : '',
  assetPrefix: './',
  env: {
    BASE_URL: isProd ? '/hbp-frontend' : '',
    BACKEND_URL: isProd ? 'http://80.211.80.122:5000': 'http://localhost:5000'
  }
}
