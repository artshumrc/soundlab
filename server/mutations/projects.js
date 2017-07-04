import { GraphQLString } from 'graphql';

// types
import projectType from '../types/models/project';

// bll
import Projects from '../bll/projects';


const projectFileds = {

	projectCreate: {
		type: GraphQLString,
		args: {
			title: {
				type: GraphQLString
			},
			slug: {
				type: GraphQLString
			},
		},
		resolve(parent, { title, slug }, { session: { passport } }) {
			try {

				const project = {
					title,
					slug,
				};

				Projects.create(passport.user, project).then(
					doc => doc,
					err => console.error(err));

			} catch (err) {
				console.error(err);
			}
			if (passport && passport.user) {
				return 'the secret';
			}
		}
	}
};

export default projectFileds;
