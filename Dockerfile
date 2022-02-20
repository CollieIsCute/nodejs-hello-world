FROM node:latest
WORKDIR /app/
RUN npm install npm@latest --global
RUN npm install mongodb mongod
COPY hello_world.js /app/