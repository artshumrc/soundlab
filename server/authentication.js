import passport from 'passport';
import PassportLocal from 'passport-local';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import zxcvbn from 'zxcvbn';

// models
import User from './models/user';

export default function authSetup(app) {
	// JWT strategy
	const JWTOptions = {
		jwtFromRequest: ExtractJwt.fromAuthHeader(),
		secretOrKey: process.env.JWT_SECRET,
	};

	passport.use(new JwtStrategy(JWTOptions, (jwtPayload, done) => {
		User.findOne({ _id: jwtPayload._id }, (err, user) => {
			if (err) {
				return done(err, false);
			}
			if (user) {
				done(null, user);
			} else {
				done(null, false);
			}
		});
	}));

	// LOCAL strategy
	passport.use(User.createStrategy());

	// PASSPORT setup
	passport.serializeUser(User.serializeUser());
	passport.deserializeUser(User.deserializeUser());

	app.use(passport.initialize());
	app.use(passport.session());
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
