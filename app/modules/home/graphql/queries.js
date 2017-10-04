import { gql, graphql } from 'react-apollo';


const homeRecentQuery = graphql(gql`
	query homeRecentQuery {
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
			sound_cloud_link {
				meta_value
			}
		}
	}
`, {
  name: 'homeRecentQuery',
  props: props => {
    return {
      items: props.homeRecentQuery.posts,
    };
  },
});

export { homeRecentQuery };
