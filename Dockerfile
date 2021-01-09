FROM node:14.15.4

WORKDIR /app
COPY dist/index.js  .

CMD [ "node", "index.js" ]