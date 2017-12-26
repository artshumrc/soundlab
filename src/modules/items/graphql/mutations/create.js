import { gql, graphql } from 'react-apollo';

import getCurrentProjectHostname from '../../../../lib/getCurrentProjectHostname';


const itemCreate = gql`
mutation itemCreate($hostname: String!, $item: ItemInputType!) {
	itemCreate(hostname: $hostname, item: $item) {
    _id
	}
}
`;

const itemCreateMutation = graphql(itemCreate, {
	props: params => ({
		itemCreate: item => params.itemCreateMutation({
			variables: {
				item,
				hostname: getCurrentProjectHostname(),
			},
		}),
	}),
	name: 'itemCreateMutation',
	options: {
		refetchQueries: ['itemsQuery', 'itemQuery'],
	},
});

export default itemCreateMutation;
