import { gql, graphql } from 'react-apollo'

const playlistSingleQuery = graphql(gql`
  query post($postname: String){
    post(name: $postname){
      id
      post_title
      post_name
      post_content
			thumbnail
			queue {
				id
				post_title
				post_name
				thumbnail
				audio_file
			}
    }
  }
`, {
	options: ({ params }) => ({
		variables: {
			postname: params.slug,
		}
	}),
	name: 'playlistQuery',
	props: props => {
		return {
			playlist: props.playlistQuery.post,
		};
	},
});

const playlistListQuery = graphql(gql`
	query playlistListQuery {
		posts(post_type: ["playlist"]) {
			id
			post_title
			post_name
			post_content
			thumbnail
			post_meta(keys: ["queue"]) {
				meta_key
				meta_value
			}
		}
	}
`, {
	name: 'playlistListQuery',
	props: props => {
		return {
			playlists: props.playlistListQuery.posts,
		};
	},
});

const playlistSoundsQuery = graphql(gql`
	query playlistSoundsQuery($post_ids: [Int]) {
		posts(post_ids: $post_ids) {
			id
			post_title
			post_name
			post_content
			thumbnail
			audio_file
		}
	}
`, {
	options: props => ({
		variables: {
			post_ids: props.queue,
		}
	}),
	name: 'playlistSoundsQuery',
	props: props => {
		return {
			sounds: props.playlistSoundsQuery.posts,
		};
	},
});

export { playlistSingleQuery, playlistListQuery, playlistSoundsQuery };
