FROM node:alpine

WORKDIR /usr/src/App
COPY package.json .
RUN npm install --force
Expose 8080
CMD ["npm","start"]

