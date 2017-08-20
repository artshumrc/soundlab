import { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLString } from 'graphql';
import createType from 'mongoose-schema-to-graphql';

// models
import Project from '../../../models/project';
import Collection from '../../../models/collection';

// types
import TenantType from './tenant';
import CollectionType from './collection';
import UserType from './user';

const config = {
	name: 'ProjectType',
	description: 'Project base type',
	class: 'GraphQLObjectType',
	schema: Project.schema,
	exclude: ['_id', 'users'],
	extend: {
		collections: {
			type: new GraphQLList(CollectionType),
			description: 'Get all project collection',
			resolve(project, args, context) {
				return Collection.findByProjectId(project._id);
			}
		},
		users: {
			type: new GraphQLObjectType({
				name: 'ProjectUsersType',
				fields: {
					user: {
						type: UserType,
						resolve(projectUser, args, context) {
							return User.findById(projectUser.userId);
						}
					},
					role: {
						type: GraphQLString,
					}
				}
			}),
			resolve(project, args, context) {
				return project.users;
			}
		}
	}
};

const ProjectType = createType(config);

export default ProjectType;
