# Orphe.us

The project consists of 2 applications:
1.	Client app (React / Redux) based on [`create-react-app`](https://github.com/facebookincubator/create-react-app)
2.	Server (Node.js / Express)

To start the project you need to follow these steps:
1.	Clone repository

2.	Change catalog:

	```sh
	cd orpheus
	```

3.	Run npm install:

	```sh
	npm install
	```

4.	Setup environment variables:

	Environment variables for the *server*:
	```sh
	// .env
	DB_HOST=localhost
	DB_PORT=27017
	DB_NAME=orpheus
	CLIENT_SERVER=http://localhost:3000
	```

	Environment variables for the *client* (*!IMPORTANT*: this should be set in the `client` folder):
	```sh
	// client/.env
	REACT_APP_GRAPHQL_SERVER=http://localhost:3001
	REACT_APP_GRAPHQL_URI=graphql
	REACT_APP_AUTH_SERVER=http://localhost:3001
	REACT_APP_LOGIN_URI=auth/login
	REACT_APP_LOGOUT_URI=auth/logout
	REACT_APP_REGISTER_URI=auth/register
	```

5.	Generate mock data using the seed script:

	If your database is not clear use this script to remove all elements:
	```sh
	npm run db-clear
	```

	To generate the new documents, run:
	```sh
	npm run db-seed
	```

6.	Use one of the following npm scripts to start the application:

	| shell script | Description |
	| ------ | ------ |
	| `npm start` | Starts the server and the client application |
	| `npm run server` | Starts the server application |
	| `npm run client` | Starts the client application|
