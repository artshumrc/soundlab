import React from 'react';
import { Route, IndexRoute } from 'react-router';
import ProfileContainer from '../containers/ProfileContainer';
import SubmitContainer from '../containers/SubmitContainer';


export default (
  <div>
    <Route path="profile" component={ProfileContainer}></Route>
    <Route path="submit" component={SubmitContainer}></Route>
  </div>
);
