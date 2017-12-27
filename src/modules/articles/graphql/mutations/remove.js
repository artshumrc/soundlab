import { gql, graphql } from 'react-apollo';


const articleRemove = gql`
	mutation articleRemove($id: String!) {
	articleRemove(id: $id) {
		_id
	}
}
`;

const articleRemoveMutation = graphql(articleRemove, {
	props: params => ({
		articleRemove: id => params.articleRemoveMutation({
			variables: {
				id,
			},
		}),
	}),
	name: 'articleRemoveMutation',
	options: {
		refetchQueries: ['articlesQuery', 'articleQuery'],
	},
});

export default articleRemoveMutation;
