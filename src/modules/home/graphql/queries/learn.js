import { gql, graphql } from 'react-apollo';


const learnQuery = graphql(gql`
	query learnQuery {
		posts(post_type: ["event"], limit: 1, isFeatured: true) {
			id,
			post_title
			post_name
			post_content
			thumbnail
			post_meta(keys: ["byline", "date_description", "excerpt"]) {
				meta_key
				meta_value
			}
		}
	}
`, {
  name: 'learnQuery',
  props: props => {
    return {
      events: props.learnQuery.posts,
    };
  },
});

export { learnQuery };
