import mongoose from 'mongoose';
import timestamp from 'mongoose-timestamp';
import URLSlugs from 'mongoose-url-slugs';

const Schema = mongoose.Schema;

/**
 * MetadataPattern base schema
 * @type {Schema}
 */
const MetadataPatternSchema = new Schema({
	name: {
		type: String,
		unique: true,
		required: true,
		trim: true
	},
	private: {
		type: Boolean,
		default: false,
	},
	structure: [{
		key: String,
		typeId: {
			type: Schema.Types.ObjectId,
			ref: 'MetadataType',
		},
	}],
});


// add timestamp (createdAt, updatedAt)
MetadataPatternSchema.plugin(timestamp);

// add slug (slug)
MetadataPatternSchema.plugin(URLSlugs('name'));

/**
 * MetadataPattern mongoose model
 * @type {mongoose model}
 */
const MetadataPattern = mongoose.model('MetadataPattern', MetadataPatternSchema);

export default MetadataPattern;
export { MetadataPatternSchema };

