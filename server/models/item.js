import mongoose from 'mongoose';
import timestamp from 'mongoose-timestamp';
import URLSlugs from 'mongoose-url-slugs';

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
	metadata: {
		type: Schema.Types.Mixed,
	},
});


// add timestamp (createdAt, updatedAt)
ItemSchema.plugin(timestamp);

// add slug (slug)
ItemSchema.plugin(URLSlugs('title'));

/**
 * Item mongoose model
 * @type {mongoose model}
 */
const Item = mongoose.model('Item', ItemSchema);

export default Item;
export { ItemSchema };

