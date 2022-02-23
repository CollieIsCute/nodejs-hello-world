FROM node:latest
WORKDIR /app/
COPY hello_world.js package*.json ./
RUN npm install
COPY entry.sh ./
ENTRYPOINT ./entry.sh
