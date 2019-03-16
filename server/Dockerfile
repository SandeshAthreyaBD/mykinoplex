#from node 10
FROM node:10

#set working directory /app
WORKDIR /app

#copy package.json to workdir
COPY package*.json ./

#run command 
RUN npm install

#copy current directory to workdir
COPY . .

#run command 
CMD node server.js

#expose port 3001
EXPOSE 3001