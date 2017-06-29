import React from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import './Header.css';

export default class Header extends React.Component {
	render() {
		return (
			<div>
				<Navbar className="social-nav" fixedTop>
					<Nav>
						<NavItem eventKey={1} href="#"><FontAwesome name="facebook-official" className="social-icon" /></NavItem>
						<NavItem eventKey={2} href="#"><FontAwesome name="twitter" className="social-icon" /></NavItem>
						<NavItem eventKey={3} href="#"><FontAwesome name="pinterest" className="social-icon" /></NavItem>
						<NavItem eventKey={4} href="#"><FontAwesome name="instagram" className="social-icon" /></NavItem>
						<NavItem eventKey={5} href="#"><FontAwesome name="skype" className="social-icon" /></NavItem>
						<NavItem eventKey={6} href="#"><FontAwesome name="dribbble" className="social-icon" /></NavItem>
					</Nav>
					<Nav pullRight>
						<NavItem eventKey={1} href="#"><FontAwesome name="envelope-o" className="social-icon" /> Newsletter</NavItem>
						<NavItem eventKey={2} href="#"><FontAwesome name="key" className="social-icon" /> Login</NavItem>
						<NavItem eventKey={3} href="#"><FontAwesome name="unlock-alt" className="social-icon" /> Register</NavItem>
					</Nav>
				</Navbar>
				<Navbar className="page-nav" fixedTop>
					<Navbar.Header>
						<Navbar.Brand>
              Orpheus
            </Navbar.Brand>
					</Navbar.Header>
					<Nav>
						<NavItem eventKey={1} href="#">Home</NavItem>
						<NavItem eventKey={2} href="#">About</NavItem>
						<NavItem eventKey={3} href="#">Features</NavItem>
						<NavItem eventKey={4} href="#">Portfolio</NavItem>
						<NavItem eventKey={5} href="#">Testimonials</NavItem>
					</Nav>
					<Nav pullRight>
						<NavItem eventKey={1} href="#"><FontAwesome name="search" className="social-icon" /></NavItem>
						<NavItem eventKey={2} href="#"><FontAwesome name="bars" className="social-icon" /></NavItem>
					</Nav>
				</Navbar>
			</div>
		);
	}
}
