FROM node:18.1.0

RUN mkdir -p /usr/src/wwg/wwg-backend

COPY src /usr/src/wwg/wwg-backend/src
COPY package.json /usr/src/wwg/wwg-backend
COPY package-lock.json /usr/src/wwg/wwg-backend
COPY tsconfig.json /usr/src/wwg/wwg-backend

WORKDIR /usr/src/wwg/wwg-backend

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]