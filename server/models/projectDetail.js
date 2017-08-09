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
ProjectDetailSchema.statics.findByProjectId = function findByProjectId(projectId, language = process.env.DEFAULT_LANGUAGE, cb) {
	return this.find({ projectId }, cb).byLanguage(language);
};
ProjectDetailSchema.statics.setProjectDetail = async function setProjectDetail(projectId, projectInput, language = process.env.DEFAULT_LANGUAGE) {
	const query = {
		projectId,
		language
	};
	const projectDetail = await this.find(query);
	console.log('projectDetail', projectDetail);
	if (projectDetail.length) {
		return this.findOneAndUpdate(query, { $set: projectInput }, { new: true });
	}
	return this.create({ projectId, language, ...projectInput });
};

// helpers
ProjectDetailSchema.query.byLanguage = function byLanguage(language) {
	return this.findOne({ language });
};


/**
 * ProjectDetail mongoose model
 * @type {Object}
 */
const ProjectDetail = mongoose.model('ProjectDetail', ProjectDetailSchema);

export default ProjectDetail;
export { ProjectDetailSchema };
