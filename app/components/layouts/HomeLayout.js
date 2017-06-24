import React, { Component } from 'react'
import Header from '../shared/header'
import Footer from '../shared/footer'
import styles from './layout.scss'
var injectTapEventPlugin = require("react-tap-event-plugin")
injectTapEventPlugin()


class HomeLayout extends Component {
  render() {
    return (
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
    );
  }
}
export default HomeLayout;
