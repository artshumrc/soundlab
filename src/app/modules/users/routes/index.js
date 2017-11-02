import React from 'react';
import { Route, IndexRoute } from 'react-router';
import ProfileContainer from '../containers/ProfileContainer';


export default (
  <div>
    <Route path="profile" component={ProfileContainer}></Route>
  </div>
);
