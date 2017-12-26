import React from 'react';

import MiradorViewer from '../../components/MiradorViewer';



const MiradorViewerContainer = props => {
	let miradorManifest = null;

	if (props.miradorQuery && !props.miradorQuery.loading) {
		// TODO: set mirador manifest

	}

	return (
		<MiradorViewer
			manifest={miradorManifest}
		/>
	);
}


export default MiradorViewerContainer;
