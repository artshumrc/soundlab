import mongoose from 'mongoose';
import timestamp from 'mongoose-timestamp';
import URLSlugs from 'mongoose-url-slugs';
import languages from 'languages';

const Schema = mongoose.Schema;

/**
 * Base ProjectDetail mongoose schema
 * @type {Schema}
 */
const ProjectDetailSchema = new Schema({
	title: {
		type: String,
		unique: true,
		required: true,
		trim: true,
		index: true
	},
	language: {
		type: String,
		required: true,
		enum: languages.getAllLanguageCode(),
	},
	projectId: {
		type: Schema.Types.ObjectId,
		ref: 'Project',
		index: true
	},
});


// add timestamps (createdAt, updatedAt)
ProjectDetailSchema.plugin(timestamp);

// add slug (slug)
ProjectDetailSchema.plugin(URLSlugs('title'));

/**
 * ProjectDetail mongoose model
 * @type {mongoose model}
 */
const ProjectDetail = mongoose.model('ProjectDetail', ProjectDetailSchema);

export default ProjectDetail;
export { ProjectDetailSchema };
