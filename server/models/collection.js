import mongoose from 'mongoose';

// plug-ins
import timestamp from 'mongoose-timestamp';

const Schema = mongoose.Schema;

/**
 * Collection base schema
 * @type {Schema}
 */
const CollectionSchema = new Schema({
	projectId: {
		type: Schema.Types.ObjectId,
		ref: 'Project',
		index: true,
		required: true,
	},
	itemSchemaId: {
		type: Schema.Types.ObjectId,
		ref: 'ItemSchema',
		required: true,
	},
});


// add timestamps (createdAt, updatedAt)
CollectionSchema.plugin(timestamp);

/**
 * Collection mongoose model
 * @type {Object}
 */
const Collection = mongoose.model('Collection', CollectionSchema);

export default Collection;
export { CollectionSchema };

