import React, { Component } from 'react'
import Header from '../shared/header'
import Footer from '../shared/footer'
import styles from './layout.scss'
import AudioPlayer from '../audioPlayer/AudioPlayer'
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'
import CSSModules from 'react-css-modules'

var injectTapEventPlugin = require("react-tap-event-plugin")
injectTapEventPlugin()

@CSSModules(styles, {allowMultiple: true})
class HomeLayout extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div>
        <div>
          <Header />
        </div>
        <div styleName="homeLayoutContainer">
          {this.props.children}
        </div>
        <div>
          <AudioPlayer />
        </div>
        <div>
          <Footer />
        </div>
      </div>
      </MuiThemeProvider>
    )
  }
}
export default HomeLayout
