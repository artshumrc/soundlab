import express from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';

// models
import User from '../models/user';

// authentication
import { jwtAuthenticate, checkPasswordStrength } from '../authentication';

const router = express.Router();

router.post('/login', async (req, res) => {

	const { username, password } = req.body;

	const user = await User.findByUsername(username);
	console.log('user', user);
	if (user) {
		user.authenticate(password, (_, isValid, message) => {
			if (isValid) {
				const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
					expiresIn: 10080 // in seconds
				});
				console.log('token', token);
				return res.json({ success: true, token: `JWT ${token}`, username: user.username, userId: user._id });
			}
			return res.status(401).send(message);
		});
	} else {
		return res.status(401).send({error: 'User not found'});
	}
});

router.post('/verify-token', jwtAuthenticate, async (req, res) => {

	console.log(req.user);

	if (req.user) {
		return res.json(req.user);
	}
	return res.status(401).send({error: 'User not found'});
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
		return res.json({ success: true, token: `JWT ${token}`, username: account.username, userId: account._id });
	});
});


export default router;
