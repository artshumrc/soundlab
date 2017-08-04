import React from 'react';
import './Button.css';

const Button = props => {

	const { href, onClick, light, transparentLight, primary, accent, outline } = props;
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

	if (outline) {
		classes.push('orpheus-button--outline')
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
