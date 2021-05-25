# start from a base image
FROM node:latest

# run commands
RUN apt-get update

WORKDIR /lib/basic_server

EXPOSE 3001

# pull all deps registered in the package.json
COPY package.json package.json

RUN npm install

COPY . .

# setup the database with the sql script
COPY setup.sql /docker-entrypoint-initdb.d/setup.sql

# final comand to run
CMD [ "node", "index.js" ]

# from bash, path: /lib/basic-server/
# docker build -t basic-server-app .
# docker run  -p 3001:3001 --ip=0.0.0.0 basic-server-app

