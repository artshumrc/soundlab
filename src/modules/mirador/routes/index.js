import React from 'react';
import { Route } from 'react-router';
// import MiradorViewerContainer from '../containers/MiradorViewerContainer';
import MiradorFileContainer from '../containers/MiradorFileContainer';


export default (
	<div>
		<Route path="/mirador/:id" component={MiradorFileContainer} exact />
	</div>
);
