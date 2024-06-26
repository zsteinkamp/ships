FROM node:18 AS dev

WORKDIR /app
COPY package* .
RUN npm install

CMD ["npm", "run", "dev"]

FROM dev AS prod
ENV NODE_ENV=production
COPY . .
RUN npm run build

CMD [ "npm", "run", "start" ]
