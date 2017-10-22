import { gql, graphql } from 'react-apollo';


const recentQuery = graphql(gql`
	query recentQuery {
		posts(post_type: ["sound"]) {
			id,
			post_title
			post_name
			post_content
			thumbnail {
				meta_value
			}
			post_meta(keys: ["byline", "date", "external_link"]) {
				meta_key
				meta_value
			}
		}
	}
`, {
  name: 'recentQuery',
  props: props => {
    return {
      items: props.recentQuery.posts,
    };
  },
});

export { recentQuery };
