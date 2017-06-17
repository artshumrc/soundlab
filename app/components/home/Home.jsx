import React, { Component, PropTypes } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import ShowcaseList from '../showcase/ShowcaseList'
import Header from '../header/header'
import Sidenav from '../shared/sidenav'
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'
import styles from './home.scss'
import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite'


class Home extends React.Component {


  render () {
    return (
      <MuiThemeProvider>

        <div>

          <Sidenav />
          <ShowcaseList />

        </div>

      </MuiThemeProvider>

    )
  }
}

export default Home
