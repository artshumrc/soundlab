import React from 'react';

import MiradorViewer from '../../components/MiradorViewer';



const MiradorViewerContainer = props => {
	let miradorManifest = null;

	return (
		<MiradorViewer
			manifest={miradorManifest}
		/>
	);
}


export default MiradorViewerContainer;
