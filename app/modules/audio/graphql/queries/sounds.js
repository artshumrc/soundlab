import { gql, graphql } from 'react-apollo'

const soundQuery = graphql(gql`
  query sound($postname: String){
    post(name: $postname){
      id
      post_title
      post_name
      post_content
      thumbnail
      byline {
        meta_value
      }
      date {
        meta_value
      }
      external_link {
        meta_value
      }
    },
  }
`, {
	options: ({ params }) => ({
		variables: {
			postname: params.slug,
		}
	})
});

const soundListQuery = gql`
	query soundListQuery {
		sounds {
			id,
			post_title
			post_name
			post_content
			thumbnail
			audio_file {
				meta_value
			}
			byline {
				meta_value
			}
			date {
				meta_value
			}
			external_link {
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


export { soundQuery, soundListQuery };
