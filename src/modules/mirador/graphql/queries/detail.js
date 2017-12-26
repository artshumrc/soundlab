import { gql, graphql } from 'react-apollo';

import getCurrentProjectHostname from '../../../../lib/getCurrentProjectHostname';


const query = gql`
	query getMirador($id: String!) {
	  miradorById(_id: $id) {
	    title,
	    label,
	    abbr,
	    author,
	    seeAlso,
	    attribution,
	    slug,
	    remoteUri,
	    images {
	      name
	      type
	      path
	      thumbPath
	    }
	  }
	}
`;

const miradorQuery = graphql(query, {
	name: 'miradorQuery',
	options: ({ params })=> ({
		variables: {
			hostname: getCurrentProjectHostname(),
			id: params.id
		}
	})
});


export default miradorQuery;
