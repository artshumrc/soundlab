import React from 'react';
import { Link } from 'react-router';

import './NavBarHeader.css';

const NavBarHeader = props => (
	<div className="nav-header">
		<i className="mdi mdi-menu left-menu-toggle-icon" />
		<Link to="/">
			<h2 className="site-title">
				orphe.us
			</h2>
		</Link>
	</div>
);

export default NavBarHeader;
