import mongoose from 'mongoose';
import timestamp from 'mongoose-timestamp';
import URLSlugs from 'mongoose-url-slugs';


const Schema = mongoose.Schema;

/**
 * Base Project mongoose schema
 * @type {Schema}
 */
const ProjectSchema = new Schema({
	title: {
		type: String,
		unique: true,
		required: true,
		trim: true,
		index: true
	},
	description: {
		type: String,
	},
	users: [{
		_id: {
			type: Schema.Types.ObjectId
		}
	}]
	// users: [{
	// 	userId: {
	// 		type: Schema.Types.ObjectId,
	// 		ref: 'User',
	// 		index: true
	// 	},
	// 	role: {
	// 		type: String,
	// 		enum: ['Owner']
	// 	}
	// }],
});


// add timestamps (createdAt, updatedAt)
ProjectSchema.plugin(timestamp);

// add slug (slug)
ProjectSchema.plugin(URLSlugs('title'));


/**
 * Statics
 */

/**
 * Find project by user id
 * @param  {String}   userId 	User id
 * @return {Promise}          	(Promise) Array of projects
 */
ProjectSchema.statics.findByUserId = function findByUserId(userId) {
	return this.find({ users: { $elemMatch: { userId } } });
};

/**
 * Check if user is an owner of a project by project id
 * @param  {String}   projectId 	Project id
 * @param  {String}   userId    	User id
 * @return {Promise}            	(Promise) True if user has the role of owner for this project
 */
ProjectSchema.statics.isUserOwner = async function isUserOwner(projectId, userId) {
	try {
		const project = await this.find({ _id: projectId, users: { $elemMatch: { userId, role: 'Owner' } } });

		if (project) return true;

		return false;

	} catch (err) {
		throw err;
	}
};

// TODO: check if needed (why was it implemented?):
// ProjectSchema.statics.findById = function findById(projectId) {
// 	return this.findOne({ _id: projectId });
// };

/**
 * Create a new project by user
 * @param  {String}   userId    	User id
 * @param  {Object}   newProject 	Object with new project values
 * @return {Promise}               	(Promise) The new Project
 */
ProjectSchema.statics.createByOwner = function createByOwner(userId, newProject) {
	return this.create({
		users: [{
			userId,
			role: 'Owner',
		}],
		...newProject,
	});
};

/**
 * Project mongoose model
 * @type {Object}
 */
const Project = mongoose.model('Project', ProjectSchema);

export default Project;
export { ProjectSchema };
