import mongoose from 'mongoose';
import timestamp from 'mongoose-timestamp';
import URLSlugs from 'mongoose-url-slugs';

// api
import { getAllLanguages } from '../api/languages';

const Schema = mongoose.Schema;

/**
 * Base Project mongoose schema
 * @type {Schema}
 */
const ProjectSchema = new Schema({
	users: [{
		userId: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			index: true
		},
		role: {
			type: String,
			enum: ['Owner']
		}
	}],
	languages: [{
		type: String,
		required: true,
		default: process.env.DEFAULT_LANGUAGE,
		enum: getAllLanguages(),
	}],
});


// add timestamps (createdAt, updatedAt)
ProjectSchema.plugin(timestamp);

// Statics
ProjectSchema.statics.findByUserId = function findByUserId(userId, cb) {
	return this.find({ users: { $elemMatch: { userId } } }, cb);
};

/**
 * Project mongoose model
 * @type {Object}
 */
const Project = mongoose.model('Project', ProjectSchema);

export default Project;
export { ProjectSchema };
