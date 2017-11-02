import { gql, graphql } from 'react-apollo'

const userSoundsQuery = graphql(gql`
	query useSoundsQuery {
		posts(post_type: ["sound"]) {
			id,
			post_title
			post_name
			post_content
			thumbnail
			audio_file
		}
	}
`, {
  name: 'userSoundsQuery',
  props: props => {
    return {
      sounds: props.userSoundsQuery.posts,
    };
  },
});

export { userSoundsQuery };
