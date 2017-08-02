import React from 'react';
import CoverBackground from '../CoverBackground';
import './Cover.css';


const Cover = props => {
	const classes = [props.className];

	if (props.full) {
		classes.push('cover--full');
	}

	if (props.center) {
		classes.push('cover--center');
	}

	if (props.bottom) {
		classes.push('cover--bottom');
	}


	return (
		<div
			className={`cover ${props.className}`}
			style={{
				width: window.innerWidth,
				height: props.full ? window.innerHeight : 300,
			}}
		>
			{
				props.background &&
				<CoverBackground>
					{props.background}
				</CoverBackground>
			}
			{
				props.children &&
				<div className="cover-content">
					{props.children}
				</div>
			}
			{
				props.overlay &&
				<div className="cover-overlay">
					{props.overlay}
				</div>
			}
		</div>
	);
}

export default Cover;
