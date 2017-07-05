import { GraphQLString, GraphQLNonNull } from 'graphql';

// types
import projectType from '../types/models/project';

// bll
import Projects from '../bll/projects';

// errors
import { AuthenticationError, DBError } from '../errors';


const projectFileds = {

	projectCreate: {
		type: projectType,
		args: {
			title: {
				type: new GraphQLNonNull(GraphQLString)
			},
			slug: {
				type: new GraphQLNonNull(GraphQLString)
			},
		},
		async resolve(parent, { title, slug }, { session: { passport } }) {
			const project = {
				title,
				slug,
			};

			if (passport) {
				try {
					return await Projects.create(passport.user, project);
				} catch (err) {
					console.error(err);

					// TODO: can pass validation error here if needed
					throw new DBError();
				}
			} else {
				throw new AuthenticationError();
			}
		}
	}
};

export default projectFileds;
