import { gql, graphql } from 'react-apollo';

const itemUpdate = gql`
	mutation itemUpdate($item: ItemInputType!) {
	itemUpdate(item: $item) {
		_id
	}
}
`;

const itemUpdateMutation = graphql(itemUpdate, {
	props: params => ({
		itemUpdate: item => params.itemUpdateMutation({
			variables: {
				item,
			},
		}),
	}),
	name: 'itemUpdateMutation',
	options: {
		refetchQueries: ['itemListQuery'],
	},
});


export default itemUpdateMutation;
