import React from 'react';
import { Route, IndexRoute } from 'react-router';

import SoundListCategoryContainer from '../containers/SoundListCategoryContainer';
import SoundListContainer from '../containers/SoundListContainer';
import SoundContainer from '../containers/SoundContainer';


export default (
  <div>
    <Route path="waves/category/:category_slug" component={SoundListCategoryContainer}></Route>
    <Route path="waves/:slug" component={SoundContainer}></Route>
    <Route path="waves" component={SoundListContainer}></Route>
  </div>
);
