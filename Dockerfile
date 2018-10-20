FROM node:8-wheezy

ENV NODE_ENV = development

RUN mkdir /app
COPY . /app/.
WORKDIR /app

# Open port 3000 for serving the webpage
EXPOSE 3001

RUN rm -rf node_modules
RUN rm -rf client/node_modules
RUN npm i -g yarn && yarn install

CMD ["yarn", "start-prod"]
