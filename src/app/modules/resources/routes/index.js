import React from 'react';
import { Route, IndexRoute } from 'react-router';
import ResourceListContainer from '../containers/ResourceListContainer';
import ResourceSingleContainer from '../containers/ResourceSingleContainer';
import EventSingleContainer from '../containers/EventSingleContainer';


export default (
  <div>
    <Route path="events/:slug" component={EventSingleContainer}></Route>
    <Route path="resources/:slug" component={ResourceSingleContainer}></Route>
    <Route path="resources" component={ResourceListContainer}></Route>
  </div>
);
