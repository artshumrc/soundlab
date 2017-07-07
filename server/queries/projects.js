import { GraphQLString } from 'graphql';

// types
import projectType from '../types/models/project';

// bll
import Projects from '../bll/projects';

// errors
import { AuthenticationError } from '../errors';

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
	projectRandom: {
		type: projectType,
		async resolve(parent, { slug }) {
			try {
				return await Projects.findOne();
			} catch (err) {
				throw err;
			}
		},
	},
	projectSecret: {
		type: projectType,
		async resolve(parent, { slug }, { session: { passport } }) {
			if (passport) {
				try {
					return await Projects.findOneSecret(passport.user);
				} catch (err) {
					throw err;
				}
			} throw new AuthenticationError();
		},
	},
};

export default projectFileds;
