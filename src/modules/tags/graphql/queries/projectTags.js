import { gql, graphql } from 'react-apollo';

import getCurrentProjectHostname from '../../../../lib/getCurrentProjectHostname';


const query = gql`
	query projectQuery($hostname: String) {
		project(hostname: $hostname) {
	    _id
      tags
		}
	}
`;

const projectQuery = graphql(query, {
	name: 'projectQuery',
	options: ({ params }) => ({
		variables: {
			hostname: getCurrentProjectHostname(),
		}
	}),
});

export default projectQuery;
