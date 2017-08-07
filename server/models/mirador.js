import mongoose from 'mongoose';
import timestamp from 'mongoose-timestamp';
import URLSlugs from 'mongoose-url-slugs';
import {ImageSchema} from './image';

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
	attribution: {
		type: String,
		required: true,
		trim: true,
		index: true
	},
	remoteUri: {
		type: String,
	},
	images: [ImageSchema],
});


// add timestamp (createdAt, updatedAt)
MiradorSchema.plugin(timestamp);

// add slug (slug)
MiradorSchema.plugin(URLSlugs('title'));

const Mirador = mongoose.model('Mirador', MiradorSchema);

export default Mirador;
export { MiradorSchema };
