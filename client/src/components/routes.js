import React from 'react';
import {Route} from 'react-router';
import Home from './home/Home';
import Page from './pages/Page/Page';

export default (
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/page/new" component={Page} />
    <Route path="/page" component={Page} />
  </div>
);
