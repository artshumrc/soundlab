import React from 'react'
import { IndexRoute, Route } from 'react-router'
import App from './App.js'
import Home from './components/home/home'
import HomeLayout from './components/layouts/HomeLayout'
import About from './components/singlePage/about'
import Contact from './components/singlePage/contact'
import Privacy from './components/singlePage/privacy'
import InformationList from './components/information/InformationList'
import InformationSingle from './components/information/InformationSingle'
import AudioUploadList from './components/audioUpload/AudioUploadList'
import AudioUploadSingle from './components/audioUpload/AudioUploadSingle'
import SubmissionList from './components/submission/SubmissionList'
import SubmissionSingle from './components/submission/SubmissionSingle'
import Search from './components/search/Search'
import { WordExpressPage } from 'wordexpress-components'
import PostSingle from './components/posts/PostSingle.js'
import Layouts from './components/layouts/layouts.js'

const routes = (
  <Route component={HomeLayout}>
    <Route path="/" component={App} >
      <IndexRoute component={Home}/>
      {/*<Route path=":page" component={WordExpressPage}/>*/}

      <Route path="about" component={About}/>
      <Route path="contact" component={Contact}/>
      <Route path="privacy" component={Privacy}/>
      <Route path="information" component={InformationList}/>
      <Route path="search" component={Search}/>
      <Route path="submissions" component={SubmissionList}/>
      <Route path="uploads" component={AudioUploadList}/>
      <Route path="uploads/:post" component={AudioUploadSingle}/>
      <Route path="information/:post" component={InformationSingle}/>
      <Route path="submissions/:post" component={SubmissionSingle}/>
    </Route>
  </Route>

)

export default routes
