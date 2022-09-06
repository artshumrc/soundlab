import React from 'react'
import { compose } from 'react-apollo';

import ResourceSingle from '../../components/ResourceSingle';
import { resourceSingleQuery } from '../../graphql/queries/resources';


const ResourceSingleContainer = props => (
	<ResourceSingle
		resource={props.resource}
	/>
);


export default compose(
	resourceSingleQuery,
)(ResourceSingleContainer);
