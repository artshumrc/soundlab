import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import './Footer.css';

class Footer extends Component {
	render() {
		return (
			<footer>
				<Row>
					<Col md={6}>
						<div styleName="footer-left">
							<div>
								<span styleName="footer-site-title">The Sound Lab</span>
							</div>
							<div>
								<span styleName="footer-site-title">at Harvard University</span>
							</div>
							<div styleName="footer-nav-container">
								<a
									href="mailto:soundlab@g.harvard.edu"
									target="_blank"
									rel="noreferrer noopener"
									styleName="footer-social-link"
								>
	                Contact
								</a>
								<a
									href="/terms"
									styleName="footer-social-link"
								>
									Privacy
								</a>
							</div>
						</div>
					</Col>
					{/*
          <Col md={6}>
						<div styleName="footer-social-links">
							<a
								href="https://facebook.com"
								target="_blank"
								rel="noreferrer noopener"
								styleName="footer-social-link"
							>
	              Facebook
							</a>
							<a
								href="https://twitter.com"
								target="_blank"
								rel="noreferrer noopener"
								styleName="footer-social-link"
							>
	              Twitter
							</a>
							<a
								href="https://youtube.com"
								target="_blank"
								rel="noreferrer noopener"
								styleName="footer-social-link"
							>
	              YouTube
							</a>
							<a
								href="https://soundcloud.com"
								target="_blank"
								rel="noreferrer noopener"
								styleName="footer-social-link"
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
