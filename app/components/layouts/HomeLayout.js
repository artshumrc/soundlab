import React, { Component } from 'react'
import Header from '../shared/header'
import Footer from '../shared/footer'
import styles from './layout.scss'
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'

var injectTapEventPlugin = require("react-tap-event-plugin")
injectTapEventPlugin()


class HomeLayout extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div className={styles.siteWrapper}>
        <div>
          <Header />
        </div>
        <div className={styles.homeLayoutContainer}>
          {this.props.children}
        </div>
        <div>
          <Footer />
        </div>
      </div>
      </MuiThemeProvider>
    );
  }
}
export default HomeLayout;
