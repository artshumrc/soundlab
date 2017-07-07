import { GraphQLString, GraphQLNonNull } from 'graphql';

// types
import projectType from '../types/models/project';

// bll
import Projects from '../bll/projects';

// errors
import { AuthenticationError } from '../errors';


const projectFileds = {

	projectCreate: {
		type: projectType,
		args: {
			title: {
				type: new GraphQLNonNull(GraphQLString)
			},
		},
		async resolve(parent, { title, slug }, { session: { passport } }) {
			if (passport) {

				const project = {
					title,
					slug,
				};

				try {
					return await Projects.create(passport.user, project);
				} catch (err) {
					throw err;
				}

			} throw new AuthenticationError();
		}
	}
};

export default projectFileds;
