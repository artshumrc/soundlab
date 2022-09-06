import { gql, graphql } from 'react-apollo';

const calendarQuery = graphql(gql`
	query {
		posts(post_type: ["event"]){
		  id
		  post_title
		  post_name

		  post_content
			thumbnail
			post_meta(keys:["start_date", "start_time", "end_date", "end_time", "short_title"]) {
				meta_key
				meta_value
			}
		}
	}
`, {
	name: 'calendarQuery',
	props: props => {
		return {
			events: props.calendarQuery.posts,
		};
	},
});

export {
  calendarQuery
};
