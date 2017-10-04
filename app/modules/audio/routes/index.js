import React from 'react';
import { Route, IndexRoute } from 'react-router';
import AudioUploadList from '../components/AudioUploadList';


export default (
  <div>
    <Route path="audio" component={AudioUploadList}></Route>
  </div>
);
