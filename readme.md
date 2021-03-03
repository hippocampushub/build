#HBP Frontend Setup

##NEXT CONFIG

The next.config.js file includes a few params for config the web application.

- The basePath param define the path on which web application must be deployed. For example /community is the actual hippocampus hub path.

- The assetPrefix param define the base path on which web application search for public assets (images for example)

- The env variable needs to define all environment variable used on build time 
    - The env BASE_URL is equal to basePath for use in build
    - The env BACKEND_URL define the backend base url for api call (the url in which hbp-backend is deployed)
    - The env HODGKIN_HUXLEY_BASE_URL define the url for run Hodgkin-Huxley Neuron Builder
    
##BUILD

After set correct variable values in next.config.js you can run the npm run build command.
The build command create a build folder with a static version of the compiled application.

You can deploy the files on this folder inside a folder which respect the path that you use in the basePath variable in next.config.js.

##RUN (TEST)

You can also run the web application in a local environment using the npm run start command.
It will compile the application and run a local development web server on localhost:3000 for let you view the application.
