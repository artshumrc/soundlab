import React, { Component, PropTypes } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite'
import styles from './home.scss'
import CSSModules from 'react-css-modules'

@CSSModules(styles, {allowMultiple: true})

class Learn extends React.Component {



  render() {
    const thumbnailListImage = {
        backgroundImage: `url("http://localhost:8888/soundlab/wp-content/uploads/2017/09/mitchel-lensink-236502.jpg")`,
        width: '100%',
        height: '800px',
        objectFit: 'cover',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }

    return (
        <div styleName="learn-section-container">
        <Row styleName="learn-section">

          <Col xs={12} sm={12} md={12} lg={12}>
          <div styleName="fullscreen-learn">
            <div styleName="subtitle-container learn">
              <span styleName="site-tag-subtitle">The Sound Lab is a place for students to experiment with sound.</span>
            </div>
            <div style={thumbnailListImage}></div>
          </div>
          </Col>
        </Row>
        <Row styleName="learn-intro-section">
          <Col xs={12} sm={6} md={6} lg={6}>

            <div styleName="tag-container">
              <span styleName="site-tag learn-tag">Learn through creation.</span>
            </div>
            <div styleName="subtitle-container ">
              <span styleName="site-tag-subtitle">We host weekly workshops covering topics ranging from beginner microphone use to advanced full studio sessions. All students are welcome!</span>
            </div>

          </Col>
        </Row>
        </div>

    )
  }
}

export default Learn
