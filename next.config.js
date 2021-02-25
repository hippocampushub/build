const isProd = process.env.NODE_ENV === 'production';
module.exports = {
  /* config options here */
  basePath: isProd ? '/community' : '',
  assetPrefix: isProd ? '/community' : '/',
  env: {
    BASE_URL: isProd ? '/community' : '',
    BACKEND_URL: isProd ? 'https://facility-hub.cineca.it' : 'http://localhost:5000'
  },
  suggestionMinLength: 1
}
