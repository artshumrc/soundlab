import React from 'react';
import { Route, IndexRoute } from 'react-router';

import AuthForms from '../components/AuthForms';


export default (
  <div>
    <Route path="sign-in" component={AuthForms}></Route>
  </div>
);
