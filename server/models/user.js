import mongoose from 'mongoose';
import timestamp from 'mongoose-timestamp';
import passportLocalMongoose from 'passport-local-mongoose';
require('mongoose-type-email');

const Schema = mongoose.Schema;

/**
 * User base schema
 * @type {Schema}
 */
const UserSchema = new Schema({
	username: mongoose.SchemaTypes.Email,
	password: String
});

// add password hash and salt
UserSchema.plugin(passportLocalMongoose);

// add timestamp (createdAt, updatedAt)
UserSchema.plugin(timestamp);

/**
 * User mongoose model
 * @type {mongoose model}
 */
const User = mongoose.model('User', UserSchema);

export default User;
export { UserSchema };
