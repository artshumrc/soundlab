import { gql, graphql } from 'react-apollo';

const articleUpdate = gql`
	mutation articleUpdate($article: ArticleInputType!) {
	articleUpdate(article: $article) {
		_id
	}
}
`;

const articleUpdateMutation = graphql(articleUpdate, {
	props: params => ({
		articleUpdate: article => params.articleUpdateMutation({
			variables: {
				article,
			},
		}),
	}),
	name: 'articleUpdateMutation',
	options: {
		refetchQueries: ['articleQuery'],
	},
});


export default articleUpdateMutation;
