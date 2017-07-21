import mongoose from 'mongoose';
import timestamp from 'mongoose-timestamp';
import URLSlugs from 'mongoose-url-slugs';

const Schema = mongoose.Schema;

const MiradorSchema = new Schema({
	title: {
		type: String,
		required: true,
		trim: true,
		index: true
	},
	label: {
		type: String,
		required: true,
		trim: true,
		index: true
	},
	abbr: {
		type: String,
		required: true,
		trim: true,
		index: true
	},
	author: {
		type: String,
		required: true,
		trim: true,
		index: true
	},
	seeAlso: {
		type: String,
		required: true,
		trim: true,
		index: true
	},
	attr: {
		type: String,
		required: true,
		trim: true,
		index: true
	},
	images: [{
		type: Schema.Types.ObjectId,
		ref: 'Image',
		index: true
	}],
});


// add timestamp (createdAt, updatedAt)
MiradorSchema.plugin(timestamp);

// add slug (slug)
MiradorSchema.plugin(URLSlugs('title'));

const Mirador = mongoose.model('Project', MiradorSchema);

export default Mirador;
export { MiradorSchema };
