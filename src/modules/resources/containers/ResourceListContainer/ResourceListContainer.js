import React from 'react'
import { compose } from 'react-apollo';

import ResourceList from '../../components/ResourceList';
import { resourceListQuery, featuredEventQuery } from '../../graphql/queries/resources';


const ResourceListContainer = props => (
	<ResourceList
		resources={props.resources}
		events={props.events}
	/>
);


export default compose(
	resourceListQuery,
	featuredEventQuery,
)(ResourceListContainer);
