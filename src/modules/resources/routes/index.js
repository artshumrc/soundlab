import React from 'react';
import { Route, IndexRoute } from 'react-router';
import EventSingleContainer from '../containers/EventSingleContainer';
import EventListContainer from '../containers/EventListContainer';


export default (
	<div>
		<Route path="events" component={EventListContainer}></Route>
		<Route path="events/:slug" component={EventSingleContainer}></Route>
	</div>
);
