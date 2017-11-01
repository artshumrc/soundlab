import { gql, graphql } from 'react-apollo'

const playlistSingleQuery = graphql(gql`
  query post($postname: String){
    post(name: $postname){
      id
      post_title
      post_name
      post_content
			thumbnail
			post_meta(keys: ["audio_file", "byline", "date", "external_link", "location"]) {
				meta_key
				meta_value
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
			id,
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

export { playlistSingleQuery, playlistListQuery };
