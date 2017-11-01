import { gql, graphql } from 'react-apollo'

const pageQuery = graphql(gql`
  query pageQuery($post: String){
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
  name: 'pageQuery',
  props: props => {
    return {
      page: props.pageQuery.post,
    };
  },
});


export {
	pageQuery,
};
