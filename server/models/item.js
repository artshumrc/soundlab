import mongoose from 'mongoose';

// plug-ins
import timestamp from 'mongoose-timestamp';
import URLSlugs from 'mongoose-url-slugs';
import language from './plugins/language';

const Schema = mongoose.Schema;

/**
 * Item base schema
 * @type {Schema}
 */
const ItemSchema = new Schema({
	title: {
		type: String,
		required: true,
		trim: true,
		index: true,
	},
	collectionId: {
		type: Schema.Types.ObjectId,
		ref: 'Collection',
		index: true
	},
	metadata: [{
		key: String,
		title: String,
		type: {
			type: String,
		},
		value: Schema.Types.Mixed,
	}],
});


// add timestamps (createdAt, updatedAt)
ItemSchema.plugin(timestamp);

// add slug (slug)
ItemSchema.plugin(URLSlugs('title _id'));

// add language (language)
ItemSchema.plugin(language);

/**
 * Item mongoose model
 * @type {mongoose model}
 */
const Item = mongoose.model('Item', ItemSchema);

export default Item;
export { ItemSchema };

