// import { GraphQLString, GraphQLNonNull } from 'graphql';

// types
import ProjectType from '../types/models/project';

// models
import Project from '../../models/project';

// errors
import { AuthenticationError } from '../../errors';

const projectMutationFileds = {

	projectCreate: {
		type: ProjectType,
		description: 'Create new project',
		resolve(parent, { title }, { user, tenant }) {

			// only a logged in user and coming from the admin page, can create new project
			if (user && tenant.adminPage) {
				return Project.createByOwner(user._id);
			}
			throw AuthenticationError();
		}
	}
};

export default projectMutationFileds;
