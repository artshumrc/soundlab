import React from 'react';
import { Route, IndexRoute } from 'react-router';
import ResourceListContainer from '../containers/ResourceListContainer';
import ResourceSingleContainer from '../containers/ResourceSingleContainer';


export default (
  <div>
    <Route path="resources/:slug" component={ResourceSingleContainer}></Route>
    <Route path="resources" component={ResourceListContainer}></Route>
  </div>
);
