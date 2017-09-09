import { GraphQLID, GraphQLNonNull, GraphQLList } from 'graphql';

// types
import ProjectType from '../types/models/project';

// models
import Project from '../../models/project';

// TODO: Query for all projects under a user

const userProjectsQueryFields = {
	userProjects: {
		type: new GraphQLList(ProjectType),
		description: 'Get projects associated with user',
		resolve(obj, arg, context) {
			return Project.find(
				{ users: 
					{ $elemMatch: { userId: context.user._id } } 
				},
				function callback(err, project) {
					if (err) throw err;
				}
			);
		}
	}
};

export default userProjectsQueryFields;
