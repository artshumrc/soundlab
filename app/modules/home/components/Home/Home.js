import React, { Component, PropTypes } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { Grid, Row, Col } from 'react-bootstrap'
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
      <div>
        <Row styleName="cover-section">
          <Col>
            <div styleName="site-tag-container">
              <div styleName="tag-container">
                <span styleName="site-tag">We hear you</span>
              </div>
              <div styleName="subtitle-container">
                <span styleName="site-tag-subtitle">The Sound Lab at Harvard University</span>
              </div>
            </div>
          </Col>
          <Col>
            <FeaturedTrack />
          </Col>
        </Row>
        <Intro />
        <Learn />
        <Recent />
      </div>
    );
  }
}

export default Home
