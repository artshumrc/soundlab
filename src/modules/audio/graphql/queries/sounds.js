import { gql, graphql } from 'react-apollo'

const soundSingleQuery = graphql(gql`
  query post($postname: String){
    post(name: $postname){
      id
      post_title
      post_name
      post_content
			thumbnail
			audio_file
			post_meta(keys: ["byline", "date", "external_link", "location", "duration"]) {
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
  name: 'soundQuery',
  props: props => {
    return {
      sound: props.soundQuery.post,
    };
  },
});

const soundListQuery = graphql(gql`
	query soundListQuery {
		posts(post_type: ["sound"]) {
			id,
			post_title
			post_name
			post_content
			thumbnail
			audio_file
			post_meta(keys: ["byline", "date", "external_link", "location", "duration"]) {
				meta_key
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

const soundListCategoryQuery = graphql(gql`
	query soundListCategoryQuery($term_slug: String) {
		category(term_slug: $term_slug) {
			posts(post_type: ["sound"]) {
				id,
				post_title
				post_name
				post_content
				thumbnail
				audio_file
				post_meta(keys: ["byline", "date", "external_link", "location"]) {
					meta_key
					meta_value
				}
			}
		}
	}
`, {
	options: ({ params }) => {
		return {
			variables: {
				term_slug: params.category_slug,
			}
		};
	},
  name: 'soundListCategoryQuery',
  props: props => {
    return {
      category: props.soundListCategoryQuery.category,
    };
  },
});


export { soundSingleQuery, soundListQuery, soundListCategoryQuery };
