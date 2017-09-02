import { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLString } from 'graphql';
import createType from 'mongoose-schema-to-graphql';

// models
import Project from '../../../models/project';
import Collection from '../../../models/collection';

// types
import TenantType from './tenant';
import CollectionType from './collection';
import UserType from './user';
import TagType, { TagInputType } from './tag';

const config = {
	name: 'ProjectType',
	description: 'Project base query type',
	class: 'GraphQLObjectType',
	schema: Project.schema,
	exclude: ['_id'],
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

// const configInput = {
// 	name: 'ProjectInputType',
// 	description: 'Project base input type',
// 	class: 'GraphQLInputObjectType',
// 	schema: Project.schema,
// 	exclude: ['_id', 'slug', 'users', 'createdAt', 'updatedAt'],
// };

const configCreate = {
	name: 'ProjectCreateInputType',
	description: 'Project Schema base create input type',
	class: 'GraphQLInputObjectType',
	schema: Project.schema,
	exclude: ['_id', 'slug', 'createdAt', 'updatedAt'],
	exted: {
		tags: {
			type: new GraphQLList(TagInputType),
		},
	}
};

const configUpdate = {
	name: 'ProjectUpdateInputType',
	description: 'Project Schema base update input type',
	class: 'GraphQLInputObjectType',
	schema: Project.schema,
	exclude: ['_id', 'slug', 'collectionId', 'createdAt', 'updatedAt'],
	extend: {
		tags: {
			type: new GraphQLList(TagInputType),
		},
	}
};

const ProjectType = createType(config);
const ProjectCreateInputType = createType(configCreate);
const ProjectUpdateInputType = createType(configUpdate);

export default ProjectType;
export { ProjectCreateInputType, ProjectUpdateInputType };
