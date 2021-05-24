FROM node:latest
ENV NODE_ENV=production

WORKDIR ../app

COPY package.json package.json

RUN npm install 

COPY index.js index.js
EXPOSE  3001
CMD [ "node", "index.js" ]