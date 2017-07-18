import { GraphQLList } from 'graphql';
import createType from 'mongoose-schema-to-graphql';

// models
import Project from '../../models/project';

// types
import tenantType from './tenant';
import userType from './user';

const config = {
	name: 'projectType',
	description: 'Project base schema',
	class: 'GraphQLObjectType',
	schema: Project.schema,
	exclude: ['_id'],
	extend: {
		userId: {
			type: userType,
		},
		tenantIds: {
			type: new GraphQLList(tenantType),
		},
	}
};

const projectType = createType(config);

export default projectType;
