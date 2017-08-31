import mongoose from 'mongoose';
import timestamp from 'mongoose-timestamp';
import passportLocalMongoose from 'passport-local-mongoose';

const Schema = mongoose.Schema;

/**
 * User base schema
 * @type {Schema}
 */
const UserSchema = new Schema({
	username: String,
	password: String,
	oauthIds: [{
		network: String,
		id: String,
	}],
});

// add password hash and salt
UserSchema.plugin(passportLocalMongoose);

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

/**
 * User mongoose model
 * @type {Object}
 */
const User = mongoose.model('User', UserSchema);

export default User;
export { UserSchema };
