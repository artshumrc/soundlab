import { gql, graphql } from 'react-apollo'

const resourceListQuery = graphql(gql`
  query resourceListQuery {
    posts(post_type: ["resource"], limit: 4) {
      id
      post_title
      post_name
      post_content
			thumbnail
			post_meta(keys: ["info_byline"]) {
				meta_key
				meta_value
			}
    }
  }
`, {
	name: 'resourceListQuery',
	props: props => {
		return {
			resources: props.resourceListQuery.posts,
		};
	},
});

const additionalResourceListQuery = graphql(gql`
  query additionalResourceListQuery {
    posts(post_type: ["resource"], limit: 20, skip: 4) {
      id
      post_title
      post_name
      post_content
			thumbnail
			post_meta(keys: ["info_byline"]) {
				meta_key
				meta_value
			}
    }
  }
`, {
	name: 'additionalResourceListQuery',
	props: props => {
		return {
			resources: props.additionalResourceListQuery.posts,
		};
	},
});


const resourceSingleQuery = graphql(gql`
  query resourceSingleQuery($post: String){
    post(name:$post){
      id
      post_title
      post_content
			thumbnail
			post_meta(keys: ["info_byline", "date"]) {
				meta_key
				meta_value
			}
    }
  }
`, {
	options: ({params}) => ({
		variables: {
			post: params.slug,
		}
	}),
	name: 'resourceSingleQuery',
	props: props => {
		return {
			resource: props.resourceSingleQuery.post,
		};
	},
});

const eventSingleQuery = graphql(gql`
  query($post: String){
    post(name:$post){
      id
      post_title
      post_content
			thumbnail
			post_meta(keys: ["location", "start_date", "start_time", "end_date", "end_time"]) {
				meta_key
				meta_value
			}
    }
  }
`, {
	options: ({params}) => ({
		variables: {
			post: params.slug,
		}
	}),
	name: 'eventSingleQuery',
	props: props => {
		return {
			event: props.eventSingleQuery.post,
		};
	},
});


const featuredEventQuery = graphql(gql`
  query featuredEventQuery {
    posts(post_type: ["event"], limit: 1, skip: 0) {
      id
      post_title
      post_name
      post_content
			thumbnail
			post_meta(keys: ["event_start", "date_description", "excerpt"]) {
				meta_key
				meta_value
			}
    }
  }
`, {
	name: 'featuredEventQuery',
	props: props => {
		return {
			events: props.featuredEventQuery.posts,
		};
	},
});

const resourceEventListQuery = graphql(gql`
  query resourceEventListQuery {
    posts(post_type: ["event"], limit: 20, skip: 0) {
      id
      post_title
      post_name
      post_content
			thumbnail
			post_meta(keys: ["location", "start_date", "start_time", "end_date", "end_time"]) {
				meta_key
				meta_value
			}
    }
  }
`, {
	name: 'resourceEventListQuery',
	props: props => {
		return {
			events: props.resourceEventListQuery.posts,
		};
	},
});

export {
	resourceListQuery, additionalResourceListQuery, resourceSingleQuery,
	resourceEventListQuery, featuredEventQuery, eventSingleQuery
};
