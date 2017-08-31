import crypto from 'crypto';
import zxcvbn from 'zxcvbn';
import mongoose from 'mongoose';
import timestamp from 'mongoose-timestamp';
import passportLocalMongoose from 'passport-local-mongoose';
import 'mongoose-type-email';

const Schema = mongoose.Schema;

/**
 * User base schema
 * @type {Schema}
 */
const UserSchema = new Schema({
	username: mongoose.SchemaTypes.Email,
	password: String,
	oauthIds: [{
		network: String,
		id: String,
	}],
	resetPasswordToken: String,
	resetPasswordExpires: Date
});

// add password hash and salt
UserSchema.plugin(passportLocalMongoose, {
	passwordValidator(password, cb) {
		const passwordStrength = zxcvbn(password, ['orpheus', 'orphe']);
		if (passwordStrength.score <= 3) return cb({passwordStrength: passwordStrength});
		return cb();
	},
});

// add timestamp (createdAt, updatedAt)
UserSchema.plugin(timestamp);

// Statics
// // this method is needed for dataloader to work
UserSchema.statics.findById = function findById(_id, cb) {
	return User.findOne({ _id }, cb);
};

UserSchema.statics.findByOAuth = function findByOAuth(id, network, cb) {
	return User.findOne({ oauthIds: { $elemMatch: { network, id } } }, cb);
};

UserSchema.statics.createOAuth = async function createOAuth({ id, network }, cb) {
	const user = await User.findByOAuth(id, network);
	if (user) return null;
	return User.create({ oauthIds: [{ id, network }] }, cb);
};

UserSchema.statics.generatePasswordResetToken = async function generatePasswordResetToken(username) {
	try {
		const token = await crypto.randomBytes(48);
		User.update({ username }, {
			resetPasswordToken: token,
			resetPasswordExpires: Date.now() + 3600000, // 1 hour
		});
	} catch (err) {
		throw err;
	}
};

UserSchema.statics.resetPassword = async function resetPassword(resetPasswordToken, newPassword) {
	try {
		const user = User.find({ resetPasswordToken, resetPasswordExpires: { $gt: Date.now() } });
		if (user) {
			await user.setPassword(newPassword);
			return user.save();
		}
		throw new Error('Invalid token');

	} catch (err) {
		throw err;
	}
};



/**
 * User mongoose model
 * @type {Object}
 */
const User = mongoose.model('User', UserSchema);

export default User;
export { UserSchema };
