import mongoose from 'mongoose';

// plug-ins
import timestamp from 'mongoose-timestamp';
import URLSlugs from 'mongoose-url-slugs';
import mongoosePaginate from 'mongoose-paginate';


const Schema = mongoose.Schema;

export const TagSchema = new Schema({
	value: {
		type: String,
	},
	label: {
		type: String,
	}
});

export const MetadataSchema = new Schema({
	value: {
		type: String,
	},
	label: {
		type: String,
	}
});

/**
 * Item base schema
 * @type {Schema}
 */
const ItemSchema = new Schema({
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
		required: true,
		index: true
	},
	description: {
		type: String,
	},
	tags: [TagSchema],
	metadata: [MetadataSchema],
	private: {
		type: Boolean,
		default: false,
	},
});


// add timestamps (createdAt, updatedAt)
ItemSchema.plugin(timestamp);

// add slug (slug)
ItemSchema.plugin(URLSlugs('title'));


// Statics
ItemSchema.statics.collectionCount = function collectionCount(collectionId) {
	return this.count({ collectionId });
};
ItemSchema.statics.findByCollectionId = function collectionCount(collectionId) {
	return this.find({ collectionId }).select({ _id: 1 });
};


/**
 * Item mongoose model
 * @type {Object}
 */
const Item = mongoose.model('Item', ItemSchema);

export default Item;
export { ItemSchema };
