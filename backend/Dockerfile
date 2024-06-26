FROM node:20.15.0

RUN npm install -g npm@latest

ADD package.json .
ADD index.js .
COPY . .

RUN npm install

EXPOSE 8080
CMD ["node", "index.js"]