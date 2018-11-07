# build environment
FROM node:9.6.1 as builder
# set working directory
RUN mkdir /app
COPY . /app/.
WORKDIR /app
# install and cache app dependencies
RUN yarn
# build
RUN yarn build


# production environment
FROM nginx:1.13.9-alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]








