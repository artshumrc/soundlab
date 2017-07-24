import mongoose from 'mongoose';

// plug-ins
import timestamp from 'mongoose-timestamp';
import URLSlugs from 'mongoose-url-slugs';
import language from './plugins/language';

const Schema = mongoose.Schema;

/**
 * CollectionDetail base schema
 * @type {Schema}
 */
const CollectionDetailSchema = new Schema({
	title: {
		type: String,
		unique: true,
		required: true,
		trim: true,
		index: true
	},
	collectionId: {
		type: Schema.Types.ObjectId,
		ref: 'Collection',
		index: true,
		required: true,
	},
	description: String,
});


// add timestamps (createdAt, updatedAt)
CollectionDetailSchema.plugin(timestamp);

// add slug (slug)
CollectionDetailSchema.plugin(URLSlugs('title'));

// add language (language)
CollectionDetailSchema.plugin(language);

/**
 * CollectionDetail mongoose model
 * @type {mongoose model}
 */
const CollectionDetail = mongoose.model('CollectionDetail', CollectionDetailSchema);

export default CollectionDetail;
export { CollectionDetailSchema };

