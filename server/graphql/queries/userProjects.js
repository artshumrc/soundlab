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
			return Project.find(
				{ users: 
					{ $elemMatch: { userId: context.user._id } } 
				},
				function callback(err, project) {
					if (err) console.log(err);
					console.log('project: ', project);
					console.log('project.title: ', project[0].title);
					console.log('project.users: ', project[0].users);
				}
			);
		}
	}
};

export default userProjectsQueryFields;
