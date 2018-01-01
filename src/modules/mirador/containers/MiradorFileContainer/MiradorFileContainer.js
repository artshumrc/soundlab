import React from 'react';

import MiradorFileViewer from '../../components/MiradorFileViewer';



const MiradorFileViewerContainer = props => {
	let miradorManifest = null;

	console.log('############')
	console.log('############')
	console.log('############')
	console.log(props);
	console.log('############')
	console.log('############')
	console.log('############')

	return (
		<MiradorFileViewer
			manifest={miradorManifest}
		/>
	);
}


export default MiradorFileViewerContainer;
