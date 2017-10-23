import React from 'react';
import AdditionalResourceItem from '../AdditionalResourceItem';

const AdditionalResourceList = props => (
	<div>
    {props.resources.map((resource) =>
      <AdditionalResourceItem
				key={resource.id}
				resource={resource}
			/>
    )}
	</div>
);

AdditionalResourceList.defaultProps = {
	resources: [],
};

export default AdditionalResourceList;
