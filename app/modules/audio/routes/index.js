import React from 'react';
import { Route, IndexRoute } from 'react-router';
import SoundList from '../components/SoundList';


export default (
  <div>
    <Route path="audio" component={SoundList}></Route>
  </div>
);
