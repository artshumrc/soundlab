import mongoose from 'mongoose';

// plug-ins
import timestamp from 'mongoose-timestamp';
import URLSlugs from 'mongoose-url-slugs';
import language from './plugins/language';

const Schema = mongoose.Schema;

/**
 * ItemSchemaFileds base schema
 * @type {Schema}
 */
const ItemSchemaFieldsSchema = new Schema({
	itemSchemaId: {
		type: Schema.Types.ObjectId,
		ref: 'ItemSchema',
		required: true,
		index: true
	},
	fileds: [{
		title: String,
		description: String,
		schemaFiled: Schema.Types.Mixed,
	}],
});


// add timestamps (createdAt, updatedAt)
ItemSchemaFieldsSchema.plugin(timestamp);

// add slug (slug)
ItemSchemaFieldsSchema.plugin(URLSlugs('name'));

// add language (language)
ItemSchemaFieldsSchema.plugin(language);

/**
 * ItemSchemaFileds mongoose model
 * @type {Object}
 */
const ItemSchemaFileds = mongoose.model('ItemSchemaFileds', ItemSchemaFieldsSchema);

export default ItemSchemaFileds;
export { ItemSchemaFieldsSchema };

