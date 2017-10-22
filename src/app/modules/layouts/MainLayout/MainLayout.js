import React, { Component } from 'react'
import CSSModules from 'react-css-modules'

// components
import Header from '../../navigation/Header'
import Footer from '../../navigation/Footer'

import styles from './MainLayout.scss'

@CSSModules(styles, {allowMultiple: true})
class MainLayout extends Component {
  render() {
    return (
      <div styleName="mainContainer">
				<Header />
        {this.props.children}
				<Footer />
      </div>
    )
  }
}
export default MainLayout
