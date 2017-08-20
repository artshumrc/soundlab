import mongoose from 'mongoose';

// plug-ins
import timestamp from 'mongoose-timestamp';
import URLSlugs from 'mongoose-url-slugs';

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

// Statics
ProjectDetailSchema.statics.findByProjectId = function findByProjectId(projectId, cb) {
	return this.findOne({ projectId }, cb);
};
ProjectDetailSchema.statics.setProjectDetail = async function setProjectDetail(projectId, projectInput) {
	const query = {
		projectId,
	};
	const projectDetail = await this.find(query);
	if (projectDetail.length) {
		return this.findOneAndUpdate(query, { $set: projectInput }, { new: true });
	}
	return this.create({ projectId, ...projectInput });
};


/**
 * ProjectDetail mongoose model
 * @type {Object}
 */
const ProjectDetail = mongoose.model('ProjectDetail', ProjectDetailSchema);

export default ProjectDetail;
export { ProjectDetailSchema };
