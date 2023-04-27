FROM node:alpine

WORKDIR /usr/src/App
COPY package.json .
RUN npm install --force
COPY . .
EXPOSE 8080
CMD ["npm","start"]

