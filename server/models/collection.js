import mongoose from 'mongoose';

// plug-ins
import timestamp from 'mongoose-timestamp';
import URLSlugs from 'mongoose-url-slugs';

const Schema = mongoose.Schema;

/**
 * Collection base schema
 * @type {Schema}
 */
const CollectionSchema = new Schema({
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
	projectId: {
		type: Schema.Types.ObjectId,
		ref: 'Project',
		index: true,
		required: true,
	},
});


// add timestamps (createdAt, updatedAt)
CollectionSchema.plugin(timestamp);

// add slug (slug)
CollectionSchema.plugin(URLSlugs('title'));

// Statics
CollectionSchema.statics.findByProjectId = function findByProjectId(projectId, cb) {
	return this.find({ projectId }, cb);
};

/**
 * Collection mongoose model
 * @type {Object}
 */
const Collection = mongoose.model('Collection', CollectionSchema);

export default Collection;
export { CollectionSchema };
