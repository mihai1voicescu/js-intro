# FIXME
FROM node:latest
WORKDIR /usr/src/basic-server
COPY package*.json index.js ./
RUN npm install
# RUN export DOCKER_BUILDKIT=0
# RUN export COMPOSE_DOCKER_CLI_BUILD=0
RUN apt-get install curl
EXPOSE 3001
CMD ["node", "index.js"]
