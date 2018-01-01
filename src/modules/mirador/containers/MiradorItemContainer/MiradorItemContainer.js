import React from 'react';
import { compose } from 'react-apollo';

import manifestQuery from '../../graphql/queries/manifest';
import MiradorItemViewer from '../../components/MiradorItemViewer';



const MiradorItemContainer = props => {
	let item = null;

	if (
		props.itemQuery
	&& props.itemQuery.project
	&& props.itemQuery.project.item
	) {
		item = props.itemQuery.project.item;
	}

	if (!item) {
		return null;
	}

	return (
		<MiradorItemViewer
			item={item}
		/>
	);
}


export default compose(
	manifestQuery,
)(MiradorItemContainer);
