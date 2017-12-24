import { gql, graphql } from 'react-apollo';

const collectionCreate = gql`
mutation collectionCreate($collection: CollectionInputType!) {
	collectionCreate(collection: $collection) {
    _id
	}
}
`;

const collectionCreateMutation = graphql(collectionCreate, {
	props: params => ({
		collectionCreate: collection => params.collectionCreateMutation({
			variables: {
				collection,
			},
		}),
	}),
	name: 'collectionCreateMutation',
	options: {
		refetchQueries: ['collectionsQuery', 'collectionQuery'],
	},
});

export default collectionCreateMutation;
