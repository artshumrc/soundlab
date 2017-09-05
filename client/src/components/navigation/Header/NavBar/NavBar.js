import React from 'react';
import PropTypes from 'prop-types';
import Headroom from 'react-headroom';
import { Link } from 'react-router';
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
				<Link to={'/services'}>
					Services
				</Link>
			</li>
			<li>
				<Link to={'/community'}>
					Community
				</Link>
			</li>
			<li>
				<Link to={'/about'}>
					About
				</Link>
			</li>
			<li>
				<Link to={'/project'}>
					Projects
				</Link>
			</li>
			<li>
				{ userId ? 
					<Link to={'/dashboard'}>
						Dashboard
					</Link>
					:
					''
				}
			</li>
			<li>
				{userId ?
					<a href="" className="login-button" onClick={logout}>
						LogOot
					</a>
					:
					<a href="" className="login-button" onClick={toggleAuthModal} />
				}
			</li>
			<li>
				<Link to={'/search'}>
					<i className="mdi mdi-magnify search-icon" />
				</Link>
			</li>
		</ul>
	</Headroom>
);

NavBar.propTypes = {
	toggleAuthModal: PropTypes.func.isRequired,
	userId: PropTypes.string.isRequired,
	logout: PropTypes.func.isRequired
};

export default NavBar;
