import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import './Button.css';

const Button = (props) => {

	const { to, onClick, light, transparentLight, dark, primary, accent, outline } = props;
	const classes = ['orpheus-button'];

	if (primary) {
		classes.push('orpheus-button--primary');
	} else if (accent) {
		classes.push('orpheus-button--accent');
	} else if (light) {
		classes.push('orpheus-button--light');
	} else if (transparentLight) {
		classes.push('orpheus-button--trans-light');
	} else if (dark) {
		classes.push('orpheus-button--dark');
	}

	if (outline) {
		classes.push('orpheus-button--outline');
	}

	return (
		<Link
			to={to}
			onClick={onClick}
			className={classes.join(' ')}
		>
			{props.children}
		</Link>
	);
};

Button.propTypes = {
	to: PropTypes.string,
	onClick: PropTypes.func,
	light: PropTypes.bool,
	transparentLight: PropTypes.bool,
	primary: PropTypes.bool,
	accent: PropTypes.bool,
	outline: PropTypes.bool,
	children: PropTypes.node,
};

export default Button;
