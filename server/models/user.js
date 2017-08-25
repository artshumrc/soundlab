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
	facebookId: String,
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

UserSchema.statics.findByFacebookId = function findByFacebookId(facebookId, cb) {
	return User.findOne({ facebookId }, cb);
};

UserSchema.statics.createFacebook = function createFacebook(facebookId, cb) {
	return User.create({ facebookId }, cb);
};

/**
 * User mongoose model
 * @type {Object}
 */
const User = mongoose.model('User', UserSchema);

export default User;
export { UserSchema };
