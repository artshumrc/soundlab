import React from 'react';
import { Route, IndexRoute } from 'react-router';
import About from '../components/About';


export default (
  <div>
    <Route path="about" component={About}></Route>
  </div>
);
