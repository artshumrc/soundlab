import { GraphQLList, GraphQLID } from 'graphql';
import createType from 'mongoose-schema-to-graphql';

// models
import ProjectDetail from '../../../models/projectDetail';

const config = {
	name: 'ProjectDetailType',
	description: 'Project Detail base type',
	class: 'GraphQLObjectType',
	schema: ProjectDetail.schema,
	exclude: ['_id'],
};

const ProjectDetailType = createType(config);

export default ProjectDetailType;
