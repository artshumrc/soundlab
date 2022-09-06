// main
import express from 'express';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import fs from 'fs';
import path from 'path';
import request from 'request';
import dotenv from 'dotenv';

// middleware
import bodyParser from 'body-parser';
import session from 'express-session';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import basicAuth from 'basicauth-middleware';

// db
import db, { dbSetup } from './db';
import Post from './models/Post';
import Postmeta from './models/Postmeta';

// dotenv
import dotenvSetup from './dotenv';

// authentication
import authSetup from './authentication';

// cors
import corsSetup from './cors';

// graphQL
import setupGraphql from './graphql';

// S3
import s3Setup from './s3';

// OAuth setup
import oauthSetup from './oauth';

// Routes
import authenticationRouter from './authentication/routes';


// environment variables setup
dotenvSetup();

const app = express();

app.set('port', (process.env.PORT || 3001));

app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false,
}));

// session:
app.use(session({
	secret: process.env.SESSION_SECRET || 'secret',
	resave: false,
	saveUninitialized: false,
}));

// db setup
dbSetup();

// CORS setup
corsSetup(app);

// Authentication setup
authSetup(app);

// GraphQl setup
setupGraphql(app);

// S3 setup
s3Setup(app);

// OAuth setup
oauthSetup(app);

// Routes
app.use('/auth', authenticationRouter);

// App server listen
const APP_PORT = process.env.APP_PORT || 3001;
const listen = () => {
	app.listen(APP_PORT, () => {
	  console.log(`App is now running on http://localhost:${APP_PORT}`)
	});
};

// Connect to db and then start express listen
db.authenticate()
	.then(() => {
		db.sync();

		listen();
	})
	.catch((e) => {
		console.error(`Could not authenticate to database ${process.env.DB_NAME}`);
		console.error(`${process.env.DB_HOST} ${process.env.DB_USER} ${process.env.DB_PASS}`);
		console.error(e);
		// Error: Client does not support authentication protocol requested by server; consider upgrading MySQL client
		// See: https://github.com/sequelize/cli/issues/751
		// Either upgrade Sequelize or downgrade MySQL or change the authentication method
	});
