import { GraphQLString } from 'graphql';

// types
import projectType from '../types/models/project';

// bll
import Projects from '../bll/projects';


const projectFileds = {
	projectById: {
		type: projectType,
		args: {
			_id: {
				type: GraphQLString
			}
		},
		resolve(parent, {_id}) {
			return Projects.findById(_id).then(
				doc => doc,
				err => console.error(err));
		},
	},
	projectBySlug: {
		type: projectType,
		args: { slug: { type: GraphQLString } },
		resolve(parent, { slug }) {
			return Projects.findBySlug(slug).then(
				doc => doc,
				err => console.error(err));
		},
	},
};

export default projectFileds;
