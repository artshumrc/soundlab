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
		args: {
			userId: {
				type: new GraphQLNonNull(GraphQLID),
			},
		},
		resolve(tenant, { userId }, context) {
			return Project.findOne(
				{ users: 
					{ $elemMatch: { userId: userId } } 
				}
			);
		}
	},
};

export default userProjectsQueryFields;
