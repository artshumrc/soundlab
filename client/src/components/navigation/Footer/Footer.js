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
import FontAwesome from 'react-fontawesome';
import './Footer.css';

export default class Footer extends React.Component {
	render() {
		const now = new Date();
		const year = now.getFullYear();
		return (
			<section id="footer">
				<div className="footerContent">
					<Grid>
						<Row>
							<Col lg={4}>
							</Col>
							<Col lg={4}>
							</Col>
							<Col lg={4}>
							</Col>
						</Row>
					</Grid>
				</div>
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
									<NavItem eventKey={1} href="#">Home</NavItem>
									<NavItem eventKey={2} href="#">About</NavItem>
									<NavItem eventKey={3} href="#">Community</NavItem>
									<NavItem eventKey={4} href="#">Services</NavItem>
									<NavItem eventKey={7} href="#">Contact</NavItem>
								</Nav>
							</Col>
						</Row>
					</Grid>
				</Navbar>
			</section>
		);
	}
}
