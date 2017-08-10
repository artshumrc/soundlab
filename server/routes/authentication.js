import express from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';

// models
import User from '../models/user';

// authentication
import { authenticationMiddleware, checkPasswordStrength } from '../authentication';

const router = express.Router();

router.post('/login', async (req, res) => {

	const { username, password } = req.body;

	const user = await User.findByUsername(username);
	if (user) {
		user.authenticate(password, (_, isValid, message) => {
			if (isValid) {
				const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
					expiresIn: 10080 // in seconds
				});
				console.log('token', token);
				res.json({ success: true, token: `JWT ${token}` });
			} else {
				res.status(401).send(message);
			}
		});
	}
});

router.post('/register', checkPasswordStrength(), (req, res) => {
	User.register(new User({
		username: req.body.username
	}), req.body.password, (err, account) => {
		if (err) {
			return res.status(200).send(err);
		}
		const user = { _id: account._id };
		const token = jwt.sign(user, process.env.JWT_SECRET, {
			expiresIn: 10080 // in seconds
		});
		res.json({ success: true, username: account.username, token: `JWT ${token}` });
	});
});


export default router;
