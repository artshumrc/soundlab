import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import styles from './singlePage.scss'
import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite'
import CSSModules from 'react-css-modules'

@CSSModules(styles, {allowMultiple: true})

export default class About extends Component {

  render() {
    const aboutCoverImage = {
        backgroundImage: `url("http://localhost:8888/soundlab/wp-content/uploads/2017/09/lee-campbell-123238.jpg")`,
        width: '100%',
        height: '500px',
        objectFit: 'cover',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }
    return (
        <div>

          <Row styleName="about-cover-section">


          </Row>
          <Row styleName="about-content-section">
            <Col xs={12} sm={12} md={8} lg={8} mdOffset={2} lgOffset={2}>
              <div styleName="about-cover-image" style={aboutCoverImage}></div>
              <div>
                <span styleName="about-section-title">About the Sound Lab</span>
                <p styleName="about-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <span styleName="team-section-title">Team</span>
              </div>

            </Col>

          </Row>

        </div>




    )
  }
}
