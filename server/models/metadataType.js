import mongoose from 'mongoose';
import timestamp from 'mongoose-timestamp';
import URLSlugs from 'mongoose-url-slugs';

const Schema = mongoose.Schema;

/**
 * MetadataType base schema
 * @type {Schema}
 */
const MetadataTypeSchema = new Schema({
	name: {
		type: String,
		unique: true,
		required: true,
		trim: true,
		index: true
	},
	type: {
		type: String,
		enum: ['String', 'Number', 'Boolean', 'Array(String)', 'Array(Number)', 'Array(Boolean)'],
	},
	patternId: {
		type: Schema.Types.ObjectId,
		ref: 'MetadataPattern',
	},
});


// add timestamp (createdAt, updatedAt)
MetadataTypeSchema.plugin(timestamp);

// add slug (slug)
MetadataTypeSchema.plugin(URLSlugs('name'));

/**
 * MetadataType mongoose model
 * @type {mongoose model}
 */
const MetadataType = mongoose.model('MetadataType', MetadataTypeSchema);

export default MetadataType;
export { MetadataTypeSchema };

