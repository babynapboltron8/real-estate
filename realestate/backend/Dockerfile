FROM node:20-alpine
RUN mkdir /app
WORKDIR /app
COPY .env .
COPY package.json package-lock.json .
RUN npm install
COPY . .
EXPOSE 8080
CMD ["npm", "start"]