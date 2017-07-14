import mongoose from 'mongoose';
import timestamp from 'mongoose-timestamp';
import URLSlugs from 'mongoose-url-slugs';

const Schema = mongoose.Schema;

const metadataTypes = ['String', 'Number', 'Boolean', 'Array/String', 'Array/Number', 'Array/Boolean'];

/**
 * MetadataPattern base schema
 * @type {Schema}
 */
const MetadataPatternSchema = new Schema({
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
	structure: [{
		key: {
			type: String,
			lowercase: true
		},
		title: String,
		type: {
			type: String,
			enum: [...metadataTypes, 'patternId'],
		},
		patterId: {
			type: Schema.Types.ObjectId,
			ref: 'MetadataPattern',
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
export { MetadataPatternSchema, metadataTypes };

