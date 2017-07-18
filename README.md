# Orphe.us

The project consists of 2 applications:
1.	Client app (React / Redux) based on [`create-react-app`](https://github.com/facebookincubator/create-react-app)
2.	Server (Node.js / Express)

## Starting the project

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
	JWT_SECRET=secret
	```

	Environment variables for the *client* (*!IMPORTANT*: this should be set in the `client` folder):
	```sh
	// client/.env
	REACT_APP_GRAPHQL_SERVER=http://localhost:3001
	REACT_APP_GRAPHQL_URI=graphql
	REACT_APP_SERVER=http://localhost:3001
	REACT_APP_LOGIN_URI=auth/login
	REACT_APP_LOGIN_JWT_URI=auth/login-jwt
	REACT_APP_LOGOUT_URI=auth/logout
	REACT_APP_REGISTER_URI=auth/register
	REACT_APP_REGISTER_JWT_URI=auth/register
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

## Authentication

The project consists of two authentication strategies:
1.	Session based (local strategy - username / password)

	1. Login route: **/auth/login**.

		Pass `username` and `password` in the req body.

	2. Logout route: **/auth/logout**.

	3. Register route: **/auth/register**.

		Pass `username` and `password` in the req body.

	4. When using the `fetch` method in the client app, remember to set `credentials: 'include'`. Otherwise the request will not be authenticated.

	5. `apollo-client` has this value set in the `networkInterface`.

2.	JSON Web Tokens (JWT)

	1. Login route: **/auth/login-jwt**.

		Pass `username` and `password` in the req body.

		If username and password are correct, server will respond with a `token`.

	// TODO: logout - end token duration

	2. Register route: **/auth/register-jwt**.

		Pass `username` and `password` in the req body.

		If username and password are correct, server will respond with a `token`.

	3. When using the `fetch` method in the client app, remember to set `authorization' header to the token value`. Otherwise the request will not be authenticated.

	4. `apollo-client` has a middleware attached to the `networkInterface`, which reads the token value from the `localStorage`.

Use methods from `client/src/lib/auth' to login, logout or register.
