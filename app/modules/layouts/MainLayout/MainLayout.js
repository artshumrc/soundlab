import React, { Component } from 'react'
import CSSModules from 'react-css-modules'

import styles from '../Layout.scss'

@CSSModules(styles, {allowMultiple: true})
class MainLayout extends Component {
  render() {
    return (
      <div styleName="mainContainer">
        {this.props.children}
      </div>
    )
  }
}
export default MainLayout
