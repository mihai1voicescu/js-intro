FROM node:latest

WORKDIR /usr/src/app

RUN apt-get update -y 

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT = 3001

EXPOSE 3001

CMD ["node", "index.js"]