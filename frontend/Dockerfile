# install node runtime
FROM node

WORKDIR /app

# copy files
COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 8080

# run application
CMD ["npm", "run", "serve"]