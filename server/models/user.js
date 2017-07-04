import mongoose from 'mongoose';
import timestamp from 'mongoose-timestamp';
import passportLocalMongoose from 'passport-local-mongoose';
require('mongoose-type-email');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
	username: mongoose.SchemaTypes.Email,
	password: String
});

UserSchema.plugin(passportLocalMongoose);
UserSchema.plugin(timestamp);

const User = mongoose.model('User', UserSchema);

export default User;
