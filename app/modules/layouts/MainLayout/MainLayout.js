import React, { Component } from 'react'
import CSSModules from 'react-css-modules'

import Header from '../../navigation/Header'
import Footer from '../../navigation/Footer'
import styles from '../Layout.scss'
import PlayerContainer from '../../player/containers/PlayerContainer'

@CSSModules(styles, {allowMultiple: true})
class MainLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        <div styleName="mainContainer">
          {this.props.children}
        </div>
        <PlayerContainer />
      </div>
    )
  }
}
export default MainLayout
