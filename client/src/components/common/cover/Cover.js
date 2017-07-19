import React from 'react';
import CoverBackground from './CoverBackground';
import './Cover.css';


const Cover = props => (
	<div
		className={`cover ${props.className}`}
		style={{
			width: window.innerWidth,
			height: window.innerHeight,
		}}
	>
		<CoverBackground>
			{props.background}
		</CoverBackground>
		<div className="cover-content">
			{props.children}
		</div>
		<div className="cover-overlay">
			{props.overlay}
		</div>
	</div>
);

export default Cover;
