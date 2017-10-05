import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import CSSModules from 'react-css-modules'

import Header from '../../navigation/Header'
import Footer from '../../navigation/Footer'
import styles from '../Layout.scss'
import PlayerContainer from '../../player/containers/PlayerContainer'

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
          <PlayerContainer />
        </div>
        <div>

        </div>
      </div>
      </MuiThemeProvider>
    )
  }
}
export default MainLayout
