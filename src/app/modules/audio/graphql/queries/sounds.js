import { gql, graphql } from 'react-apollo'

const soundSingleQuery = graphql(gql`
  query sound($postname: String){
    post(name: $postname){
      id
      post_title
      post_name
      post_content
			thumbnail {
				meta_value
			}
			post_meta(keys: ["byline", "date", "external_link"]) {
				meta_value
			}
    }
  }
`, {
	options: ({ params }) => ({
		variables: {
			postname: params.slug,
		}
	})
});

const soundListQuery = graphql(gql`
	query soundListQuery {
		posts(post_type: ["sound"]) {
			id,
			post_title
			post_name
			post_content
			thumbnail {
				meta_value
			}
			post_meta(keys: ["audio_file", "byline", "date", "external_link"]) {
				meta_value
			}
		}
	}
`, {
	options: ({params}) => ({
		variables: {
			sounds: params.sounds
		}
	})
});


export { soundSingleQuery, soundListQuery };
