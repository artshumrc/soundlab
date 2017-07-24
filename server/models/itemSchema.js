import mongoose from 'mongoose';

// plug-ins
import timestamp from 'mongoose-timestamp';
import URLSlugs from 'mongoose-url-slugs';
import language from './plugins/language';

const Schema = mongoose.Schema;

/**
 * ItemSchema base schema
 * @type {Schema}
 */
const ItemSchemaSchema = new Schema({
	name: {
		type: String,
		unique: true,
		required: true,
		trim: true,
		index: true
	},
	private: {
		type: Boolean,
		default: false,
	},
	createdBy: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: true,
		index: true
	},
});


// add timestamps (createdAt, updatedAt)
ItemSchemaSchema.plugin(timestamp);

// add slug (slug)
ItemSchemaSchema.plugin(URLSlugs('name'));

/**
 * ItemSchema mongoose model
 * @type {Object}
 */
const ItemSchema = mongoose.model('ItemSchema', ItemSchemaSchema);

export default ItemSchema;
export { ItemSchemaSchema };

