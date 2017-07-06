import mongoose from 'mongoose';
import timestamp from 'mongoose-timestamp';
import URLSlugs from 'mongoose-url-slugs';

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
	title: {
		type: String,
		unique: true,
		required: true,
		trim: true
	},
});


// add timestamp (createdAt, updatedAt)
ProjectSchema.plugin(timestamp);

// add slug (slug)
ProjectSchema.plugin(URLSlugs('title'));


const Project = mongoose.model('Project', ProjectSchema);

export default Project;
