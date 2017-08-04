import React from 'react';
import CoverBackground from '../CoverBackground';
import './Cover.css';


const Cover = props => {
	const classes = [props.className];

	if (props.full) {
		classes.push('cover--full');
	}

	if (props.bottom) {
		classes.push('cover--bottom');
	} else {
		classes.push('cover--center');
	}


	return (
		<div
			className={`cover ${classes.join(' ')}`}
			style={{
				width: window.innerWidth,
				height: props.full ? window.innerHeight : 400,
			}}
		>
			<div
				className="cover-inner"
				style={{
					width: window.innerWidth,
				}}
			>
				{
					props.background &&
					<CoverBackground
						reactsToMouse={props.reactsToMouse}
					>
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
		</div>
	);
}

export default Cover;
