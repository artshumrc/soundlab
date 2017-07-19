import mongoose from 'mongoose';

// plug-ins
import timestamp from 'mongoose-timestamp';
import URLSlugs from 'mongoose-url-slugs';
import language from './plugins/language';

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
	projectId: {
		type: Schema.Types.ObjectId,
		ref: 'Project',
		index: true
	},
	metadataPatternId: {
		type: Schema.Types.ObjectId,
		ref: 'MetadataPattern'
	},
});


// add timestamps (createdAt, updatedAt)
CollectionSchema.plugin(timestamp);

// add slug (slug)
CollectionSchema.plugin(URLSlugs('title'));

// add language (language)
CollectionSchema.plugin(language);

/**
 * Collection mongoose model
 * @type {mongoose model}
 */
const Collection = mongoose.model('Collection', CollectionSchema);

export default Collection;
export { CollectionSchema };

