import React from 'react';
import Headroom from 'react-headroom';
import './NavBar.css';
import scrollToElement from '../../../../lib/scrollToElement';

const NavBar = ({ onToggleAuthModal }) => (
	<Headroom className="navbar">
		<div className="nav-navbar">
			<i className="mdi mdi-bars left-menu-toggle-icon" />
			<h2 className="site-title">
				orphe.us
			</h2>
		</div>
		<ul className="nav">
			<li>
				<a href="#services" onClick={scrollToElement} >
					Services
				</a>
			</li>
			<li>
				<a href="/community" >
					Community
				</a>
			</li>
			<li>
				<a href="#about" onClick={scrollToElement} >
					About
				</a>
			</li>
			<li>
				<a href="#" className="login-button" onClick={onToggleAuthModal}>
					Sign Up / In
				</a>
			</li>
			<li>
				<a href="/search">
					<i className="mdi mdi-magnify search-icon" />
				</a>
			</li>
		</ul>
	</Headroom>
);

export default NavBar;
