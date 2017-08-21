import React from 'react';
import Headroom from 'react-headroom';
import './NavBar.css';
import scrollToElement from '../../../../lib/scrollToElement';

const NavBar = ({ toggleAuthModal, userId, logout }) => (
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
				{userId ? 
					<a href="#" className="login-button" onClick={logout}>
						LogOUt
					</a>
					:
					<a href="#" className="login-button" onClick={toggleAuthModal}>
						Sign Up / In
					</a>
				}
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
