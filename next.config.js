const isProd = process.env.NODE_ENV === 'production';
module.exports = {
  /* config options here */
  basePath: isProd ? '/community' : '',
  assetPrefix: isProd ? '/community' : '/',
  env: {
    BASE_URL: isProd ? '/community' : '',
    BACKEND_URL: isProd ? 'https://facility-hub.cineca.it' : 'https://facility-hub.cineca.it',
    HODGKIN_HUXLEY_BASE_URL: 'https://hbp-bsp-hhnb.cineca.it:17895/hh-neuron-builder/hhf-comm',
    SUGGESTION_MIN_LENGTH: 1
  },
}
