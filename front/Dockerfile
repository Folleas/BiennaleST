# build stage
FROM node:lts-alpine as build-stage
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM nginx:stable-alpine
COPY --from=node /usr/src/app/dist /usr/share/nginx/html/
COPY ./nginx.conf /etc/nginx/conf.d/default.conf%