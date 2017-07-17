import path from 'path';
import express from 'express';
import passport from 'passport';


const router = express.Router();


router.get('/secret', passport.authenticate(['jwt']), (req, res) => {
	console.log('req', req)
	res.status(200).send('the secret');
});

router.get('/login', (req, res) => {
	res.sendFile(path.resolve(`${__dirname}/../html/login.html`));
});

router.get('/register', (req, res) => {
	res.sendFile(path.resolve(`${__dirname}/../html/register.html`));
});

export default router;
