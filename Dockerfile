############################################################
# Dockerfile to build node (https://hub.docker.com/_/node/)
############################################################
FROM node:6.9.4-onbuild

# File Author / Maintainer
MAINTAINER Jordi Targa <jtargui@gmail.com>

################## BEGIN INSTALLATION ######################
RUN apt-get update && \
      apt-get -y install sudo

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY /cms /usr/src/app
#COPY /cms/node_modules-keystone-node_modules-bson-ext-index.js /usr/src/app/node_modules/bson/ext/index.js

##################### INSTALLATION END #####################

EXPOSE 8080
CMD [ "npm", "start" ]
#CMD [ "npm", "test" ]
