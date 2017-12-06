import React from 'react';
import { Route } from 'react-router';
import MiradorViewerContainer from '../containers/MiradorViewerContainer';


export default (
	<div>

		<Route path="/viewer/:viewerId" component={MiradorViewerContainer} exact />

	</div>
);
