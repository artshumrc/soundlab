import { gql, graphql } from 'react-apollo';

const collectionCreate = gql`
mutation collectionCreate($collection: ProjectInputType!) {
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
});

export default collectionCreateMutation;
