import React from 'react'
import { compose } from 'react-apollo';

import ResourceSingle from '../../components/ResourceSingle';
import { resourceSingleQuery } from '../../graphql/queries/resources';


const ResourceSingleContainer = props => (
	<ResourceSingle />
);


export default compose(
	resourceSingleQuery,
)(ResourceSingleContainer);
