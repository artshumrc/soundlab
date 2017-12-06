import React from 'react';
import { Route } from 'react-router';

// Collections
import Home from '../components/Home';


export default (
	<div>
		{/* Normal home landing page */}
		<Route exact path="/" component={Home} />
	</div>
);
