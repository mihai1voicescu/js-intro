# FIXME
FROM node:latest

EXPOSE 3001

WORKDIR /usr/basic-server
COPY ./ ./

RUN apt-get update
RUN npm install

CMD [ "node", "index.js" ]


