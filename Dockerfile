### STAGE 1: Build
FROM node:14-alpine AS build
WORKDIR /usr/src
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

### STAGE 2: Run
FROM nginx:1.21.3-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/dist/SleepTool /usr/share/nginx/html