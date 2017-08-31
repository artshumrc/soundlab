import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import zxcvbn from 'zxcvbn';

import DataLoader from 'dataloader';
import createRedisDataLoader from 'redis-dataloader';

// models
import User from '../models/user';

// strategies
import setupJWTStrategy from './strategies/jwt';


export default function authSetup(app, redisClient) {

	// setup JWT strategy
	setupJWTStrategy(app, redisClient);


	// PASSPORT setup
	passport.serializeUser(User.serializeUser());
	passport.deserializeUser(User.deserializeUser());

	app.use(passport.initialize());
	// app.use(passport.session());
}

// check password strength
export function checkPasswordStrength(passwordField = 'password') {
	return function checkPasswordStrengthMiddleware(req, res, next) {
		if (req.body[passwordField]) {
			const passwordStrength = zxcvbn(req.body[passwordField], [req.body.username, 'orpheus', 'orphe']);
			if (passwordStrength.score > 3) {
				return next();
			}
			res.send(JSON.stringify({ passwordStrength: passwordStrength }));
		}
		return next();
	};
}


/**
 * AUthentication Middleware
 */

export function jwtAuthenticate(req, res, next) {
	passport.authenticate(['jwt'], {
		session: false
	}, (err, user, info) => {
		if (err) {
			return next(err);
		}
		req.user = user || null;
		next();
	})(req, res, next);
}
