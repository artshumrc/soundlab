import React, { Component, PropTypes } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router';

import styles from './Learn.scss'

@CSSModules(styles, {allowMultiple: true})
class Learn extends React.Component {
  render() {
    const thumbnailListImage = {
        width: '100%',
        height: '800px',
        objectFit: 'cover',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };

    return (
			<section styleName="learn">
				<Grid>
		      <Row>
		        <Col>
							<div styleName="learn-upper">
			          <div
									styleName="learn-background"
									style={thumbnailListImage}
								/>
			          <div styleName="learn-inlay">
			            <h3 styleName="learn-title">
										Intro to Ableton
									</h3>
			            <span styleName="learn-date">
										Every Wednesday, 8pm
									</span>
			            <p styleName="learn-description">
										Stop by the lab any Wednesday evening for an introduction to Ableton, a powerful starter tool for any sound production project.
									</p>
									<Link to="/">
										<div styleName="learn-more">
											<i className="mdi mdi-chevron-right" />
											<span>
												Register for the workshop
											</span>
										</div>
									</Link>
			          </div>
							</div>
		        </Col>
		      </Row>
		      <Row>
		        <Col md={6}>
							<div styleName="learn-lower">
			          <h3 styleName="site-tag">
									Learn through creation.
								</h3>
			          <p styleName="site-tag-subtitle">
									We host weekly workshops covering topics ranging from beginner microphone use to advanced full studio sessions. All students are welcome!
								</p>
							</div>
		        </Col>
		        <Col md={6}>
						</Col>
		      </Row>
				</Grid>
			</section>
    );
  }
}

export default Learn;
