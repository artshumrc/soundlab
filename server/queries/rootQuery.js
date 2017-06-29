import { GraphQLObjectType } from 'graphql';

import projectFileds from './projects';

const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		...projectFileds,
	}
});

export default RootQuery;
