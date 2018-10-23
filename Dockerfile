# base image
FROM node:9.6.1

# set working directory
RUN mkdir /app
COPY . /app/.
WORKDIR /app

# install and cache app dependencies
RUN yarn

# start app
CMD ["yarn", "start"]
