import passport from 'passport';
import PassportLocal from 'passport-local';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import zxcvbn from 'zxcvbn';

import DataLoader from 'dataloader';
import createRedisDataLoader from 'redis-dataloader';

// models
import User from './models/user';


export default function authSetup(app, redisClient) {

	const RedisDataLoader = createRedisDataLoader({ redis: redisClient });

	const userLoader = new RedisDataLoader(
		'user',
		new DataLoader(ids => Promise.all(ids.map(User.findById)), {
			cache: false
		}), {
			cache: false,
			expire: 60,
		}
	);

	// JWT strategy
	const JWTOptions = {
		jwtFromRequest: ExtractJwt.fromAuthHeader(),
		secretOrKey: process.env.JWT_SECRET,
	};

	passport.use(new JwtStrategy(JWTOptions, async (jwtPayload, done) => {

		try {
			const user = await userLoader.load(jwtPayload._id);

			if (user) {
				done(null, user);
			} else {
				done(null, false);
			}
		} catch (err) {
			return done(err, false);
		}

		// User.findOne({ _id: jwtPayload._id }, (err, user) => {
		// 	if (err) {
		// 		return done(err, false);
		// 	}
		// 	if (user) {
		// 		done(null, user);
		// 	} else {
		// 		done(null, false);
		// 	}
		// });
	}));

	// LOCAL strategy
	// passport.use(User.createStrategy());

	// // PASSPORT setup
	passport.serializeUser(User.serializeUser());
	passport.deserializeUser(User.deserializeUser());

	app.use(passport.initialize());
	// app.use(passport.session());
}

// authentication routes
export function authenticationMiddleware() {
	return (req, res, next) => {
		if (req.isAuthenticated()) {
			return next();
		}
		res.status(200).send('NOT AUTHORIZED');
	};
}

// check password strength
export function checkPasswordStrength() {
	return function (req, res, next) {
		const passwordStrength = zxcvbn(req.body.password, [req.body.username, 'orpheus', 'orphe']);
		if (passwordStrength.score > 3) {
			return next();
		}
		res.send(JSON.stringify({ passwordStrength: passwordStrength }));
	};
}

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
