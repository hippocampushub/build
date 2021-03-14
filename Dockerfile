FROM node:15
RUN echo "Starting dockerfile..."
EXPOSE 8080
WORKDIR /usr/src/app

COPY package.json ./
RUN echo "Start installing dependencies..."
RUN npm install
RUN echo "Start copying file to directory"
COPY . .
RUN echo "Start build..."
RUN npm run build

RUN echo "Start next..."
RUN npm run start

