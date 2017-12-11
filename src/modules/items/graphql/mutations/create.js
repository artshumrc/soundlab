import { gql, graphql } from 'react-apollo';

const itemCreate = gql`
mutation itemCreate($item: ProjectInputType!) {
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
});

export default itemCreateMutation;
