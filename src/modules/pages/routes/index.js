import React from 'react';
import { Route, IndexRoute } from 'react-router';
import PageContainer from '../containers/PageContainer';


export default (
  <div>
    <Route path=":slug" component={PageContainer}></Route>
  </div>
);
