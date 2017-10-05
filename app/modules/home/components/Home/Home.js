import React, { Component, PropTypes } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite'
import CSSModules from 'react-css-modules'

import ShowcaseList from '../../../showcase/components/ShowcaseList'
import PlaylistList from '../../../playlist/components/PlaylistList'
import AudioPlayer from '../../../audio/components/AudioPlayer'
import FeaturedTrack from '../FeaturedTrack'
import Intro from '../Intro'
import Learn from '../Learn'
import Recent from '../Recent'
import styles from './Home.scss'

@CSSModules(styles, {allowMultiple: true})

class Home extends React.Component {



  render() {

    return (
      <MuiThemeProvider>
        <div>
          <Row styleName="cover-section">
            <Col xs={12} sm={6} md={6} lg={6}>
              <div styleName="site-tag-container">
                <div styleName="tag-container">
                  <span styleName="site-tag">We hear you</span>
                </div>
                <div styleName="subtitle-container">
                  <span styleName="site-tag-subtitle">The Sound Lab at Harvard University</span>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={6} md={6} lg={6}>
              <FeaturedTrack />
            </Col>
          </Row>

          <Intro />

          <Learn />

          <Recent />

          </div>
        </MuiThemeProvider>

    )
  }
}

export default Home
