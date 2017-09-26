import React, { Component } from 'react'
import Header from '../shared/Header'
import Footer from '../shared/Footer'
import styles from './layout.scss'
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'
import CSSModules from 'react-css-modules'


@CSSModules(styles, {allowMultiple: true})
class SinglePageLayout extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div>
        <div styleName="singlePageHeader">
          <Header />
        </div>
        <div styleName="singlePageLayoutContainer">
          {this.props.children}
        </div>
        <div>
          <Footer />
        </div>
      </div>
      </MuiThemeProvider>
    )
  }
}
export default SinglePageLayout
