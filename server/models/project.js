import mongoose from 'mongoose';
import timestamp from 'mongoose-timestamp';
import URLSlugs from 'mongoose-url-slugs';
import languages from 'languages';

const Schema = mongoose.Schema;

/**
 * Base Project mongoose schema
 * @type {Schema}
 */
const ProjectSchema = new Schema({
	userId: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		index: true
	},
	languages: [{
		type: String,
		required: true,
		default: 'en',
		enum: languages.getAllLanguageCode(),
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
