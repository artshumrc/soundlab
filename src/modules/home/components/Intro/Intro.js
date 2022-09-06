import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';

import './Intro.css';

class Intro extends React.Component {
	render() {
		return (
			<div>
				<Row className="intro-section">
					<Col className="intro-section-col" md={6} sm={12}>
						<div className="site-tag-container intro-tag">
							<h3 className="site-tag-subtitle">
								The Sound Lab is a place for students to experiment with sound.
							</h3>
						</div>
					</Col>
					<Col className="intro-section-col" md={6} sm={12}>
						<div className="intro-text-container">
							<p className="intro-text">
								The Sound Lab is a studio for students to experiment with sound production equipment and techniques. We host weekly workshops and offer a suite of equipment for you to use on your project.
							</p>
							<p className="intro-text">
		            Our vibrant community of students and faculty regularly produce and share new work, ranging from music production to podcasts to experimental methods of capturing sound.
							</p>
							<Link to="/sounds">
								<div className="listen-latest">
									<i className="mdi mdi-chevron-right" />
									<span>
										Listen to the latest tracks
									</span>
								</div>
							</Link>
						</div>
					</Col>
				</Row>
			</div>
		);
	}
}

export default Intro
