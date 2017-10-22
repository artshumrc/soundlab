import { gql, graphql } from 'react-apollo'

const soundSingleQuery = graphql(gql`
  query post($postname: String){
    post(name: $postname){
      id
      post_title
      post_name
      post_content
			thumbnail
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
			thumbnail
			post_meta(keys: ["audio_file", "byline", "date", "external_link", "location"]) {
				meta_value
			}
		}
	}
`, {
  name: 'soundListQuery',
  props: props => {
    return {
      sounds: props.soundListQuery.posts,
    };
  },
});


export { soundSingleQuery, soundListQuery };
