#from node 10
FROM node:10

#set working directory /app
WORKDIR /app

#copy package*.json to workdir
COPY package*.json ./

#install npm
RUN npm install

#copy all files to workdir
COPY . .

#build production code
CMD ["npm","run build"]

#from nginx 1.15
FROM nginx:1.15

#copy prod build folder to nginx
COPY build/ /usr/share/nginx/html

#copy custom conf to nginx conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

#set port to 80
EXPOSE 80

#run nginx
CMD ["nginx","-g","daemon off;"]
