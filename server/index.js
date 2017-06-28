import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import express from 'express';
import fs from 'fs';
import path from 'path';

dotenv.config();

const app = express();

app.set('port', (process.env.PORT || 3001));

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

app.use(bodyParser.json());

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	next();
});

app.listen(app.get('port'), () => {
	console.log(`Application listening on port ${app.get('port')}`);
});
