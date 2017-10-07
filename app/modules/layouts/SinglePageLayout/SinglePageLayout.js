import React, { Component } from 'react'
import CSSModules from 'react-css-modules'

import Header from '../../navigation/Header'
import Footer from '../../navigation/Footer'
import styles from '../Layout.scss'


@CSSModules(styles, {allowMultiple: true})
class SinglePageLayout extends Component {
  render() {
    return (
      <div>
        <div styleName="singlePageHeader">
          <Header />
        </div>
        <div styleName="singlePageLayoutContainer">
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }
}
export default SinglePageLayout
