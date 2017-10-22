import React from 'react'
import { compose } from 'react-apollo';

import ResourceList from '../../components/ResourceList';
import { resourceListQuery } from '../../graphql/queries/resources';


const ResourceListContainer = props => (
	<ResourceList />
);


export default compose(
	resourceListQuery,
)(ResourceListContainer);
