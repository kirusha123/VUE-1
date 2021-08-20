FROM node:lts-alpine
WORKDIR /todoList-front
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]