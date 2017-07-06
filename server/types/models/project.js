import createType from 'mongoose-schema-to-graphql';

// models
import Project from '../../models/project';

// types
import tenantType from './tenant';

const config = {
	name: 'projectType',
	description: 'Project base schema',
	class: 'GraphQLObjectType',
	schema: Project.schema,
	exclude: ['_id'],
	extend: {
		tenantIds: {
			type: tenantType,
		},
	}
};

const projectType = createType(config);

export default projectType;
