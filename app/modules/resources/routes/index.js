import React from 'react';
import { Route, IndexRoute } from 'react-router';
import ResourceList from '../components/ResourceList';


export default (
  <div>
    <Route path="resources" component={ResourceList}></Route>
  </div>
);
