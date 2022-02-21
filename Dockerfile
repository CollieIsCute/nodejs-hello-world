FROM node:latest
WORKDIR /app/
RUN npm install npm@latest --global && \
	npm install mongodb mongod
COPY hello_world.js /app/