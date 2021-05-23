FROM node:latest

EXPOSE 3001

WORKDIR /usr/basic_server

COPY * /usr/basic_server/

RUN npm install

CMD ["cd", "/usr/basic_server"]
CMD ["node", "index.js"]