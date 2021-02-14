const isProd = process.env.NODE_ENV === 'production';
module.exports = {
  /* config options here */
  basePath: isProd ? '/hbp-frontend' : '',
  assetPrefix: isProd ? '/hbp-frontend' : '/',
  env: {
    BASE_URL: isProd ? '/hbp-frontend' : '',
    BACKEND_URL: isProd ? 'https://facility-hub.cineca.it' : 'http://localhost:5000'
  }
}
