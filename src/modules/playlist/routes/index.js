import React from 'react';
import { Route, IndexRoute } from 'react-router';

import PlaylistListContainer from '../containers/PlaylistListContainer';
import PlaylistSingleContainer from '../containers/PlaylistSingleContainer';


export default (
  <div>
    <Route path="playlists/:slug" component={PlaylistSingleContainer}></Route>
    <Route path="playlists" component={PlaylistListContainer}></Route>
  </div>
);
