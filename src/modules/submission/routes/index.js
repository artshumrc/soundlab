import React from 'react';
import { Route, IndexRoute } from 'react-router';

import SubmissionListContainer from '../containers/SubmissionListContainer';
import SubmissionSingleContainer from '../containers/SubmissionSingleContainer';


export default (
  <div>
    <Route path="resources/:slug" component={SubmissionSingleContainer}></Route>
    <Route path="resources" component={SubmmissionListContainer}></Route>
  </div>
);
