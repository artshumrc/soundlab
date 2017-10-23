import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite'
import CSSModules from 'react-css-modules'

import styles from '../singlePage.scss'

@CSSModules(styles, {allowMultiple: true})
export default class About extends Component {

  render() {
    const aboutCoverImage = {
      backgroundImage: `url("/images/default_event.jpg")`,
      width: '100%',
      height: '500px',
      objectFit: 'cover',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    };

    const teamMemberImage = {
      backgroundImage: `url("/images/default_sound.jpg")`,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    };


    return (
      <div>
        <Row styleName="about-cover-section">
        </Row>
        <Row styleName="about-content-section">
          <Col mdOffset={1} lgOffset={2} sm={12} md={10} lg={8}>
            <div styleName="about-cover-image" style={aboutCoverImage}></div>
            <div>
              <h1 styleName="about-section-title">
								About the Sound Lab
							</h1>
              <p styleName="about-text">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
							</p>

              <div styleName="about-team-section">
                <span styleName="team-title">Team</span>
                <div styleName="team-member top">
                  <div styleName="team-member-pic-container">
                    <div style={teamMemberImage}></div>
                  </div>
                  <div styleName="team-member-meta">
                    <h3 styleName="member-name">Alexander Rehding</h3>
                    <h3 styleName="member-position">Director</h3>
                    <p styleName="member-about-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                  </div>
                </div>
                <div styleName="team-member top">
                  <div styleName="team-member-pic-container">
                    <div style={teamMemberImage}></div>
                  </div>
                  <div styleName="team-member-meta">
                    <h3 styleName="member-name">Christopher Danforth</h3>
                    <h3 styleName="member-position">Director</h3>
                    <p styleName="member-about-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                  </div>
                </div>
                <div styleName="team-member top">
                  <div styleName="team-member-pic-container">
                    <div style={teamMemberImage}></div>
                  </div>
                  <div styleName="team-member-meta">
                    <h3 styleName="member-name">Peter McMurray</h3>
                    <h3 styleName="member-position">Director</h3>
                    <p styleName="member-about-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
