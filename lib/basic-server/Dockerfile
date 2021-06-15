FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
#bundle my app source to a container image
COPY . .
#noticed that index js listens to  3001 so
ENV PORT = 3001

EXPOSE 3001

CMD ["node", "index.js"]