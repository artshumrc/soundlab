import { graphqlExpress, graphiqlExpress  } from 'graphql-server-express';
import { formatError } from 'apollo-errors';
import { GraphQLSchema, execute, subscribe } from 'graphql';
import { maskErrors } from 'graphql-errors';
import { createServer } from 'http';
import { PubSub } from 'graphql-subscriptions';
import { SubscriptionServer } from 'subscriptions-transport-ws';

import RootQuery from './graphql/queries/rootQuery';
import RootMutation from './graphql/mutations/rootMutation';
import RootSubscription from './graphql/subscriptions/rootSubscription';


/**
 * Root schema
 * @type {GraphQLSchema}
 */
const RootSchema = new GraphQLSchema({
	query: RootQuery,
	mutation: RootMutation,
	subscription: RootSubscription,
});

// mask error messages
maskErrors(RootSchema);

// TODO should be moved to something more scalable horizontally like Redis, MQTT
export const pubsub = new PubSub();


/**
 * Set up the graphQL HTTP endpoint
 * @param  {Object} app 	express app instance
 */
export default function setupGraphql(app) {

	app.use('/graphql', graphqlExpress({
		schema: RootSchema,
		formatError,
	}));

	app.use('/graphiql', graphiqlExpress({
		endpointURL: '/graphql',
		subscriptionsEndpoint: `ws://${process.env.WS_SERVER_HOST}:${process.env.WS_SERVER_PORT}/${process.env.WS_SERVER_URI}`
	}));

	// Wrap the Express server
	const ws = createServer(app);
	ws.listen(process.env.WS_SERVER_PORT, () => {
		console.log(`GraphQL WebSocket Server is now running on ws://${process.env.WS_SERVER_HOST}:${process.env.WS_SERVER_PORT}`);
		// Set up the WebSocket for handling GraphQL subscriptions
		const subscriptionsServer = new SubscriptionServer({
			execute,
			subscribe,
			schema: RootSchema,
			onConnect: (connectionParams, webSocket) => {
				console.log('connectionParams', connectionParams);
				// if (connectionParams.authToken) {
				// 	return validateToken(connectionParams.authToken)
				// 		.then(findUser(connectionParams.authToken))
				// 		.then((user) => {
				// 			return {
				// 				currentUser: user,
				// 			};
				// 		});
				// }
				// throw new Error('Missing auth token!');
			}
		}, {
			server: ws,
			path: '/subscriptions',
		});
	});
}
