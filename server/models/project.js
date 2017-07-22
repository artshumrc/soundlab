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
		role: String,	// e.g.: 'Owner' TODO
	}],
	languages: [{
		type: String,
		required: true,
		default: 'en',
		enum: getAllLanguages(),
	}],
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
