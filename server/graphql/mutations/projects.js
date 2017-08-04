import { GraphQLString, GraphQLNonNull } from 'graphql';

// types
import projectType from '../../types/models/project';

// api
// import Projects from '../../api/projects';

// errors
import { AuthenticationError } from '../../errors';

/**
 * GraphQL mutation project fields
 * @type {Object}
 * @property {Object} projectCreate 	Create project
 */
const projectMutationFileds = {

	projectCreate: {
		type: projectType,
		description: 'Create new project',
		args: {
			title: {
				type: new GraphQLNonNull(GraphQLString)
			},
		},
		async resolve(parent, { title }, Orpheus) {
			console.log('Orpheus', Orpheus);
			const user = Orpheus.user;
			console.log('username', user.username);
			// console.log(Orpheus.user)
			// if (passport) {

			// 	const project = {
			// 		title,
			// 	};

			// 	try {
			// 		return await Projects.create(passport.user, project);
			// 	} catch (err) {
			// 		throw err;
			// 	}

			// } throw new AuthenticationError();
		}
	}
};

export default projectMutationFileds;
