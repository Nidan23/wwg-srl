FROM node:18.1.0 as node

RUN mkdir -p /usr/src/wwg/wwg-frontend
WORKDIR /usr/src/wwg/wwg-frontend

COPY src /usr/src/wwg/wwg-frontend/src
COPY package.json /usr/src/wwg/wwg-frontend
COPY package-lock.json /usr/src/wwg/wwg-frontend
COPY tsconfig.json /usr/src/wwg/wwg-frontend
COPY tsconfig.app.json /usr/src/wwg/wwg-frontend
COPY tsconfig.spec.json /usr/src/wwg/wwg-frontend
COPY angular.json /usr/src/wwg/wwg-frontend
COPY karma.conf.js /usr/src/wwg/wwg-frontend
COPY .browserslistrc /usr/src/wwg/wwg-frontend

RUN npm install
RUN npm run build --prod

FROM nginx:latest
COPY --from=node /usr/src/wwg/wwg-frontend/dist/wwg-frontend /usr/share/nginx/html

EXPOSE 80
