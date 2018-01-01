import React from 'react';
import { compose } from 'react-apollo';

import fileQuery from '../../graphql/queries/detail';
import MiradorFileViewer from '../../components/MiradorFileViewer';



const MiradorFileContainer = props => {
	let file = null;

	if (
		props.fileQuery
	&& props.fileQuery.project
	&& props.fileQuery.project.file
	) {
		file = props.fileQuery.project.file;
	}


	if (!file) {
		return null;
	}

	return (
		<MiradorFileViewer
			file={file}
		/>
	);
}


export default compose(
	fileQuery,
)(MiradorFileContainer);
