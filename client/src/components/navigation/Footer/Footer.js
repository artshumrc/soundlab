import React from 'react';
import {
  Grid,
  Row,
  Col,
  Button,
  NavItem,
  Navbar,
  Nav
} from 'react-bootstrap';

import './Footer.css';

export default class Footer extends React.Component {
	render() {
		const now = new Date();
		const year = now.getFullYear();
		return (
			<section id="footer">
				<Navbar className="footerNav">
					<Grid>
						<Row>
							<Col lg={4}>
								<Navbar.Header>
									<Navbar.Brand>
                    © orphe.us, {year}
                  </Navbar.Brand>
								</Navbar.Header>
							</Col>
							<Col lg={8}>
								<Nav>
									<NavItem eventKey={2} href="#">About</NavItem>
									<NavItem eventKey={3} href="#">Community</NavItem>
									<NavItem eventKey={4} href="#">Services</NavItem>
									<NavItem eventKey={7} href="mailto:contact@orphe.us">Contact</NavItem>
								</Nav>
							</Col>
						</Row>
					</Grid>
				</Navbar>
			</section>
		);
	}
}
