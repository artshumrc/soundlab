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
		trim: true
	},
	tenantIds: [{
		type: Schema.Types.ObjectId,
		ref: 'Tenant'
	}],
});


// add timestamp (createdAt, updatedAt)
ProjectSchema.plugin(timestamp);

// add slug (slug)
ProjectSchema.plugin(URLSlugs('title'));

/**
 * Project mongoose model
 * @type {mongoose model}
 */
const Project = mongoose.model('Project', ProjectSchema);

export default Project;
export { ProjectSchema };
