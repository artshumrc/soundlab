import graphqlHTTP from 'express-graphql';
import { formatError } from 'apollo-errors';

// graphql
import RootSchema from './rootSchema';

export default function setupGraphql(app) {
	// GraphQL server
	app.use('/graphql', graphqlHTTP({
		schema: RootSchema,
		formatError,
		graphiql: true
	}));
}
