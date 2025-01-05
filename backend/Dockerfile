# install node runtime
FROM node

WORKDIR /app

# copy files
COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 3000

# run application
CMD ["npm", "start"]