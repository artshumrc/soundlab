import React, { Component } from 'react'
import Header from '../navigation/Header'
import Footer from '../navigation/Footer'
import styles from './layout.scss'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
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
