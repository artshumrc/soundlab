FROM node:6.10.2

RUN mkdir /app
COPY . /app/.
RUN cd /app \
	&& yarn install

CMD ["nodemon", "server", "--exec", "babel-node"]
