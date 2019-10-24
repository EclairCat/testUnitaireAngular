# This defines our starting point
FROM node:10

RUN mkdir /usr/src/app 

WORKDIR /usr/src/app

COPY . .

RUN npm install 

RUN npm run build --prod

EXPOSE 4200

CMD ["npm", "start"]
