FROM node:lts-alpine
RUN npm install -g serve
WORKDIR /todoList-front
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD ["serve", "docs"]