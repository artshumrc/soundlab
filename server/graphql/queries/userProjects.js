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
		resolve(obj, arg, context) {
			console.log('user: ', context);
			return Project.find({}
				// { users: 
				// 	{ $elemMatch: { _id: context.user._id } } 
				// }
			);
		}
	}
};

export default userProjectsQueryFields;
