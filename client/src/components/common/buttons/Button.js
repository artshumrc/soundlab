import React from 'react';

const Button = props => {

	const { className, href, onClick, light, primary, accent } = props;
	const classes = ['orpheus-button'];

	if (primary) {
		classes.push('orpheus-button--primary')
	} else if (accent) {
		classes.push('orpheus-button--accent')
	} else if (light) {
		classes.push('orpheus-button--light')
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
