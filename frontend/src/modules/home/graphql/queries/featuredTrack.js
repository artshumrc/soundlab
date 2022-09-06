import { gql, graphql } from 'react-apollo';


const featuredTrackQuery = graphql(gql`
	query featuredTrackQuery {
		posts(post_type: ["sound"], limit: 1, isFeatured: true) {
			id,
			post_title
			post_name
			post_content
			thumbnail
			audio_file
			post_meta(keys: ["byline", "date", "external_link"]) {
				meta_key
				meta_value
			}
		}
	}
`, {
	name: 'featuredTrackQuery',
	props: props => {
		return {
			tracks: props.featuredTrackQuery.posts,
		};
	},
});

export { featuredTrackQuery };
