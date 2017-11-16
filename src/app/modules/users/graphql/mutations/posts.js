import { gql, graphql } from 'react-apollo';

const postCreate = gql`
mutation postCreate($post: PostInputType!) {
	postCreate(post: $post) {
		id
	}
}
`;

const postCreateMutation = graphql(postCreate, {
	props: params => ({
		postCreate: post => params.postCreateMutation({
			variables: {
				post,
			},
		}),
	}),
	name: 'postCreateMutation',
});

export {
	postCreateMutation,
};
