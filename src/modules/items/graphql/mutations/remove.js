import { gql, graphql } from 'react-apollo';


const itemRemove = gql`
	mutation itemRemove($id: String!) {
	itemRemove(id: $id) {
		_id
	}
}
`;

const itemRemoveMutation = graphql(itemRemove, {
	props: params => ({
		itemRemove: id => params.itemRemoveMutation({
			variables: {
				id,
			},
		}),
	}),
	name: 'itemRemoveMutation',
	options: {
		refetchQueries: ['itemsQuery'],
	},
});

export default itemRemoveMutation;
