// main
import express from 'express';
import fs from 'fs';
import path from 'path';
import request from 'request';

//aws
import aws from 'aws-sdk';
import S3Router from 'react-s3-uploader/s3router';

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

//mirador
import Mirador from './models/mirador';
import {Image} from './models/image';
import Miradors from './bll/miradors';

const app = express();

const db = dbSetup();
aws.config.update({
	accessKeyId: process.env.AWS_ACCESS_KEY_ID,
	secretAccessKey: process.env.AWS_SECRET_ACCESS,
});

app.set('port', (process.env.PORT || 3001));

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

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

// s3
app.use('/s3', S3Router({
	bucket: process.env.AWS_BUCKET,
	ACL: 'public-read',
	uniquePrefix: false
}));

app.post('/createManifest', (req, res) => {
	const newMirador = {
		images: []
	};

	req.body.images.forEach((image) => {
		newMirador.images.push(new Image(image));
	});

	const miradorObject = Object.assign({}, req.body, newMirador);

	const mirador = new Mirador(miradorObject);
	mirador.save((error) => {
		if (error) {
			console.log('Mirador DB save error: ', error);
		} else {
			const reqBody = {
				manifest: JSON.stringify(req.body),
				responseUrl: `${process.env.REACT_APP_SERVER}/manifestCreated`
			};
			request.post('http://generate-manifests.orphe.us/manifests', {form: reqBody});
		}
	});
});

app.post('/manifestCreated', (req, res) => {
	const exampleSecret = 'examplewebhookkey';
	if (req.body.secret === exampleSecret) {
		Mirador.findByIdAndUpdate(req.body.manifestId, {$set: {remoteUri: req.body.manifestUri}}, (error, manifest) => {
			if (error) {
				console.log('Manifest created callback error: ', error);
				res.send('Error updating manifest!');
			}			else {
				res.send('Roger that!');
			}
		});
	}	else {
		console.log('/manifestCreated: Authentication error!');
		res.send('Authentication needed!');
	}
});

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
