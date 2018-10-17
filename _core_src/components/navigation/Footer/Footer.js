import React from 'react';
import {
  Grid,
  Row,
  Col,
} from 'react-bootstrap';
import { Link } from 'react-router';

import './Footer.css';

export default class Footer extends React.Component {
	render() {
		const now = new Date();
		const year = now.getFullYear();
		return (
			<section id="footer">
				<Grid>
					<Row>
						<Col lg={6}>
							<span className="footerCopyright">
                © orphe.us {year}
							</span>
							<span className="footerBuiltBy">
								Created by&nbsp;
								<a
									href="https://archimedes.digital"
									target="_blank"
									rel="noopener noreferrer"
								>
										Archimedes Digital
								</a>
								.
							</span>
						</Col>
						<Col lg={6}>
							<div className="footerLinks">
								<Link href="mailto:contact@orphe.us">
									Email
								</Link>
							</div>
						</Col>
					</Row>
				</Grid>
			</section>
		);
	}
}
