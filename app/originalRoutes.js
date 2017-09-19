import React from 'react'
import { Router, browserHistory, IndexRoute, Route } from 'react-router'

import App from './App'
import Home from './components/home/Home'
import HomeLayout from './components/layouts/HomeLayout'
import SinglePageLayout from './components/layouts/SinglePageLayout'
import About from './components/singlePage/About'
import Login from './components/auth/components/Login/Login'
import Contact from './components/singlePage/Contact'
import Privacy from './components/singlePage/Privacy'
import Profile from './components/profile/Profile'
import ResourceList from './components/resources/ResourceList'
import ResourceSingle from './components/resources/ResourceSingle'
import AudioUploadList from './components/audioUpload/AudioUploadList'
import AudioUploadSingle from './components/audioUpload/AudioUploadSingle'
import SubmissionList from './components/submission/SubmissionList'
import SubmissionSingle from './components/submission/SubmissionSingle'
import Search from './components/search/Search'

const routes = (
  <Router history={browserHistory}>
    <Route component={HomeLayout}>
      <Route path="/" component={App} >
        <IndexRoute component={Home}/>
        {/*<Route path=":page" component={WordExpressPage}/>*/}


        <Route path="contact" component={Contact}/>
        <Route path="login" component={Login}/>
        <Route path="privacy" component={Privacy}/>
        <Route path="profile" component={Profile}/>
        <Route path="resources" component={ResourceList}/>
        <Route path="search" component={Search}/>
        <Route path="submissions" component={SubmissionList}/>
        <Route path="uploads" component={AudioUploadList}/>
        <Route path="uploads/:post" component={AudioUploadSingle}/>
        <Route path="resources/:post" component={ResourceSingle}/>
        <Route path="submissions/:post" component={SubmissionSingle}/>
      </Route>
    </Route>
    <Route component={SinglePageLayout}>
      <Route path="/about" component={About}/>
    </Route>
  </Router>

)


export default routes
