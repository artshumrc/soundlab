import { GraphQLString, GraphQLNonNull, GraphQLObjectType } from 'graphql';

// types
import projectType from '../../types/models/project';

// bll
import Projects from '../../bll/projects';

// errors
import { AuthenticationError } from '../../errors';

/**
 * raphQL project query fileds
 * @type {Object}
 * @property {Object} projectById 	Get project by _id
 * @property {Object} projectBySlug Get project by slug
 */
const projectQueryFileds = {
	projectById: {
		type: projectType,
		description: 'Find project by _id',
		args: {
			_id: {
				type: new GraphQLNonNull(GraphQLString),
			}
		},
		async resolve(parent, {_id}) {
			try {
				return await Projects.findById(_id);
			} catch (err) {
				throw err;
			}
		},
	},
	projectBySlug: {
		type: projectType,
		description: 'Find project by slug',
		args: { slug: { type: GraphQLString } },
		async resolve(parent, { slug }) {
			try {
				return await Projects.findBySlug(slug);
			} catch (err) {
				throw err;
			}
		},
	},
};

export default projectQueryFileds;
