import React from 'react';
import PropTypes from 'prop-types';


const MenuItem = ({ to, onClick, children }) => (
	<Link
		className="menu-item"
		to={to}
		onClick={onClick}
	>
		{children}
	</Link>
);

MenuItem.propTypes = {
	to: PropTypes.string,
	onClick: PropTypes.func,
};

export default MenuItem;
