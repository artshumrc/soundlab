import mongoose from 'mongoose';
import timestamp from 'mongoose-timestamp';
import URLSlugs from 'mongoose-url-slugs';

const Schema = mongoose.Schema;

/**
 * Base Project mongoose schema
 * @type {Schema}
 */
const ProjectSchema = new Schema({
	languages: [{
		type: String,
		required: true,
	}],
	userId: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		index: true
	},
});


// add timestamps (createdAt, updatedAt)
ProjectSchema.plugin(timestamp);

/**
 * Project mongoose model
 * @type {mongoose model}
 */
const Project = mongoose.model('Project', ProjectSchema);

export default Project;
export { ProjectSchema };
