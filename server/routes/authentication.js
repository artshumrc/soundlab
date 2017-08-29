import express from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';

// models
import User from '../models/user';

// authentication
import { jwtAuthenticate, checkPasswordStrength } from '../authentication';

// strategies
import validateTokenOAuth1 from '../authentication/strategies/oauth1';
import validateTokenOAuth2 from '../authentication/strategies/oauth2';


const providers = {
	facebook: {
		url: 'https://graph.facebook.com/me',
		userIdField: 'id',
	},
	google: {
		url: 'https://www.googleapis.com/oauth2/v3/tokeninfo',
		userIdField: 'sub',
	},
	twitter: {
		url: 'https://api.twitter.com/1.1/account/verify_credentials.json',
		userIdField: 'id',
	}
};

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

const loginOAuth2 = async (res, accessToken, network) => {

	try {
		const { url, userIdField } = providers[network];
		const profile = await validateTokenOAuth2(accessToken, url);
		const user = await User.findByOAuth(profile[userIdField], network);
		if (user) {
			const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
				expiresIn: 10080 // in seconds
			});
			return res.json({ success: true, token: `JWT ${token}`, username: user.username, userId: user._id });
		}
		return res.status(401).send({error: 'User not found'});
	} catch (err) {
		console.log('err', err);
		res.status(500);
	}

};

const loginOAuth1 = async (res, oauthToken, oauthTokenSecret, network) => {

	try {
		const { url, userIdField } = providers[network];
		const profile = await validateTokenOAuth1(network, oauthToken, oauthTokenSecret, url);
		const user = await User.findByOAuth(profile[userIdField], network);
		if (user) {
			const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
				expiresIn: 10080 // in seconds
			});
			return res.json({ success: true, token: `JWT ${token}`, username: user.username, userId: user._id });
		}
		return res.status(401).send({error: 'User not found'});
	} catch (err) {
		console.log('err', err);
		res.status(500);
	}

};

router.post('/login', (req, res) => {

	const { username, password, network, accessToken, oauthToken, oauthTokenSecret } = req.body;

	if (username && password) return loginPWD(res, username, password);

	if (accessToken) return loginOAuth2(res, accessToken, network);

	return loginOAuth1(res, oauthToken, oauthTokenSecret, network);

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
