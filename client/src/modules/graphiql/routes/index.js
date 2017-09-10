import React from 'react';
import { Route } from 'react-router';
import GraphiQL from '../components/graphiql';

export default (
	<div>
		{/* GraphiQL UI route -- only if NODE_ENV not production */}
		{process.env.NODE_ENV !== 'production' ?
			<Route exact path="/graphiql" component={GraphiQL} />
    : ''}
	</div>
);
