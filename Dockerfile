FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle
COPY . .

EXPOSE 8080
CMD [ "node", "server.js" ]
