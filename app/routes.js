import React from 'react'
import { IndexRoute, Route } from 'react-router'
import App from './App.js'
import Home from './components/home/home'
import About from './components/singlePage/about'
import Contact from './components/singlePage/contact'
import Privacy from './components/singlePage/privacy'
import InformationList from './components/information/InformationList'
import InformationSingle from './components/information/InformationSingle'
import AudioUploadList from './components/audioUpload/AudioUploadList'
import AudioUploadSingle from './components/audioUpload/AudioUploadSingle'
import { WordExpressPage } from 'wordexpress-components'
import PostSingle from './components/posts/PostSingle.js'
import Layouts from './components/layouts/layouts.js'

const routes = (
  <Route path="/" component={App} >
    <IndexRoute component={Home}/>
    {/*<Route path=":page" component={WordExpressPage}/>*/}
    <Route path="about" component={About}/>
    <Route path="contact" component={Contact}/>
    <Route path="privacy" component={Privacy}/>
    <Route path="information" component={InformationList}/>
    <Route path="uploads" component={AudioUploadList}/>
    <Route path=":post" component={AudioUploadSingle}/>
    <Route path=":post" component={InformationSingle}/>
  </Route>
)

export default routes
