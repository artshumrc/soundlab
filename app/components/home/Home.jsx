import React, { Component, PropTypes } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import ShowcaseList from '../showcase/ShowcaseList'
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'
import styles from './home.scss'
import PlaylistList from '../playlist/PlaylistList'
import AudioPlayer from '../audioPlayer/AudioPlayer'
//import AudioPlayer from 'react-responsive-audio-player'
//import ReactAudioPlayer from 'react-audio-player'

import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite'

//@CSSModules(styles, {allowMultiple: true})

class Home extends React.Component {



  render () {

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
