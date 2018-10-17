import React from 'react';
import { Route, IndexRoute } from 'react-router';
import ResourceListContainer from '../containers/ResourceListContainer';
import ResourceSingleContainer from '../containers/ResourceSingleContainer';
import EventSingleContainer from '../containers/EventSingleContainer';
import EventListContainer from '../containers/EventListContainer';


export default (
	<div>
		<Route path="events" component={EventListContainer}></Route>
		<Route path="events/:slug" component={EventSingleContainer}></Route>
		<Route path="resources/:slug" component={ResourceSingleContainer}></Route>
		<Route path="directory" component={ResourceListContainer}></Route>
	</div>
);
