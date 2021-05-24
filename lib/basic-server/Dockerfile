FROM node:latest

WORKDIR /usr/app

COPY ./ ./

RUN apt-get update
RUN npm install

CMD node index.js
