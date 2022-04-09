FROM node:16.14.2-alpine3.14
WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .
RUN yarn install --production --pure-lockfile --silent
RUN mkdir dist
COPY dist dist

EXPOSE 3000

CMD node dist/main.js
