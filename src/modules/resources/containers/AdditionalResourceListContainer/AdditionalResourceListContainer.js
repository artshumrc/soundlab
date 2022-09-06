import React from 'react';
import { compose } from 'react-apollo';

import AdditionalResourceList from '../../components/AdditionalResourceList';
import { additionalResourceListQuery } from '../../graphql/queries/resources';


const AdditionalResourceListContainer = props => (
	<AdditionalResourceList
		resources={props.resources}
	/>
);

export default compose(
	additionalResourceListQuery
)(AdditionalResourceListContainer);
