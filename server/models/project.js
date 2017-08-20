import mongoose from 'mongoose';
import timestamp from 'mongoose-timestamp';
import URLSlugs from 'mongoose-url-slugs';

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
});


// add timestamps (createdAt, updatedAt)
ProjectSchema.plugin(timestamp);

// Statics
ProjectSchema.statics.findByUserId = function findByUserId(userId, cb) {
	return this.find({ users: { $elemMatch: { userId } } }, cb);
};
ProjectSchema.statics.isOwner = function isOwner(projectId, userId, cb) {
	return this.find({ _id: projectId, users: { $elemMatch: { userId, role: 'Owner' } } }, cb);
};
ProjectSchema.statics.createByOwner = function createByOwner(userId, cb) {
	return this.create({
		users: [{
			userId,
			role: 'Owner',
		}],
	}, cb);
};
ProjectSchema.statics.findById = function findById(projectId, cb) {
	return this.findOne({ _id: projectId }, cb);
};

/**
 * Project mongoose model
 * @type {Object}
 */
const Project = mongoose.model('Project', ProjectSchema);

export default Project;
export { ProjectSchema };
