import mongoose from 'mongoose';

// plug-ins
import timestamp from 'mongoose-timestamp';
import URLSlugs from 'mongoose-url-slugs';
import language from './plugins/language';

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

// add language (language)
ProjectDetailSchema.plugin(language);

/**
 * ProjectDetail mongoose model
 * @type {mongoose model}
 */
const ProjectDetail = mongoose.model('ProjectDetail', ProjectDetailSchema);

export default ProjectDetail;
export { ProjectDetailSchema };
