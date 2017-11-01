import React from 'react';
import { Route, IndexRoute } from 'react-router';

import PlaylistListContainer from '../containers/PlaylistListContainer';
import PlaylistContainer from '../containers/PlaylistContainer';


export default (
  <div>
    <Route path="playlists/:slug" component={PlaylistContainer}></Route>
    <Route path="playlists" component={PlaylistListContainer}></Route>
  </div>
);
