import { gql, graphql } from 'react-apollo';


const tracksQuery = graphql(gql`
	query tracksQuery {
		posts(post_type: "audio_upload") {
			id,
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
		}
	}
`, {
  name: 'tracksQuery',
  props: props => {
    return {
      tracks: props.tracksQuery.posts,
    };
  },
});

export { tracksQuery };
