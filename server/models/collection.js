import mongoose from 'mongoose';
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
		trim: true
	},
	projectId: {
		type: Schema.Types.ObjectId,
		ref: 'Project'
	},
	metadataPatternId: {
		type: Schema.Types.ObjectId,
		ref: 'MetadataPattern'
	},
});


// add timestamp (createdAt, updatedAt)
CollectionSchema.plugin(timestamp);

// add slug (slug)
CollectionSchema.plugin(URLSlugs('title'));

/**
 * Collection mongoose model
 * @type {mongoose model}
 */
const Collection = mongoose.model('Collection', CollectionSchema);

export default Collection;
export { CollectionSchema };

