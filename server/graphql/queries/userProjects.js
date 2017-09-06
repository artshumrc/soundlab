import { GraphQLID, GraphQLNonNull } from 'graphql';

// types
import ProjectType from '../types/models/project';

// models
import Project from '../../models/project';

// TODO: Query for all projects under a user

const userProjectsQueryFields = {
	userProjects: {
		type: ProjectType,
		description: 'Get projects associated with user',
		resolve(parent, { user, tenant }) {
			console.log('user: ', user);
			return Project.findOne(
				{ users: 
					{ $elemMatch: { userId: user._id } } 
				}
			);
		}
	}
};

export default userProjectsQueryFields;
