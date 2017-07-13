import React, { Component, PropTypes } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import ShowcaseList from '../showcase/ShowcaseList'
import PlaylistList from '../playlist/PlaylistList'
import AudioPlayer from '../audioPlayer/AudioPlayer'
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'
import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite'
import styles from './home.scss'
import CSSModules from 'react-css-modules'

@CSSModules(styles, {allowMultiple: true})

class Home extends React.Component {

  render() {

    return (
      <MuiThemeProvider>

        <div>

          <div>
            <ShowcaseList />
          </div>
          <div>
            <AudioPlayer />
          </div>

        </div>

      </MuiThemeProvider>

    )
  }
}

export default Home
