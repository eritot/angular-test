FROM node:16-alpine as build

WORKDIR /usr/local/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 4200

CMD ["npm", "start"]