import React, { Component } from 'react'
import Header from '../navigation/Header'
//import Footer from '../navigation/Footer/Footer'
import styles from './layout.scss'
import Player from '../../modules/player/components/Player/Player'
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'
import CSSModules from 'react-css-modules'

@CSSModules(styles, {allowMultiple: true})
class MainLayout extends Component {
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
          <Player />
        </div>
        <div>

        </div>
      </div>
      </MuiThemeProvider>
    )
  }
}
export default MainLayout
