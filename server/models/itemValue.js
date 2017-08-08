import mongoose from 'mongoose';

// plug-ins
import timestamp from 'mongoose-timestamp';
// import URLSlugs from 'mongoose-url-slugs';
import language from './plugins/language';


const Schema = mongoose.Schema;

/**
 * ItemValue base schema
 * @type {Schema}
 */
const ItemValueSchema = new Schema({
	itemId: {
		type: Schema.Types.ObjectId,
		ref: 'Item',
		index: true
	},
	fieldId: {
		type: Schema.Types.ObjectId,
		ref: 'Field',
		index: true
	},
	value: {
		type: Schema.Types.Mixed,
	},
});


// add timestamps (createdAt, updatedAt)
ItemValueSchema.plugin(timestamp);

// add slug (slug)
// TODO slug

// add language (language)
ItemValueSchema.plugin(language);

// Statics
ItemValueSchema.statics.findByItemId = function findByItemId(itemId, cb) {
	return this.find({ itemId }, cb);
};


/**
 * ItemValue mongoose model
 * @type {Object}
 */
const ItemValue = mongoose.model('ItemValue', ItemValueSchema);

export default ItemValue;
export { ItemValueSchema };

