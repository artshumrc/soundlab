import { gql, graphql } from 'react-apollo';

const itemCreate = gql`
mutation itemCreate($item: ItemInputType!) {
	itemCreate(item: $item) {
    _id
	}
}
`;

const itemCreateMutation = graphql(itemCreate, {
	props: params => ({
		itemCreate: item => params.itemCreateMutation({
			variables: {
				item,
			},
		}),
	}),
	name: 'itemCreateMutation',
	options: {
		refetchQueries: ['itemsQuery', 'itemQuery'],
	},
});

export default itemCreateMutation;
