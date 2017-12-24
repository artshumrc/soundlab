import { gql, graphql } from 'react-apollo';

import getCurrentProjectHostname from '../../../../lib/getCurrentProjectHostname';


const collectionCreate = gql`
mutation collectionCreate($hostname: String!, $collection: CollectionInputType!) {
	collectionCreate(hostname: $hostname, collection: $collection) {
    _id
	}
}
`;

const collectionCreateMutation = graphql(collectionCreate, {
	props: params => ({
		collectionCreate: collection => params.collectionCreateMutation({
			variables: {
				collection,
				hostname: getCurrentProjectHostname(),
			},
		}),
	}),
	name: 'collectionCreateMutation',
	options: {
		refetchQueries: ['collectionsQuery', 'collectionQuery'],
	},
});

export default collectionCreateMutation;
