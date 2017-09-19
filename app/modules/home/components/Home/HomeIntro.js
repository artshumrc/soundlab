import React, { Component, PropTypes } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite'
import styles from './Home.scss'
import CSSModules from 'react-css-modules'

@CSSModules(styles, {allowMultiple: true})

class HomeIntro extends React.Component {

  render() {


    return (

        <Row styleName="intro-section">
          <Col xs={12} sm={6} md={6} lg={6}>
          <div styleName="site-tag-container intro-tag">
            <div styleName="subtitle-container">
              <span styleName="site-tag-subtitle">The Sound Lab is a place for students to experiment with sound.</span>
            </div>
          </div>
          </Col>
          <Col xs={12} sm={6} md={6} lg={6}>
          <div styleName="intro-text-container">
            <span styleName="intro-text">The Sound Lab is a studio for students to experiment with sound production equipment and techniques. We host weekly workshops and offer a suite of equipment for you to use on your project.
            <br/><br/>
            Our vibrant community of students and faculty regularly produce and share new work, ranging from music production to podcasts to experimental methods of capturing sound.
            </span>
          </div>
          </Col>
        </Row>

    )
  }
}

export default HomeIntro
