FROM node:14
WORKDIR /server-ts
COPY package.json /server-ts
RUN npm install
COPY . /server-ts
RUN npm install -g typescript
RUN npm run build
CMD ["npm", "start"]