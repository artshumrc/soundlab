# FROM node:8-wheezy # Can't get updates to install mysql
# FROM node:8-jessie, stretch
# ^ Fails: EEXIST: file already exists, symlink '../lib/node_modules/yarn/bin/yarn.js' -> '/usr/local/bin/yarn'
# FROM node:12 # this seems to work?
FROM node:16


ENV NODE_ENV = development

RUN mkdir /app
COPY . /app/.
WORKDIR /app

# Open port 3000 for serving the webpage
EXPOSE 3001

RUN rm -rf node_modules
RUN rm -rf client/node_modules
# RUN npm i -g yarn && yarn install
RUN yarn install

# RUN babel -d ./build ./src
# RUN yarn run build

CMD ["yarn", "start-dev"]
