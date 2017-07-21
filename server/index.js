// main
import express from 'express';
import fs from 'fs';
import path from 'path';

// middleware
import bodyParser from 'body-parser';
import session from 'express-session';
import logger from 'morgan';
import cookieParser from 'cookie-parser';

// dotenv
import dotenvSetup from './dotenv';

// mongoDB
import dbSetup, { storeSetup } from './mongoose';

// authentication
import authSetup from './authentication';

// cors
import corsSetup from './cors';

// graphQL
import setupGraphql from './graphql';

// Routes
import authenticationRouter from './routes/authentication';
import playgroundRouter from './routes/playground';

// environment variables setup
dotenvSetup();

const app = express();

const db = dbSetup();

app.set('port', (process.env.PORT || 3001));

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// session:
app.use(session({
	secret: process.env.SESSION_SECRET || 'secret',
	resave: false,
	saveUninitialized: false,
	store: storeSetup(session),
}));


// CORS setup
corsSetup(app);

// Authentication setup
authSetup(app);

// GraphQl setup
setupGraphql(app);

// Routes
app.use('/auth', authenticationRouter);
app.use('/playground', playgroundRouter);


function listen() {
	app.listen(app.get('port'), () => {
		console.info(`Application listening on port ${app.get('port')}`);
	});
}

db.on('error', console.error)
	.on('disconnected', dbSetup)
	.once('open', () => {
		console.info(`Connected to mongodb ( host: ${db.host}, port: ${db.port}, name: ${db.name} )`);

		// START application:
		listen();
	});
