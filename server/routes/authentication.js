import express from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';

// models
import User from '../models/user';

// authentication
import { jwtAuthenticate, checkPasswordStrength } from '../authentication';

// strategies
import validateFacebookToken from '../authentication/strategies/facebook';


const router = express.Router();

const loginPWD = async (res, username, password) => {
	const user = await User.findByUsername(username);
	if (user) {
		user.authenticate(password, (_, isValid, message) => {
			if (isValid) {
				const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
					expiresIn: 10080 // in seconds
				});
				return res.json({ success: true, token: `JWT ${token}`, username: user.username, userId: user._id });
			}
			return res.status(401).send(message);
		});
	} else {
		return res.status(401).send({error: 'User not found'});
	}
};

const loginFacebook = async (res, facebookToken) => {

	try {
		const facebookProfile = await validateFacebookToken(facebookToken);
		const user = await User.findByFacebookId(facebookProfile.id);
		const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
			expiresIn: 10080 // in seconds
		});
		return res.json({ success: true, token: `JWT ${token}`, username: user.username, userId: user._id });
	} catch (err) {
		res.status(500);
	}

};

router.post('/login', (req, res) => {

	const { username, password, facebookToken } = req.body;

	if (username && password) return loginPWD(res, username, password);

	if (facebookToken) return loginFacebook(res, facebookToken);

});

const registerPWD = (res, username, password) => {
	User.register(new User({
		username,
	}), password, (err, account) => {
		if (err) {
			return res.status(200).send(err);
		}
		const user = { _id: account._id };
		const token = jwt.sign(user, process.env.JWT_SECRET, {
			expiresIn: 10080 // in seconds
		});
		return res.json({ success: true, token: `JWT ${token}`, username: account.username, userId: account._id });
	});
};

const registerFacebook = async (res, facebookToken) => {
	try {
		const facebookProfile = await validateFacebookToken(facebookToken);
		const user = await User.createFacebook(facebookProfile.id);
		const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
			expiresIn: 10080 // in seconds
		});
		return res.json({ success: true, token: `JWT ${token}`, username: user.username, userId: user._id });
	} catch (err) {
		res.status(500);
	}
};

router.post('/register', checkPasswordStrength(), (req, res) => {

	const { username, password, facebookToken } = req.body;

	if (username && password) return registerPWD(res, username, password);

	if (facebookToken) return registerFacebook(res, facebookToken);
	
});

router.post('/verify-token', jwtAuthenticate, async (req, res) => {

	if (req.user) {
		return res.json(req.user);
	}
	return res.status(401).send({error: 'User not found'});
});

export default router;
