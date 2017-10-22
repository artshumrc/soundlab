import { gql, graphql } from 'react-apollo';


const recentQuery = graphql(gql`
	query recentQuery {
		posts(post_type: ["sound"]) {
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
  name: 'recentQuery',
  props: props => {
    return {
      items: props.recentQuery.posts,
    };
  },
});

export { recentQuery };
