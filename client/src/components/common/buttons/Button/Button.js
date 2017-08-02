import React from 'react';
import './Button.css';

const Button = props => {

	const { href, onClick, light, transparentLight, primary, accent } = props;
	const classes = ['orpheus-button'];

	if (primary) {
		classes.push('orpheus-button--primary')
	} else if (accent) {
		classes.push('orpheus-button--accent')
	} else if (light) {
		classes.push('orpheus-button--light')
	} else if (transparentLight) {
		classes.push('orpheus-button--trans-light')
	}

	return (
		<a
			href={href}
			onClick={onClick}
			className={classes.join(' ')}
		>
			{props.children}
		</a>
	)
}

export default Button;
