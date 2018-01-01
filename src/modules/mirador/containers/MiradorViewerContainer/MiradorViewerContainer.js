import React from 'react';
import { compose } from 'react-apollo';


import fileQuery from '..../graphql/queries/detail';
import MiradorViewer from '../../components/MiradorViewer';



const MiradorViewerContainer = props => {
	let miradorManifest = null;

	return (
		<MiradorViewer
			manifest={miradorManifest}
		/>
	);
}


export default compose(
	fileQuery,
)(MiradorViewerContainer);
