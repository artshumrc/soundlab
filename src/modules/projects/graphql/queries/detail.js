import { gql, graphql } from 'react-apollo';

const query = gql`
	query projectQuery {
		project {
	    _id
			title
			slug
			hostname
			description
		}
	}
`;

const projectQuery = graphql(query, {
	name: 'projectQuery',
});

export default projectQuery;
