import React from 'react';
import Headroom from 'react-headroom';
import { Link } from 'react-router';

import scrollToElement from '../../../../lib/scrollToElement';

import '../../../../components/navigation/Header/NavBar/NavBar.css';
import './ProjectHeader.css';

export default class ProjectHeader extends React.Component {

	render() {
		return (
			<Headroom className="navbar">
				<div className="nav-header">
					<i className="mdi mdi-menu left-menu-toggle-icon" />
					<Link
						to="/"
					>
						<h2 className="site-title">
							Example Project
						</h2>
					</Link>
				</div>
				<ul className="nav">
					<li>
						<Link to="/collections" >
							Collections
						</Link>
					</li>
					<li>
						<Link to="/articles" >
							Articles
						</Link>
					</li>
					<li>
						<Link to="#about" onClick={scrollToElement} >
							About
						</Link>
					</li>
					<li>
						<Link to="#visit" onClick={scrollToElement} >
							Visit
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
					<li>
						<Link to="/search">
							<i className="mdi mdi-magnify search-icon" />
						</Link>
					</li>
				</ul>
			</Headroom>
		);
	}
}
