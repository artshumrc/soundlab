import React from 'react';
import PropTypes from 'prop-types';
import Headroom from 'react-headroom';
import { Link } from 'react-router';
import scrollToElement from '../../../../lib/scrollToElement';
import NavBarHeader from './NavBarHeader';
import './NavBar.css';

const NavBar = ({ toggleAuthModal, userId, logout }) => (
	<Headroom className="navbar">
		<NavBarHeader />
		<ul className="nav">
			<li>
				<Link to={'/#features'}>
					Services
				</Link>
			</li>
			{/*
				<li>
					<Link to={'/community'}>
						Community
					</Link>
				</li>
			*/}
			<li>
				<Link to={'/about'}>
					About
				</Link>
			</li>
			<li>
				{ userId ?
					<Link to={'/dashboard'}>
						Dashboard
					</Link>
				: '' }
			</li>
			<li>
				{!userId ?
					<Link
						to={'/'}
						className="login-button"
						onClick={toggleAuthModal}
					>
						Sign Up / In
					</Link>
				: '' }
			</li>
			{/*
				<li>
					<Link to={'/search'}>
						<i className="mdi mdi-magnify search-icon" />
					</Link>
				</li>
			*/}
		</ul>
	</Headroom>
);

NavBar.propTypes = {
	toggleAuthModal: PropTypes.func.isRequired,
	userId: PropTypes.string,
};

export default NavBar;
