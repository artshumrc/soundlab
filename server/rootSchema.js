import { GraphQLSchema } from 'graphql';
import { maskErrors } from 'graphql-errors';

import RootQuery from './queries/rootQuery';
import RootMutation from './mutations/rootMutation';


const RootSchema = new GraphQLSchema({
	query: RootQuery,
	mutation: RootMutation,
});

// mask error messages
maskErrors(RootSchema);

export default RootSchema;
