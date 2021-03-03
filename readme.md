#HBP Frontend Setup

##NEXT CONFIG

The next.config.js file includes a few params for config the web application.

- The basePath param define the path on which web application must be deployed. For example /community is the actual hippocampus hub path.

- The assetPrefix param define the base path on which web application search for public assets (images for example)

- The env variable needs to define all environment variable used on build time 
    - The env BASE_URL is equal to basePath for use in build
    - The env BACKEND_URL define the backend base url for api call (the url in which hbp-backend is deployed)
    - The env HODGKIN_HUXLEY_BASE_URL define the url for run Hodgkin-Huxley Neuron Builder