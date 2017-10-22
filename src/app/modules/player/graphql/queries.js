import { gql, graphql } from 'react-apollo';


const tracksQuery = graphql(gql`
	query tracksQuery {
		posts(post_type: "sound") {
			id,
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
  name: 'tracksQuery',
  props: props => {
    return {
      tracks: props.tracksQuery.posts,
    };
  },
});

export { tracksQuery };
