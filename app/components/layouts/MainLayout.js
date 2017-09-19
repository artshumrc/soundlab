import React, { Component } from 'react'
import Header from '../navigation/Header'
//import Footer from '../navigation/Footer/Footer'
import styles from './layout.scss'
//import AudioPlayer from '../audioPlayer/AudioPlayer'
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'
import CSSModules from 'react-css-modules'

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
        
        </div>
        <div>

        </div>
      </div>
      </MuiThemeProvider>
    )
  }
}
export default HomeLayout
