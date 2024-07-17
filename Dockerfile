FROM node:20-alpine

WORKDIR /app

COPY . .

RUN yarn 

RUN yarn build

EXPOSE 3000

ENTRYPOINT [ "yarn", "start" ]