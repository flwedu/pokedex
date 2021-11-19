FROM node:latest
COPY . /var/pokedex
WORKDIR /var/pokedex
RUN yarn install
ENTRYPOINT yarn serve-dev

EXPOSE 3000