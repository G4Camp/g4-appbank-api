FROM node:14-alpine3.11

WORKDIR /home/node/app

RUN apk add --no-cache bash

RUN npm i -g @nestjs/cli@8

USER node

COPY . .

EXPOSE $PORT

ENTRYPOINT ["bash", "./.docker/entrypoint.sh"]