import React, { Component } from 'react'
import Header from '../navigation/Header'
//import Footer from '../navigation/Footer/Footer'
import styles from './layout.scss'
import PlayerContainer from '../../modules/player/containers/PlayerContainer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
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
