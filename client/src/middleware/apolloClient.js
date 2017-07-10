import { ApolloClient, createNetworkInterface } from 'react-apollo';

const client = new ApolloClient({
	networkInterface: createNetworkInterface({
		uri: `${process.env.REACT_APP_GRAPHQL_SERVER}/${process.env.REACT_APP_GRAPHQL_URI}`,
		opts: {
			credentials: 'include',
		}
	}),
});

export default client; 
