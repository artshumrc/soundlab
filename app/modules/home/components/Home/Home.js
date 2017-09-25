import React, { Component, PropTypes } from 'react'
//import ShowcaseList from '../showcase/ShowcaseList'
//import PlaylistList from '../playlist/PlaylistList'
//import FeaturedTrack from './FeaturedTrack'
//import AudioPlayer from '../audioPlayer/AudioPlayer'
import HomeIntro from './HomeIntro'
import HomeLearn from './HomeLearn'
import HomeRecentContainer from '../../containers/HomeRecentContainer/HomeRecentContainer'
//import MuiThemeProvider from '../../../../../node_modules/material-ui/styles/MuiThemeProvider'
import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite'
import styles from './Home.scss'
import CSSModules from 'react-css-modules'

@CSSModules(styles, {allowMultiple: true})

class Home extends React.Component {



  render() {

    return (

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
          {/*  <Col xs={12} sm={6} md={6} lg={6}>
              <FeaturedTrack />
            </Col> */}
          </Row>

          <HomeIntro />

          <HomeLearn />

          <HomeRecentContainer />

          </div>
  

    )
  }
}

export default Home
