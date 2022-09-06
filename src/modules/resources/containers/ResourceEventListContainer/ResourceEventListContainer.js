import React from 'react'
import { compose } from 'react-apollo';

import ResourceEventList from '../../components/ResourceEventList';
import { resourceEventListQuery } from '../../graphql/queries/resources';


const ResourceEventListContainer = props => (
	<ResourceEventList
		events={props.events}
	/>
);


export default compose(
	resourceEventListQuery,
)(ResourceEventListContainer);
