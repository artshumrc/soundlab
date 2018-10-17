import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';

import './Intro.css';

class Intro extends React.Component {
  render() {
    return (
			<Grid>
        <Row styleName="intro-section">
          <Col styleName="intro-section-col" md={6} sm={12}>
	          <div styleName="site-tag-container intro-tag">
              <h3 styleName="site-tag-subtitle">
								The Sound Lab is a place for students to experiment with sound.
							</h3>
	          </div>
          </Col>
          <Col styleName="intro-section-col" md={6} sm={12}>
	          <div styleName="intro-text-container">
	            <p styleName="intro-text">
								The Sound Lab is a studio for students to experiment with sound production equipment and techniques. We host weekly workshops and offer a suite of equipment for you to use on your project.
							</p>
	            <p styleName="intro-text">
		            Our vibrant community of students and faculty regularly produce and share new work, ranging from music production to podcasts to experimental methods of capturing sound.
							</p>
							<Link to="/sounds">
								<div styleName="listen-latest">
									<i className="mdi mdi-chevron-right" />
									<span>
										Listen to the latest tracks
									</span>
								</div>
							</Link>
	          </div>
          </Col>
        </Row>
			</Grid>
    );
  }
}

export default Intro
