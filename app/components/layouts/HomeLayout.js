import React, { Component } from 'react'
import Header from '../shared/header'
import Footer from '../shared/footer'
import styles from './layout.scss'


class HomeLayout extends Component {
  render() {
    return (
      <div>
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
