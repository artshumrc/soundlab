import { GraphQLInputObjectType, GraphQLString, GraphQLNonNull } from 'graphql';

const ProjectDetailInputType = new GraphQLInputObjectType({
	name: 'ProjectDetailInputType',
	fields: {
		title: {
			type: new GraphQLNonNull(GraphQLString)
		},
	}
});

export default ProjectDetailInputType;
