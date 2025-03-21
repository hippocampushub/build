const isProd = process.env.NODE_ENV === 'production';
module.exports = {
  /* config options here */
  basePath: isProd ? '/build' : '',
  assetPrefix: isProd ? '/build' : '/',
  env: {
    BASE_URL: isProd ? '/build' : '',
    BACKEND_URL: isProd ? 'https://hh-build.ebrains-italy.eu' : 'https://hh-build.ebrains-italy.eu',
    HODGKIN_HUXLEY_BASE_URL: 'https://hhnb.ebrains-italy.eu/hh-neuron-builder/',
    NEXT_PUBLIC_FEEDBACK_URL: 'https://feedback-proxy-bsp-epfl.apps.hbp.eu',
    SUGGESTION_MIN_LENGTH: 1
  },
}
