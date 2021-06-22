const isProd = process.env.NODE_ENV === 'production';
module.exports = {
  /* config options here */
  basePath: isProd ? '/build' : '',
  assetPrefix: isProd ? '/build' : '/',
  env: {
    BASE_URL: isProd ? '/build' : '',
    BACKEND_URL: isProd ? 'https://facility-hub.cineca.it' : 'https://facility-hub.cineca.it',
    HODGKIN_HUXLEY_BASE_URL: 'https://hbp-bsp-hhnb.cineca.it /hh-neuron-builder',
    SUGGESTION_MIN_LENGTH: 1
  },
}
