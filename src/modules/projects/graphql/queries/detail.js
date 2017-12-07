import { gql, graphql } from 'react-apollo';

const query = gql`
	query projectQuery($slug: String) {
		project(slug: $slug) {
	    _id
		}
	}
`;

const projectQuery = graphql(query, {
	name: 'projectQuery',
  options: ({ params }) => ({
    variables: {
      slug: params.slug,
    }
  }),
  props: props => {
    return {
      project: props.projectQuery.project,
    };
  },
});

export default projectQuery;
