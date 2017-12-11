import { gql, graphql } from 'react-apollo';


const collectionRemove = gql`
	mutation collectionRemove($id: String!) {
	collectionRemove(id: $id) {
		_id
	}
}
`;

const collectionRemoveMutation = graphql(collectionRemove, {
	props: params => ({
		collectionRemove: id => params.collectionRemoveMutation({
			variables: {
				id,
			},
		}),
	}),
	name: 'collectionRemoveMutation',
	options: {
		refetchQueries: ['collectionsQuery'],
	},
});

export default collectionRemoveMutation;
