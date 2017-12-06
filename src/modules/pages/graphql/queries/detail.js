import { gql, graphql } from 'react-apollo'

const pageDetailQuery = graphql(gql`
  query pageDetailQuery($post: String){
    post(name: $post){
      id
      post_title
      post_content
			thumbnail
    }
  }
`, {
  options: ({ params }) => ({
    variables: {
      post: params.slug,
    }
  }),
  name: 'pageDetailQuery',
  props: props => {
    return {
      page: props.pageDetailQuery.post,
    };
  },
});


export {
	pageDetailQuery,
};
