import React from 'react';
import { Route, IndexRoute } from 'react-router';

import SoundListContainer from '../containers/SoundListContainer';
import SoundContainer from '../containers/SoundContainer';


export default (
  <div>
    <Route path="sounds/:slug" component={SoundContainer}></Route>
    <Route path="sounds" component={SoundListContainer}></Route>
  </div>
);
