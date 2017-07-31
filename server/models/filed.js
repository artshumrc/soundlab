import mongoose from 'mongoose';

// plug-ins
import timestamp from 'mongoose-timestamp';

const Schema = mongoose.Schema;

/**
 * Filed base schema
 * @type {Schema}
 */
const FieldSchema = new Schema({
	itemSchemaId: {
		type: Schema.Types.ObjectId,
		ref: 'ItemSchema',
		required: true,
		index: true
	},
	type: {
		type: Object,
		required: true,
		enum: [String, Number, Date, Boolean, Schema.Types.Mixed, Schema.Types.ObjectId, Array],
	},
	required: {
		type: Boolean,
		default: false,
	},
	default: {
		type: Schema.Types.Mixed,
	},
	ref: {
		type: String,
	},
	enum: {
		type: Array,
	},
	min: {
		type: Number,
	},
	max: {
		type: Number,
	},
});


// add timestamps (createdAt, updatedAt)
FieldSchema.plugin(timestamp);

/**
 * Filed mongoose model
 * @type {Object}
 */
const Filed = mongoose.model('Filed', FieldSchema);

export default Filed;
export { FieldSchema };

