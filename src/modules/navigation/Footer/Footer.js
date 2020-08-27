import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import './Footer.css';

class Footer extends Component {
	render() {
		return (
			<footer>
				<Row>
					<Col md={6}>
						<div className="footer-left">
							<div>
								<span className="footer-site-title">The Sound Lab</span>
							</div>
							<div>
								<span className="footer-site-title">at Harvard University</span>
							</div>
							<div className="footer-nav-container">
								<a
									href="mailto:soundlab@g.harvard.edu"
									target="_blank"
									rel="noreferrer noopener"
									className="footer-social-link"
								>
						                Contact
								</a>
								<a
									href="/terms"
									className="footer-social-link"
								>
									Privacy
								</a>
								<a 
									href="https://accessibility.huit.harvard.edu/digital-accessibility-policy"
									target="_blank"
									className="footer-social-link"
								>
									Accessibility
								</a>
							</div>
						</div>
					</Col>
					{/*
          <Col md={6}>
						<div className="footer-social-links">
							<a
								href="https://facebook.com"
								target="_blank"
								rel="noreferrer noopener"
								className="footer-social-link"
							>
	              Facebook
							</a>
							<a
								href="https://twitter.com"
								target="_blank"
								rel="noreferrer noopener"
								className="footer-social-link"
							>
	              Twitter
							</a>
							<a
								href="https://youtube.com"
								target="_blank"
								rel="noreferrer noopener"
								className="footer-social-link"
							>
	              YouTube
							</a>
							<a
								href="https://soundcloud.com"
								target="_blank"
								rel="noreferrer noopener"
								className="footer-social-link"
							>
	              Soundcloud
							</a>
						</div>
          </Col>
          */}
				</Row>
			</footer>
		);
	}
}

export default Footer;
