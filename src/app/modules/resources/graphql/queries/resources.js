import { gql, graphql } from 'react-apollo'

const resourceListQuery = graphql(gql`
  query ResourceQuery {
    posts(post_type: ["information"]) {
      id
      post_title
      post_name
      post_content
			post_meta(keys: ["info_byline"]) {
				meta_key
				meta_value
			}
    }
  }
`);


const resourceSingleQuery = graphql(gql`
  query getPost($post: String){
    post(name:$post){
      id
      post_title
      post_content
			post_meta(keys: ["info_byline"]) {
				meta_key
				meta_value
			}
    }
  }
`, {
  options: ({params}) => ({
    variables: {
      post: params.post
    }
  })
});

export { resourceListQuery, resourceSingleQuery };
