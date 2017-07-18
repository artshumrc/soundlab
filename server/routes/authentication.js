import express from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';

// models
import User from '../models/user';

// authentication
import { authenticationMiddleware, checkPasswordStrength } from '../authentication';

const router = express.Router();


// LOGIN
router.post('/login', passport.authenticate('local'), (req, res) => {
	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify({ username: req.user.username }));
});

router.post('/login-jwt', passport.authenticate('local'), (req, res) => {
	// Create token if the password matched and no error was thrown
	const user = { _id: req.user._id };
	const token = jwt.sign(user, process.env.JWT_SECREST, {
		expiresIn: 10080 // in seconds
	});
	res.json({ success: true, token: `JWT ${token}` });
});


// LOGOUT
router.post('/logout', (req, res) => {
	req.logOut();
	res.send(JSON.stringify({ status: 'Logged out' }));
});


// REGISTER
router.post('/register', checkPasswordStrength(), (req, res) => {
	User.register(new User({
		username: req.body.username
	}), req.body.password, (err, account) => {
		if (err) {
			return res.status(200).send(err);
		}
		passport.authenticate('local')(req, res, () => {
			res.send(JSON.stringify({ username: req.user.username }));
		});
	});
});

router.post('/register-jwt', checkPasswordStrength(), (req, res) => {
	User.register(new User({
		username: req.body.username
	}), req.body.password, (err, account) => {
		if (err) {
			return res.status(200).send(err);
		}
		const user = { _id: account._id };
		const token = jwt.sign(user, process.env.JWT_SECREST, {
			expiresIn: 10080 // in seconds
		});
		res.json({ success: true, username: account.username, token: `JWT ${token}` });
	});
});


export default router;
