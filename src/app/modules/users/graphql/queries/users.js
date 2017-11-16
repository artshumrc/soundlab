import { gql, graphql } from 'react-apollo'

const userSoundsQuery = graphql(gql`
	query userSoundsQuery {
		userPosts(post_type: ["user_submission"]) {
			id
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
      sounds: props.userSoundsQuery.userPosts,
    };
  },
});

export { userSoundsQuery };
