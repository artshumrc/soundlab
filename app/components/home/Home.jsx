import React, { Component, PropTypes } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import ShowcaseList from '../showcase/ShowcaseList'
import PlaylistList from '../playlist/PlaylistList'
import AudioPlayer from '../audioPlayer/AudioPlayer'
import Intro from './Intro'
import Learn from './Learn'
import Recent from './Recent'
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

        {/*  <svg width="1600px" height="1400px" styleName="cover-lines">
            <path d="M0,56 C400,300 500,895 1494,950" stroke="#fadbd2" fill="transparent"/>
            <path d="M0,86 C440,340 500,895 1494,960" stroke="#fadbd2" fill="transparent"/>
            <path d="M0,116 C480,380 500,895 1494,970" stroke="#fadbd2" fill="transparent"/>
            <path d="M0,146 C520,420 500,895 1494,980" stroke="#fadbd2" fill="transparent"/>
            <path d="M0,176 C560,460 500,895 1494,990" stroke="#fadbd2" fill="transparent"/>
            <path d="M0,206 C600,500 500,895 1494,1000" stroke="#fadbd2" fill="transparent"/>
            <path d="M0,236 C640,540 500,895 1494,1010" stroke="#fadbd2" fill="transparent"/>
            <path d="M0,266 C680,580 500,895 1494,1020" stroke="#fadbd2" fill="transparent"/>
            <path d="M0,296 C720,620 500,895 1494,1030" stroke="#fadbd2" fill="transparent"/>
            <path d="M0,316 C760,660 500,895 1494,1040" stroke="#fadbd2" fill="transparent"/>
            <path d="M0,346 C800,700 500,895 1494,1050" stroke="#fadbd2" fill="transparent"/>
            <path d="M0,376 C840,740 500,895 1494,1060" stroke="#fadbd2" fill="transparent"/>
            <path d="M0,406 C880,800 500,895 1494,1070" stroke="#fadbd2" fill="transparent"/>
            <path d="M0,436 C920,850 500,895 1494,1080" stroke="#fadbd2" fill="transparent"/>
            <path d="M0,466 C960,920 500,895 1494,1080" stroke="#fadbd2" fill="transparent"/>

            <path d="M0,440 C440,650 -150,1730 1494,820" stroke="#fadbd2" fill="transparent"/>
            <path d="M0,440 C440,650 -100,1670 1494,840" stroke="#fadbd2" fill="transparent"/>
            <path d="M0,440 C440,650 -50,1610 1494,860" stroke="#fadbd2" fill="transparent"/>
            <path d="M0,440 C440,650 0,1550 1494,880" stroke="#fadbd2" fill="transparent"/>
            <path d="M0,440 C440,650 50,1490 1494,900" stroke="#fadbd2" fill="transparent"/>
            <path d="M0,440 C440,650 100,1430 1494,920" stroke="#fadbd2" fill="transparent"/>
            <path d="M0,440 C440,650 150,1370 1494,940" stroke="#fadbd2" fill="transparent"/>

            <path d="M0,444 C440,650 200,1310 1494,960" stroke="#fadbd2" fill="transparent"/>
            <path d="M0,448 C440,650 250,1250 1494,980" stroke="#fadbd2" fill="transparent"/>
            <path d="M0,452 C440,650 300,1190 1494,1000" stroke="#fadbd2" fill="transparent"/>
            <path d="M0,456 C440,650 350,1130 1494,1020" stroke="#fadbd2" fill="transparent"/>
            <path d="M0,460 C440,650 400,1070 1494,1040" stroke="#fadbd2" fill="transparent"/>
            <path d="M0,464 C440,650 450,1010 1494,1060" stroke="#fadbd2" fill="transparent"/>
            <path d="M0,468 C440,650 500,950 1494,1080" stroke="#fadbd2" fill="transparent"/>
          </svg> */}

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
              <div styleName="featured-track-component" xs={12} sm={6} md={6} lg={6}>
                <div styleName="featured-track-player-container">

                </div>
                <div styleName="featured-track-meta-container">
                  <span styleName="featured-track-title">
                    <h6>Featured Track</h6>
                  </span>
                  <span styleName="featured-track-meta-item-title">Mozart / Funk</span>
                  <span styleName="featured-track-meta-item-author">Dollie Keller</span>
                </div>
              </div>
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
