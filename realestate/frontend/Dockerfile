FROM node:20-alpine as builder
RUN mkdir /app
WORKDIR /app
COPY package.json package-lock.json .
RUN npm install
COPY . .
RUN npm run build

FROM httpd:alpine3.18
COPY --from=builder /app/dist/ /usr/local/apache2/htdocs/