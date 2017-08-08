import mongoose from 'mongoose';

// plug-ins
import timestamp from 'mongoose-timestamp';
import URLSlugs from 'mongoose-url-slugs';
import languagePlugin from './plugins/language';

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
	description: String,
	projectId: {
		type: Schema.Types.ObjectId,
		ref: 'Project',
		index: true,
		required: true,
	},
});


// add timestamps (createdAt, updatedAt)
ProjectDetailSchema.plugin(timestamp);

// add slug (slug)
ProjectDetailSchema.plugin(URLSlugs('title'));

// add language (language)
ProjectDetailSchema.plugin(languagePlugin);

// Statics
ProjectDetailSchema.statics.findByProjectId = function findByProjectId(projectId, cb) {
	return this.find({ projectId }, cb);
};

// helpers
ProjectDetailSchema.query.byLanguage = function byLanguage(language) {
	return this.find({ language });
};


/**
 * ProjectDetail mongoose model
 * @type {Object}
 */
const ProjectDetail = mongoose.model('ProjectDetail', ProjectDetailSchema);

export default ProjectDetail;
export { ProjectDetailSchema };
