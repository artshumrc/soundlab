import { ApolloClient, createNetworkInterface } from 'react-apollo';

const client = new ApolloClient({
	networkInterface: createNetworkInterface({
		uri: process.env.REACT_APP_GRAPHQL_SERVER,
	}),
});

export default client; 
