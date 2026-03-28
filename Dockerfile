FROM node:22-alpine
COPY . /var/pokedex
WORKDIR /var/pokedex
RUN npm ci
RUN npm run build
ENTRYPOINT npm run preview -- --host 0.0.0.0

EXPOSE 4173
