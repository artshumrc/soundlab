import { gql, graphql } from 'react-apollo';

const collectionUpdate = gql`
	mutation collectionUpdate($collection: CollectionInputType!) {
	collectionUpdate(collection: $collection) {
		_id
	}
}
`;

const collectionUpdateMutation = graphql(collectionUpdate, {
	props: params => ({
		collectionUpdate: collection => params.collectionUpdateMutation({
			variables: {
				collection,
			},
		}),
	}),
	name: 'collectionUpdateMutation',
	options: {
		refetchQueries: ['collectionsQuery', 'collectionQuery'],
	},
});


export default collectionUpdateMutation;
