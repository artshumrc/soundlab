import React from 'react';
import styles from './CoverTitle.scss';

const CoverTitle = props => (
	<div className="coverTitleOuter">
		<h1 className="coverTitle">{props.title}</h1>
	</div>
);


export default CoverTitle;
