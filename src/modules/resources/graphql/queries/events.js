import { gql, graphql } from 'react-apollo';

const eventsUpcomingQuery = graphql(gql`
	query {
		events(post_type: ["event"], upcoming: true){
		  id
		  post_title
		  post_name
		  post_content
			thumbnail
			post_meta(keys:["start_date", "start_time", "end_date", "end_time"]) {
				meta_key
				meta_value
			}
		}
	}
`, {
	name: 'eventsQuery',
	props: props => {
		return {
			eventsUpcoming: props.eventsQuery.events,
		};
	},
});

const eventsPastQuery = graphql(gql`
	query {
		events(post_type: ["event"]){
		  id
		  post_title
		  post_name
		  post_content
      thumbnail
			post_meta(keys:["start_date", "start_time", "end_date", "end_time"]) {
				meta_key
				meta_value
			}
		}
	}
`, {
	name: 'eventsQuery',
	props: props => {
		return {
			eventsPast: props.eventsQuery.events,
		};
	},
});

export {
  eventsUpcomingQuery, eventsPastQuery
};
