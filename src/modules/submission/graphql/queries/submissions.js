import { gql, graphql } from 'react-apollo'

const submissionListQuery = graphql(gql`
  query SubmissionQuery {
    posts(post_type: ["user_submission"]) {
      id,
      post_title
      post_name
      post_content
      thumbnail
			post_meta(keys: ["submission_byline", "submission_date", "submission_link"]) {
				meta_key
				meta_value
			}
    }
  }
`);


const submissionSingleQuery = graphql(gql`
  query getPost($post: String){
    post(name:$post){
      id
      post_title
      post_content
      thumbnail
			post_meta(keys: ["submission_byline", "submission_date", "submission_link"]) {
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

export { submissionListQuery, submissionSingleQuery };
