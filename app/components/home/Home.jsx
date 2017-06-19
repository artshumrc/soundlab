import React, { Component, PropTypes } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import ShowcaseList from '../showcase/ShowcaseList'
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'
import styles from './home.scss'
//import AudioPlayer from 'react-responsive-audio-player'
import ReactAudioPlayer from 'react-audio-player'
import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite'


class Home extends React.Component {



  render () {

    return (
      <MuiThemeProvider>

        <div>

          <ShowcaseList />
          <ReactAudioPlayer
            className={styles.reactAudioPlayer}
            src="http://localhost:8888/soundlab/wp-content/uploads/2017/06/soundlabtestone.mp3"
            autoPlay={false}
            controls
          />


        </div>

      </MuiThemeProvider>

    )
  }
}

export default Home
