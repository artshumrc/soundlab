import React from 'react'
import { IndexRoute, Route } from 'react-router'
import App from './App.js'
import Home from './components/home/home'
import About from './components/about/about'
import InformationList from './components/information/informationList'
import { WordExpressPage } from 'wordexpress-components'
import PostSingle from './components/posts/PostSingle.js'
import Layouts from './components/layouts/layouts.js'

const routes = (
  <Route path="/" component={App} >
    <IndexRoute component={Home}/>
    {/*<Route path=":page" component={WordExpressPage}/>*/}
    <Route path="about" component={About}/>
    <Route path="information" component={InformationList}/>
    <Route path="post/:post" component={PostSingle}/>
  </Route>
)

export default routes
