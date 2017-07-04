import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import ReactDOM from 'react-dom';
import scrollToElement from 'scroll-to-element';
import './Header.css';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToItem = this.scrollToItem.bind(this);
  }

  scrollToItem(event) {
    event.preventDefault();
    const elem = event.target.hash;
    scrollToElement(event.target.hash, {offset: -130});
  }

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
						<NavItem href="#home" onClick={this.scrollToItem}>Home</NavItem>
						<NavItem href="#about" onClick={this.scrollToItem} >About</NavItem>
						<NavItem href="#collections" onClick={this.scrollToItem} >Portfolio</NavItem>
            <NavItem href="#features" onClick={this.scrollToItem} >Features</NavItem>
						<NavItem href="#testimonial" onClick={this.scrollToItem} >Testimonials</NavItem>
						<NavItem href="#pricing" onClick={this.scrollToItem} >Pricing</NavItem>
						<NavItem href="#footer" onClick={this.scrollToItem} >Contact</NavItem>
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
